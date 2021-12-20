import DataSource from '../../data/data-source'
import data from '../../data/other-data.json'

const Beranda = {
  async render () {
    return `
      <div class="vaksin" id="vaksin">
        <vaksin-data></vaksin-data>
      </div>
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
    document.querySelector('vaksin-data').vaksin = vaksinsasi

    // get data Protection
    const prokesContainer = document.querySelector('#protection')
    data.protection.forEach((data) => {
      const prokesBox = document.createElement('prokes-data')
      prokesBox.content = data
      prokesContainer.appendChild(prokesBox)
    })

    // get data varian virus
    const covidContainer = document.querySelector('#varian')
    data.varian.forEach((data) => {
      const varianBox = document.createElement('varian-data')
      varianBox.content = data
      covidContainer.appendChild(varianBox)
    })
  }
}

export default Beranda
