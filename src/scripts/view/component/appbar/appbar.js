class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="header-inner">
            <h1 class="header_title">
                ProVid
            </h1>
        </div>

        <div class="hamburger-container">
            <button aria-label="Hamburger Anchor" id="menu" class="header_menu">☰</button>
        </div>

        <nav id="drawer" class="nav">
             <ul class="nav-list">
                <li class="nav_item" aria-label="Beranda"><a href="#/home">Beranda</a></li>
                <li class="nav_item" aria-label="Zona Resiko"><a href="#/zone">Zonasi</a></li>
                <li class="nav_item" aria-label="Rumah Sakit Rujukan"><a href="#/hospital">RS.Rujukan</a></li>
                <li class="nav_item" aria-label="Tentang"><a href="#/about">Tentang</a></li>
            </ul>
        </nav>`
  }
}

customElements.define('header-container', AppBar)
