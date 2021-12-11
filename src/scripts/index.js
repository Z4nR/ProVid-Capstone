import 'regenerator-runtime'
import '../styles/main.css'
import '../styles/responsive.css'
import 'leaflet/dist/leaflet.css'
import './data/other-data.json'
import App from './view/app'

// import('./data/other-data.json').then(({ default: jsonData }) => {
//   console.log(jsonData)
//   const datas = jsonData.protection
//   let dataList = ''
//   datas.forEach(function (data) {
//     dataList += `
//           <h1 class="vaksin__label">Protokol Kesehatan</h1>
//           <div class="posts">
//           <article class="post-item-vaksin">
//               <div class="post-item-contentVaksin">
//                   <img class="vaksinIcon" src="${data.image}" alt="${data.name}">
//                   <p class="post-item__titleSasaran">${data.name}<</p>
//                   <p class="post-item__titleSasaran">${data.description}<</p>
//               </div>
//           </article>
//           </div>
//       `
//   })
//   document.querySelector('#protection').innerHTML = dataList
// })

const app = new App({
  button: document.querySelector('#menu'),
  content: document.querySelector('main'),
  drawer: document.querySelector('#drawer')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
})
