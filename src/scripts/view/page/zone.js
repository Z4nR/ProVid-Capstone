import L from 'leaflet'
import DataSource from '../../data/data-source'
import province from '../../data/geojson/prov_id'
import CONFIG from '../../globals/config'

const Zona = {
  async render () {
    return `
      <section class="map-box">
        <div id="map"></div>
      <section>
    `
  },

  async afterRender () {
    const mapLocation = [0.789, 119.9213]
    const mapZoom = 5
    const map = L.map('map').setView(mapLocation, mapZoom)

    const info = L.control()
    info.onAdd = function (map) {
      this._div = L.DomUtil.create('div', 'info')
      this.update()
      return this._div
    }
    info.update = function (props) {
      this._div.innerHTML = '<h4>Indonesian Covid Medical Density</h4>' + (props
        ? '<b>' + props.Propinsi + '</b><br />' + props.density + ' orang dirawat '
        : 'Hover over a state')
    }
    info.addTo(map)

    const covidData = await DataSource.covidProvince()
    province.features = province.features.map(feature => {
      const covidDataOnArea = covidData.find(data => data.provinsi === feature.properties.Propinsi)
      console.log(covidDataOnArea)
      const density = covidDataOnArea?.dirawat || 0
      return {
        ...feature,
        properties: {
          ...feature.properties,
          density
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

    const legend = L.control({ position: 'bottomright' })
    legend.onAdd = function (map) {
      const div = L.DomUtil.create('div', 'info legend')
      const grades = [0, 10, 20, 50, 100, 200, 500, 1000]
      for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
          '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+')
      }

      return div
    }
    legend.addTo(map)

    const style = feature => ({
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    })

    const highlightFeature = e => {
      const layer = e.target

      layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
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

    const zoomToFeature = (event, feature) => {
      map.fitBounds(event.target.getBounds())
    }

    const onEachFeature = (feature, layer) => {
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
