class cityRisk extends HTMLElement {
  set risk (risk) {
    this._risk = risk
    this.render()
  }

  render () {
    const { can } = this._risk
    let _cans = ''
    can.forEach((can) => _cans += `<li>${can.description}</li>`)

    this.innerHTML = `
            <div class="rule">
                <div class="cans">
                    <h4>Hal yang dapat dilakukan</h4>
                    <ul class="list">${_cans}</ul>
                </div>
            </div>`
  }
}

customElements.define('city-risk', cityRisk)
