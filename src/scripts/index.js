import 'regenerator-runtime'
import '../styles/main.css'
import '../styles/responsive.css'
import 'leaflet/dist/leaflet.css'
import App from './view/app'

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
