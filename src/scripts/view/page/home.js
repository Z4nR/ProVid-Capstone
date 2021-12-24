import DataSource from '../../data/data-source'
import data from '../../data/other-data.json'
import Spinner from '../component/templates/spinner'

const Beranda = {
  async render () {
    return `
      <div id="loading"></div>
        <div id="main-container">
          <div class="vaksin" id="vaksin">
            <vaksin-data></vaksin-data>
          </div>
          <div class="virus">
            <article class="post-item-virus">
              <div class="protection" id="protection">
                <h1 class="__label">Protokol Kesehatan</h1>
              </div>
            </article>
            <article class="post-item-virus">
              <div class="varian" id="varian">
                <h1 class="__label">Varian Covid</h1>
              </div>
            </article>
          </div>
          </div>
      </div>
    `
  },

  async afterRender () {
    const loading = document.querySelector('#loading')
    const mainContainer = document.querySelector('#main-container')
    // get data Protection
    const prokesContainer = document.querySelector('#protection')
    // get data varian virus
    const covidContainer = document.querySelector('#varian')

    // change main display to spinner
    mainContainer.style.display = 'none'
    loading.innerHTML = Spinner()

    try {
      // get data vaksinasi
      const vaksinsasi = await DataSource.vaccine()
      document.querySelector('vaksin-data').vaksin = vaksinsasi

      // loop data protection
      data.protection.forEach((data) => {
        const prokesBox = document.createElement('prokes-data')
        prokesBox.content = data
        prokesContainer.appendChild(prokesBox)
      })

      // loop data varian
      data.varian.forEach((data) => {
        const varianBox = document.createElement('varian-data')
        varianBox.content = data
        covidContainer.appendChild(varianBox)
      })

      // change spinner display to main
      loading.style.display = 'none'
      mainContainer.style.display = 'block'
    } catch (err) {
      console.error(err)

      mainContainer.style.display = 'block'
      loading.style.display = 'none'
      restaurantContainer.innerHTML = `Error: ${err.message}`
      initSwalError(err.message)
    }
  }
}

export default Beranda
