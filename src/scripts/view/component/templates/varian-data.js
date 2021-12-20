class varianData extends HTMLElement {
  set content (varian) {
    this._varian = varian
    this.render()
  }

  render () {
    const data = this._varian
    this.innerHTML = `
            <div class="post-item-contentVarian">
                <h4 class="post-item-nameVarian">${data.name}</h4>
                <p class="post-item-countryVarian">Ditemukan : ${data.firstCountry} - ${data.knowDate}</p>
                <p class="post-item-symptomsVarian">Gejala : ${data.symptoms}</p>
            </div>`
  }
}

customElements.define('varian-data', varianData)
