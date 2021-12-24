class creditPost extends HTMLElement {
  set credit (credit) {
    this._credit = credit
    this.render()
  }

  render () {
    const credit = this._credit
    this.innerHTML = `
            <article class="credit-item">
                <div class="credit-item__content">
                    <p class="credit-item__label">Thanks To <a href="${credit.repo}" class="credit-item__author">${credit.author}</a></p>
                    <h1 class="credit-item__title"><a href="${credit.link}">${credit.title}</a></h1>
                    <p class="credit-item__description">${credit.desc}</p>
                </div>
            </article>
        `
  }
}

customElements.define('credit-isi', creditPost)
