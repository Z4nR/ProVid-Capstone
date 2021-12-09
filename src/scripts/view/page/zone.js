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

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    })

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + CONFIG.MapBox_Token, {
      id: 'mapbox/light-v9',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(map)

    L.geoJson(province).addTo(map)
  }
}
export default Zona
