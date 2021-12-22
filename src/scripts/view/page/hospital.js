import DataSource from '../../data/data-source'

const RumahSakit = {
  async render () {
    return `
      <div class="form-hospital">
        <h5>Pilih Provinsi</h5>
        <select class="select" name="" onChange=changeData() placeholder="Pilih Provinsi--" id="provinsi"></select>
        <h5>Pilih Kota/Kabupaten</h5>
        <select class="select" name="" placeholder="Pilih Kota--" id="city"></select>
      </div>
    `
  },

  async afterRender () {
    const provinsiSelectorContainer = document.querySelector('#provinsi')
    const provinsi = await DataSource.hospitalProv()
    let [prov, optionProv] = ''
    provinsi.provinces.forEach((prov) => {
      optionProv += '<option key="' + prov.id + '"' + 'value ="' + prov.name + '">' + prov.name + '</option' + '<br>'
    })
    provinsiSelectorContainer.innerHTML = optionProv
    const changeData = event => {
      prov(event.target.value)
    }

    const city = await DataSource.hospitalInCity(prov.id)
    let optionCity = ''
    const citySelectorContainer = document.querySelector('#city')
    city.forEach((city) => {
      optionCity += '<option key="' + city.id + '"' + 'value ="' + city.id + '">' + city.name + '</option' + '<br>'
    })
    citySelectorContainer.innerHTML = optionCity
  }
}
export default RumahSakit
