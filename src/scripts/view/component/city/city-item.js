class cityItems extends HTMLElement {
  set citys (city) {
    this._city = city
    this.render()
  }

  render () {
    const city = this._city
    this.innerHTML = `
      <div class="city">
        <h4>${city.kota}</h4>
        <p>${city.hasil}
      </div>
      `
  }
}

customElements.define('city-item', cityItems)
