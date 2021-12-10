import L from 'leaflet'
import province from '../../data/prov_id'
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

    const style = feature => {
      return {
        fillColor: 'gray',
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
      }
    }

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

    const zoomToFeature = e => {
      map.fitBounds(e.target.getBounds())
    }

    const onEachFeature = (feature, layer) => {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
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
