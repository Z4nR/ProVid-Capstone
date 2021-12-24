import DataSource from '../../data/data-source'
import L from 'leaflet'
import CONFIG from '../../globals/config'

const RumahSakit = {
  async render () {
    return `
      <div class="form-hospital">
        <div class="prov-container"></div>
        <div class="city-container"></div>
        <div class="btn-box">
          <button class="btn-search" id="searchData" type="submit">Cari</button>
        </div>
      </div>
      <div id="map"></div>
    `
  },

  async afterRender () {
    const formProv = document.querySelector('.prov-container')
    const formCity = document.querySelector('.city-container')
    const btnSearch = document.querySelector('#searchData')
    formCity.innerHTML = ''

    const { provinces } = await DataSource.hospitalProv()
    let provinceList = []
    let cityList = []

    const onOptionChange = async (e) => {
      const { selectedIndex } = e.target.options
      citySelect(provinceList[selectedIndex].id)
    }

    const labelProv = document.createElement('label')
    labelProv.classList.add('label-prov')
    labelProv.innerHTML = 'Pilih Provinsi '
    const selectProv = document.createElement('select')
    selectProv.classList.add('select', 'prov-select')
    selectProv.addEventListener('change', onOptionChange)
    provinceList = provinces
    provinceList.forEach((prov) => {
      const optionProv = document.createElement('option')
      optionProv.key = prov.id
      optionProv.innerHTML = prov.name
      selectProv.appendChild(optionProv)
    })
    formProv.appendChild(labelProv)
    formProv.appendChild(selectProv)

    const labelCity = document.createElement('label')
    labelCity.classList.add('label-city')
    labelCity.innerHTML = 'Pilih Kabupaten/Kota '
    formCity.appendChild(labelCity)

    const citySelect = async (provId) => {
      const city = await DataSource.hospitalInCity(provId)
      cityList = city

      const selectCity = document.createElement('select')
      selectCity.classList.add('select', 'city-select')

      city.forEach((city) => {
        const optionCity = document.createElement('option')
        optionCity.key = city.id
        optionCity.innerHTML = city.name
        selectCity.appendChild(optionCity)
      })
      const oldData = document.querySelector('.city-select')
      if (oldData) formCity.removeChild(oldData)
      formCity.appendChild(selectCity)
    }

    const mapLocation = [-0.45406017, 101.51926]
    const mapZoom = 6
    const map = L.map('map').setView(mapLocation, mapZoom)

    btnSearch.addEventListener('click', async () => {
      const selectProv = document.querySelector('.prov-select')
      const { selectedIndex: selectedProv } = selectProv
      const p = provinces[selectedProv]

      const selectCity = document.querySelector('.city-select')
      const { selectedIndex: selectedCity } = selectCity
      const c = cityList[selectedCity]

      const search = await DataSource.searchHospital(p.id, c.id)

      search.forEach(async data => {
        const hosId = await DataSource.hospitalMap(data.id)
        console.log(hosId.lat, hosId.long)
        L.marker([hosId.lat, hosId.long]).addTo(map)
      })

      // hosId.forEach(data => {
      //   L.marker([data.lat, data.long]).addTo(map)
      //   console.log(data.lat, data.long)
      // })

      // const marker = L.marker().addTo(map)
      // marker.bindPopup().openPopup()
    })

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + CONFIG.MapBox_Token, {
      id: 'mapbox/streets-v11',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(map)
  }
}
export default RumahSakit
