const Beranda = {
  async render () {
    return `
      <div class="latest">
        <h1 class="latest__label">Vaksinasi</h1>
        <div class="posts">
          <article class="post-item-vaksin">
            <div class="post-item__content">
              <p class="post-item__title">Total Sasaran</p>
            </div>
          </article>
          <article class="post-item">
            <div class="post-item__content">
              <p class="post-item__title">Total Petugas Umum</p>
            </div>
          </article>
          <article class="post-item">
            <div class="post-item__content">
              <p class="post-item__title">Total Lansia</p>
            </div>
          </article>
          <article class="post-item">
            <div class="post-item__content">
              <p class="post-item__title">Total Dosis 1</p>
            </div>
          </article>
          <article class="post-item">
            <div class="post-item__content">
              <p class="post-item__title">Total Dosis 2</p>
            </div>
          </article>
        </div>
        <h4 class="update">Terakhir Diperbarui :</h4>
      </div>

      <div class="latest">
        <h1 class="latest__label">Protokol kesehatan</h1>
        <div class="posts">
          <article class="post-item">
            <div class="post-item__content">
              <p class="post-item__title">5M</p>
            </div>
          </article>
          <article class="post-item">
            <div class="post-item__content">
              <p class="post-item__title">Varian Covid</p>
            </div>
          </article>
        </div>
      </div>
    `
  },

  async afterRender () {

  }
}

export default Beranda
