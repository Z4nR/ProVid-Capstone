class prokesData extends HTMLElement {
  set content (prokes) {
    this._prokes = prokes
    this.render()
  }

  render () {
    const data = this._prokes
    this.innerHTML = `
        <div class="post-item-contentProtect">
            <img class="protectIcon" src="${data.image}" alt="${data.name}">
            <div class="protectionInfo">
                <h4>${data.name}</h4>
                <p>${data.description}</p>
            </div>
        </div>`
  }
}

customElements.define('prokes-data', prokesData)
