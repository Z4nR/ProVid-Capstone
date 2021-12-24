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
                <div  class="post-item-contentVaksin">
                    <img class="vaksinImage" src="../image/petugas-publik.svg">
                    <div class="vaksinInfo">
                        <p>Vaksinasi Petugas Publik</p>
                        <h2>${vaksin.sasaranvaksinpetugaspublik}</h2>                            
                    </div>
                </div>
            </article>
            <article class="post-item-vaksin">
                <div  class="post-item-contentVaksin">
                    <img class="vaksinImage" src="../image/lansia.svg">
                    <div class="vaksinInfo">
                        <p>Vaksinasi Lansia</p>
                        <h2>${vaksin.sasaranvaksinlansia}</h2>                            
                    </div>
                </div>
            </article>
            <article class="post-item-vaksin">
                <div  class="post-item-contentVaksin">
                    <img class="vaksinImage" src="../image/vaksin.svg">
                    <div class="vaksinInfo">
                        <p>Vaksinasi Dosis Pertama</p>
                        <h2>${vaksin.vaksinasi1}</h2>                        
                    </div>
                </div>
            </article>
            <article class="post-item-vaksin">
                <div  class="post-item-contentVaksin">
                    <img class="vaksinImage" src="../image/vaksin.svg">
                    <div class="vaksinInfo">
                        <p>Vaksinasi Dosis Kedua</p>
                        <h2>${vaksin.vaksinasi2}</h2>                            
                    </div>
                </div>
            </article>
        </div>
        <h4 class="update">Terakhir Diperbarui : ${vaksin.lastUpdate}</h4>
    `
  }
}

customElements.define('vaksin-data', vaksinData)
