import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const Zona = {
  async render () {
    return `
      <section class="map-box">
        <div id="map"></div>
      <section>
    `
  },

  async afterRender () {
    const map = L.map('map').setView([51.505, -0.09], 13)

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup()
  }
}
export default Zona
