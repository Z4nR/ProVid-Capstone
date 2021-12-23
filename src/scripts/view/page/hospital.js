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
<<<<<<< HEAD
    labelProv.innerHTML = 'Pilih Provinsi'

=======
    labelProv.innerHTML = 'Pilih Provinsi '
>>>>>>> 66f4987a8c69879bac99ee495e791c7235a938f9
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
<<<<<<< HEAD
    labelCity.innerHTML = 'Pilih Kabupaten/Kota'

=======
    labelCity.innerHTML = 'Pilih Kabupaten/Kota '
>>>>>>> 66f4987a8c69879bac99ee495e791c7235a938f9
    const selectCity = document.createElement('select')

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
    }

    formProv.appendChild(labelProv)
    formProv.appendChild(selectProv)
    formCity.appendChild(labelCity)
    formCity.appendChild(selectCity)

    const onClickSearch = async (e) => {
      const { selectedIndex } = e.target.options
      const prov = provinsi.provinces[selectedIndex]
      const city = city[selectedIndex]
      await DataSource.searchHospital(prov.id, city.id)
    }

    btnSearch.addEventListener('click', onClickSearch)
  }
}
export default RumahSakit
