const RumahSakit = {
  async render () {
    return `
      <form name="form1" action="proses.php" method="get"> 
        <select name="Provinsi" class="provinsi" id="provinsi">
          <option id="optionProvinsi"></option>
        </select>      
      </form>
    `
  },

  async afterRender () {
    const provinsiContainer = document.querySelector('#optionProvinsi')
    const items = require('../../data/other-data.json')
    const list = items.provinces

    for (let i = 0; i < list.length; i++) {
      if (list[i].id) {
        console.log(list[i].name)
        provinsiContainer.innerHTML += list[i].name
      }
    }
  }
}
export default RumahSakit
