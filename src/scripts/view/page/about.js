import data from '../../data/other-data.json'

const Tentang = {
  async render () {
    return `
    <section class="about">
        <h1 class="__label">About Project</h1>
        <article class="our-product">
            <figure class="our-photo">
                <img src="../image/DescriptionnWeb.jpeg" alt="Team Photo">
                <figcaption>Screenshot Project dari Tim CSD-108</figcaption>
            </figure>
            <div class="about-product">
                <h1 class="product__title">Apa itu ProVid?</h1>
                <p class="product__description">ProVid merupakan website yang berbasis landing page sederhana dengan 3 menu utama, yang mana membahas mengenai Corona Virus.
                    Mulai dari sistem zonasi PPKM di Indonesia, Informasi Vaksin dan juga terdapat Informasi mengenai Lokasi Rumah Sakit Rujukan Covid.
                    Tujuan pembuatan ProVid ialah mempermudah bagi masyarakat untuk mendapatkan informasi yang tepat mengenai Pandemi yang masih terjadi saat.
                    Untuk saat ini ProVid masih merupakan website dalam tahap developing dan belum dapat diakses oleh masyarakat secara umum.</p> 
            </div>
        </article>
        <div class="credit">
            <h1 class="__label">Thanks To : </h1>
            <div class="credit__posts"></div>
        </div>
    </section>
        `
  },

  async afterRender () {
    const credit = document.querySelector('.credit__posts')

    data.github.forEach((data) => {
      const git = document.createElement('credit-isi')
      git.credit = data
      credit.appendChild(git)
    })
  }
}

export default Tentang
