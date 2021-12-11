/* eslint-disable no-unused-expressions */
import DataSource from '../../data/data-source'
import { createVaksinTemplate } from '../component/templates/template-home'

const Beranda = {
  async render () {
    return `
      <div class="vaksin" id="vaksin">
        
      </div>

      <div class="protection" id="protection">
        
      </div>
    `
  },

  async afterRender () {
    const vaksinsasi = await DataSource.vaccine()
    document.querySelector('#vaksin').innerHTML = createVaksinTemplate(vaksinsasi)
  }
}

export default Beranda
