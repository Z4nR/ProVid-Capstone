import Tentang from '../view/page/about'
import Beranda from '../view/page/home'
import RumahSakit from '../view/page/hospital'
import Zona from '../view/page/zone'

const routes = {
  '/': Beranda,
  '/home': Beranda,
  '/zone': Zona,
  '/hospital': RumahSakit,
  '/about': Tentang
}

export default routes
