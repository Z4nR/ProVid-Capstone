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

    const covidData = await DataSource.covidProvince()
    province.features = province.features.map(feature => {
      const covidDataOnArea = covidData.find(data => data.provinsi === feature.properties.Propinsi)
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
    }

    const resetHighlight = e => {
      geoJson.resetStyle(e.target)
    }

    const zoomToFeature = async (event, feature) => {
      const a = await DataSource.getProvinceGeoJson()
      L.geoJson(a.default, { style: style, onEachFeature: onEachFeature }).addTo(map)
      map.fitBounds(event.target.getBounds())
    }

    const onEachFeature = (feature, layer) => {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: (event) => zoomToFeature(event, feature)
      })
    }

    const geoJson = L.geoJson(province, { style: style, onEachFeature: onEachFeature }).addTo(map)

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + CONFIG.MapBox_Token, {
      id: 'mapbox/light-v9',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(map)
  }
}
export default Zona
