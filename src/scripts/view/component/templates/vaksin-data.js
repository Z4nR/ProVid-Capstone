class vaksinData extends HTMLElement {
  set vaksin (vaksin) {
    this._vaksin = vaksin
    this.render()
  }

  render () {
    const vaksin = this._vaksin
    this.innerHTML = `
        <h1 class="vaksin__label" > Vaksinasi</h1 >
        <div class="posts">
            <article class="post-item-sasaran">
                <div class="post-item-contentSasaran">
                    <img class="map" src="../image/peta.png">
                    <p class="post-item__titleSasaran">Total Sasaran Vaksinasi</p>
                    <h2 class="post-item__totalSasaran">${vaksin.totalsasaran}</h2>
                </div>
            </article>
            <article class="post-item-vaksin">
            <div  class="vaksin-content">
            <div class="title">
                <p class="title-vaksin">Vaksinasi Petugas Publik</p>
            </div>
            <div class="img-vaksin">
                <img src="../image/petugas-publik.svg">
            </div>
            <div class="total">
                <div class="total-box">
                  <h2 class="total-vaksin">Total Vaksinasi : ${vaksin.sasaranvaksinpetugaspublik}</h2>
                </div>
            </div>
        </div>
            </article>
            <article class="post-item-vaksin">
            <div  class="vaksin-content">
            <div class="title">
                <p class="title-vaksin">Vaksinasi Lansia</p>
            </div>
            <div class="img-vaksin">
                <img src="../image/lansia.svg">
            </div>
            <div class="total">
                <div class="total-box">
                  <h2 class="total-vaksin">Total Vaksinasi : ${vaksin.sasaranvaksinlansia}</h2>
                </div>
            </div>
        </div>
            </article>
            <article class="post-item-vaksin">
            <div  class="vaksin-content">
            <div class="title">
                <p class="title-vaksin">Vaksinasi Dosis Pertama</p>
            </div>
            <div class="img-vaksin">
                <img src="../image/vaksin.svg">
            </div>
            <div class="total">
                <div class="total-box">
                  <h2 class="total-vaksin">Total Vaksinasi : ${vaksin.vaksinasi1}</h2>
                </div>
            </div>
        </div>
            </article>
            <article class="post-item-vaksin">
            <div  class="vaksin-content">
            <div class="title">
                <p class="title-vaksin">Vaksinasi Dosis Kedua</p>
            </div>
            <div class="img-vaksin">
                <img src="../image/vaksin.svg">
            </div>
            <div class="total">
                <div class="total-box">
                  <h2 class="total-vaksin">Total Vaksinasi : ${vaksin.vaksinasi2}</h2>
                </div>
            </div>
        </div>
            </article>
        </div>
        <h4 class="update">Terakhir Diperbarui : ${vaksin.lastUpdate}</h4>
    `
  }
}

customElements.define('vaksin-data', vaksinData)
