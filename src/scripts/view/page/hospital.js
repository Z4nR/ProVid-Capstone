import L from 'leaflet'
import '../../data/data-source'

const RumahSakit = {
  async render () {
    return `
    <section class="map-box">
      <form>               
        <input class="search" type="search" placeholder="Search...">               
        <input class="button" type="submit" value="Search">       
      </form>
      <div id="map" class"mapHospital">
      </div>
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

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
  }
}
export default RumahSakit
