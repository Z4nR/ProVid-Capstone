/* eslint-disable no-unused-expressions */
import DataSource from '../../data/data-source'
import { createVaksinTemplate, getDataProtection, getDataCovid } from '../component/templates/template-home'
// json
import data from '../../data/other-data.json'

const Beranda = {
  async render () {
    return `
      <div class="vaksin" id="vaksin"></div>
      
      <div class="virus">
        <article class="post-item-virus">
          <div class="protection" id="protection">
            <h1 class="protection__label">Protokol Kesehatan</h1>
          </div>
        </article>
        <article class="post-item-virus">
          <div class="varian" id="varian">
            <h1 class="vaksin__label">Varian Covid</h1>
          </div>
        </article>
      </div>
    `
  },

  async afterRender () {
    // get data vaksinasi
    const vaksinsasi = await DataSource.vaccine()
    document.querySelector('#vaksin').innerHTML = createVaksinTemplate(vaksinsasi)

    // get data Protection
    const prokesContainer = document.querySelector('#protection')
    data.protection.forEach((data, i) => {
      prokesContainer.innerHTML += getDataProtection(data)
    })

    // get data varian virus
    const covidContainer = document.querySelector('#varian')
    data.varian.forEach((data, i) => {
      covidContainer.innerHTML += getDataCovid(data)
    })
  }
}

export default Beranda
