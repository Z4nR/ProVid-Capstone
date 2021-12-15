import aceh from './provinces/sumatra/aceh'
import riau from './provinces/sumatra/riau'
import sumbar from './provinces/sumatra/sumbar'
import sumut from './provinces/sumatra/sumut'
import kepri from './provinces/sumatra/kepri'
import babel from './provinces/sumatra/babel'
import bengkulu from './provinces/sumatra/bengkulu'
import jambi from './provinces/sumatra/jambi'
import sumsel from './provinces/sumatra/sumsel'
import lampung from './provinces/sumatra/lampung'

const prov = [
  {
    name: 'ACEH',
    geojson: aceh
  },
  {
    name: 'SUMATERA UTARA',
    geojson: sumut
  },
  {
    name: 'SUMATERA BARAT',
    geojson: sumbar
  },
  {
    name: 'RIAU',
    geojson: riau
  },
  {
    name: 'KEPULAUAN RIAU',
    geojson: kepri
  },
  {
    name: 'KEPULAUAN BANGKA BELITUNG',
    geojson: babel
  },
  {
    name: 'BENGKULU',
    geojson: bengkulu
  },
  {
    name: 'JAMBI',
    geojson: jambi
  },
  {
    name: 'SUMATERA SELATAN',
    geojson: sumsel
  },
  {
    name: 'LAMPUNG',
    geojson: lampung
  }
]

export default prov
