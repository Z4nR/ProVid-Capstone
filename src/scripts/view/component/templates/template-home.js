const createVaksinTemplate = (vaksin) => `
<h1 class="vaksin__label">vaksinasi</h1>
<div class="posts">
  <article class="post-item-sasaran">
    <div class="post-item-contentVaksin">
        <img class="map" src="../image/peta.png">
        <p class="post-item__titleSasaran">${vaksin.totalsasaran}</p>
        <p class="post-item__titleSasaran">Total Sasaran</p>
    </div>
  </article>
  <article class="post-item-vaksin">
    <div class="post-item-contentVaksin">
        <img class="vaksinIcon" src="../image/petugas-publik.svg">
        <p class="post-item-totalVaksin">${vaksin.sasaranvaksinpetugaspublik}</p>
      <p class="post-item-titleVaksin">Total Petugas Umum</p>
    </div>
  </article>
  <article class="post-item-vaksin">
    <div class="post-item-contentVaksin">
      <img class="vaksinIcon" src="../image/lansia.svg">
      <p class="post-item-totalVaksin">${vaksin.sasaranvaksinlansia}</p>
      <p class="post-item-titleVaksin">Total Lansia</p>
    </div>
  </article>
  <article class="post-item-vaksin">
    <div class="post-item-contentVaksin">
      <img class="vaksinIcon" src="../image/vaksin.svg">
      <p class="post-item-totalVaksin">${vaksin.vaksinasi1}</p>
      <p class="post-item-titleVaksin">Total Dosis 1</p>
    </div>
  </article>
  <article class="post-item-vaksin">
    <div class="post-item-contentVaksin">
      <img class="vaksinIcon" src="../image/vaksin.svg">
      <p class="post-item-totalVaksin">${vaksin.vaksinasi2}</p>
      <p class="post-item-titleVaksin">Total Dosis 2</p>
    </div>
  </article>
</div>
<h4 class="update">Terakhir Diperbarui : ${vaksin.lastUpdate}</h4>
`

export { createVaksinTemplate }
