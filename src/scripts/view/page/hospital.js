import DataSource from '../../data/data-source'
import L from 'leaflet'
import 'leaflet/dist/images/marker-icon-2x.png'
import 'leaflet/dist/images/marker-shadow.png'
import CONFIG from '../../globals/config'

const RumahSakit = {
  async render () {
    return `
      <div class="form-hospital">
        <div class="select-box prov-container"></div>
        <div class="select-box city-container"></div>
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
    labelProv.classList.add('label')
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

    const citySelect = async (provId) => {
      const labelCity = document.createElement('label')
      labelCity.classList.add('label')
      labelCity.innerHTML = 'Pilih Kabupaten/Kota '
      formCity.appendChild(labelCity)

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

    const mapLocation = [-1.2480891, 115.419]
    const mapZoom = 5
    const map = L.map('map').setView(mapLocation, mapZoom)
    const hospitalIcon = L.icon({
      iconUrl: '../marker/clinic-medical-solid.svg',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76]
    })

    btnSearch.addEventListener('click', () => {
      const selectProv = document.querySelector('.prov-select')
      const { selectedIndex: selectedProv } = selectProv
      const p = provinces[selectedProv]

      const selectCity = document.querySelector('.city-select')
      const { selectedIndex: selectedCity } = selectCity
      const c = cityList[selectedCity]
      searchData(p.id, c.id)
    })

    const searchData = async (p, c) => {
      const search = await DataSource.searchHospital(p, c)

      search.forEach(data => {
        hospital(data)
      })
    }

    const hospital = async data => {
      const hosMap = await DataSource.hospitalMap(data.id)
      const hosDtl = await DataSource.hospitalDetail(data.id)

      const marker = L.marker([hosMap.lat, hosMap.long], { icon: hospitalIcon }).addTo(map)
      marker.bindPopup(hosDtl.name + '<br>' + hosDtl.address + '<br>' + '<a href="' + hosMap.gmaps + '">Lokasi</a>' + '<br>' +
      '<a href="tel:' + hosDtl.phone + '">' + hosDtl.phone + '</a>' + '<br>' +
      'Jumlah tempat tidur yang tersedia :' + data.bed_availability + ' tempat tidur kosong dan ' + data.queue + ' dalam antrian' +
      '<br>' + '(' + data.info + ')').openPopup()
    }

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + CONFIG.MapBox_Token, {
      id: 'mapbox/streets-v11',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(map)
  }
}
export default RumahSakit
