import DataSource from '../../data/data-source'

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
    `
  },

  async afterRender () {
    const formProv = document.querySelector('.prov-container')
    const formCity = document.querySelector('.city-container')
    const btnSearch = document.querySelector('#searchData')
    formCity.innerHTML = ''

    const provinsi = await DataSource.hospitalProv()

    const onOptionChange = async (e) => {
      const { selectedIndex } = e.target.options
      const select = provinsi.provinces[selectedIndex]
      citySelect(select.id)
    }

    const labelProv = document.createElement('label')
    labelProv.classList.add('label-prov')
    labelProv.innerHTML = 'Pilih Provinsi '
    const selectProv = document.createElement('select')
    selectProv.classList.add('select')

    const optionPlaceHolderProv = document.createElement('option')
    optionPlaceHolderProv.disabled = true
    optionPlaceHolderProv.selected = true
    optionPlaceHolderProv.innerHTML = '-- Pilih Provinsi --'
    selectProv.appendChild(optionPlaceHolderProv)

    selectProv.addEventListener('change', onOptionChange)
    provinsi.provinces.forEach((prov) => {
      const optionProv = document.createElement('option')
      optionProv.key = prov.id
      optionProv.innerHTML = prov.name
      selectProv.appendChild(optionProv)
    })

    const labelCity = document.createElement('label')
    labelCity.classList.add('label-city')
    labelCity.innerHTML = 'Pilih Kabupaten/Kota '
    const selectCity = document.createElement('select')
    selectCity.classList.add('select', 'city-select')

    const optionPlaceHolderCity = document.createElement('option')
    optionPlaceHolderCity.disabled = true
    optionPlaceHolderCity.selected = true
    optionPlaceHolderCity.innerHTML = '-- Pilih Kabupaten --'
    selectCity.appendChild(optionPlaceHolderCity)

    const citySelect = async (provId) => {
      const city = await DataSource.hospitalInCity(provId)

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

    formProv.appendChild(labelProv)
    formProv.appendChild(selectProv)
    formCity.appendChild(labelCity)
    formCity.appendChild(selectCity)

    const onClickSearch = async () => {
      const search = await DataSource.searchHospital()
    }

    btnSearch.addEventListener('click', onClickSearch)
  }
}
export default RumahSakit
