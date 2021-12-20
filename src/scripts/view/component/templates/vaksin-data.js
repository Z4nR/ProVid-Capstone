class vaksinData extends HTMLElement {
  set vaksin (vaksin) {
    this._vaksin = vaksin
    this.render()
  }

  render () {
    const vaksin = this._vaksin
    this.innerHTML = `
            <h1 h1 class="vaksin__label" > vaksinasi</h1 >
            <div class="posts">
                <article class="post-item-sasaran">
                    <div class="post-item-contentSasaran">
                        <img class="map" src="../image/peta.png">
                        <h2 class="post-item__totalSasaran">${vaksin.totalsasaran}</h2>
                        <p class="post-item__titleSasaran">Total Sasaran</p>
                    </div>
                </article>
                <article class="post-item-vaksin">
                    <div  class="post-item-contentVaksin">
                        <img class="vaksinImage" src="../image/petugas-publik.svg">
                        <div class="vaksinInfo">
                            <h2>${vaksin.sasaranvaksinpetugaspublik}</h2>
                            <p>Total Petugas Umum</p>
                        </div>
                    </div>
                </article>
                <article class="post-item-vaksin">
                    <div  class="post-item-contentVaksin">
                        <img class="vaksinImage" src="../image/lansia.svg">
                        <div class="vaksinInfo">
                            <h2>${vaksin.sasaranvaksinlansia}</h2>
                            <p>Total Lansia</p>
                        </div>
                    </div>
                </article>
                <article class="post-item-vaksin">
                    <div  class="post-item-contentVaksin">
                        <img class="vaksinImage" src="../image/vaksin.svg">
                        <div class="vaksinInfo">
                            <h2>${vaksin.vaksinasi1}</h2>
                            <p>Total Dosis 1</p>
                        </div>
                    </div>
                </article>
                <article class="post-item-vaksin">
                    <div  class="post-item-contentVaksin">
                        <img class="vaksinImage" src="../image/vaksin.svg">
                        <div class="vaksinInfo">
                            <h2>${vaksin.vaksinasi2}</h2>
                            <p>Total Dosis 2</p>
                        </div>
                    </div>
                </article>
            </div>
            <h4 class="update">Terakhir Diperbarui : ${vaksin.lastUpdate}</h4>`
  }
}

customElements.define('vaksin-data', vaksinData)
