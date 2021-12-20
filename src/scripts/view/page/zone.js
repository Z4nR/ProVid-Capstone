import L from 'leaflet'
import DataSource from '../../data/data-source'
import province from '../../data/geojson/prov_id'
import CONFIG from '../../globals/config'
import data from '../../data/other-data.json'

const Zona = {
  async render () {
    return `
    <section class="map-box">
      <div id="map">
      </div>
    <section>
    `
  },

  async afterRender () {
    const mapLocation = [-0.45406017, 101.51926]
    const mapZoom = 6
    const map = L.map('map').setView(mapLocation, mapZoom)

    const covidDataNas = await DataSource.covidNational()
    const covidDataProv = await DataSource.covidProvince()
    province.features = province.features.map(feature => {
      const covidDataOnArea = covidDataProv.find(data => data.provinsi === feature.properties.Name)
      const density = covidDataOnArea?.dirawat || 0
      const date = covidDataNas
      return {
        ...feature,
        properties: {
          ...feature.properties,
          density,
          date
        }
      }
    })

    const getColor = c => {
      return c > 1000
        ? '#800026'
        : c > 500
          ? '#BD0026'
          : c > 200
            ? '#E31A1C'
            : c > 100
              ? '#FC4E2A'
              : c > 50
                ? '#FD8D3C'
                : c > 20
                  ? '#FEB24C'
                  : c > 10
                    ? '#FED976'
                    : '#FFEDA0'
    }

    const getCityLevel = c => {
      return c === 'TIDAK TERDAMPAK'
        ? '#008000'
        : c === 'TIDAK ADA KASUS'
          ? '#9FE758'
          : c === 'RESIKO RENDAH'
            ? '#DED716'
            : c === 'RESIKO SEDANG'
              ? '#FFA500'
              : c === 'RESIKO TINGGI'
                ? '#FF0000'
                : '#FFFFFF'
    }

    const info = L.control()
    info.onAdd = function () {
      this._div = L.DomUtil.create('div', 'info')
      this.update()
      return this._div
    }
    info.update = function (props) {
      this._div.innerHTML = '<h4>Status Pandemi Covid di Indonesia</h4>' + (props
        ? '<b>' + props.Name + '</b><br />' + props.density + '</b><br />' + ' Update Terakhir : ' + props.date
        : 'Pilih satu wilayah')
    }
    info.addTo(map)

    const provIndicator = L.control({ position: 'bottomright' })
    provIndicator.onAdd = function () {
      const div = L.DomUtil.create('div', 'info indicator')
      const grades = [0, 10, 20, 50, 100, 200, 500, 1000]
      div.innerHTML += '<p>Jumlah Pasien Dirawat</p>'
      for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
          '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+')
      }
      return div
    }
    provIndicator.addTo(map)

    const cityIndicator = L.control({ position: 'bottomright' })
    cityIndicator.onAdd = function () {
      const div = L.DomUtil.create('div', 'info indicator')
      const grades = ['RESIKO TINGGI', 'RESIKO SEDANG', 'RESIKO RENDAH', 'TIDAK ADA KASUS', 'TIDAK TERDAMPAK']
      div.innerHTML += '<p>Level Resiko Kota</p>'
      for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
          '<i style="background:' + getCityLevel(grades[i]) + '"></i> ' + grades[i] + '<br>'
      }
      return div
    }
    cityIndicator.addTo(map)

    const style = feature => ({
      fillColor: feature.properties?.Kind === 'Province' ? getColor(feature.properties.density) : getCityLevel(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 1
    })

    const highlightFeature = e => {
      const layer = e.target

      layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 1
      })

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront()
      }

      info.update(layer.feature.properties)
    }

    const resetHighlight = e => {
      geoJson.resetStyle(e.target)
      info.update()
    }

    const prov = DataSource.getProvinceGeoJson()
    let currentMap = null
    const zoomToFeature = async (event, feature) => {
      if (feature.properties?.Kind !== 'City') {
        currentMap?.remove()
        const selectedProv = prov.find(data => data.name === feature.properties.Name)

        const cityRisk = await DataSource.cityRisk()
        const showCity = selectedProv.geojson
        showCity.features = showCity.features.map(feature => {
          const covidLevelOnArea = cityRisk.data.find(data => data.kota === feature.properties.Name)
          const density = covidLevelOnArea?.hasil || 'TIDAK ADA DATA'
          const risk = data.city.find(data => data.density === density)
          console.log(risk)
          const can = risk?.can || 'TIDAK ADA DATA'
          console.log(can)
          const date = cityRisk.tanggal
          return {
            ...feature,
            properties: {
              ...feature.properties,
              density,
              date,
              can
            }
          }
        })

        currentMap = L.geoJSON(showCity, { style: style, onEachFeature: onEachFeature })
        currentMap.addTo(map)
      }
      map.fitBounds(event.target.getBounds())
    }

    let _can = ''
    const onEachFeature = (feature, layer) => {
      if (feature.properties?.Kind === 'City') {
        const desc = feature.properties.can
        desc.forEach((can) => _can += `<li>${can.description}</li>`)

        layer.bindPopup('<h1>' + feature.properties.Name + '</h1>' +
          '<h4>' + 'Tingkat Resiko Penyebaran Virus : ' + '<br>' +
          feature.properties.density + '</h4>' +
          '<h4> Hal yang dapat dilakukan </h4>' +
          '<ul>' + _can + '</ul>')
      }

      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: (event) => zoomToFeature(event, feature)
      })
    }

    const geoJson = L.geoJSON(province, { style: style, onEachFeature: onEachFeature }).addTo(map)

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + CONFIG.MapBox_Token, {
      id: 'mapbox/light-v9',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(map)
  }
}
export default Zona
