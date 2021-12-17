import aceh from './provinces/aceh'
import riau from './provinces/riau'
import sumbar from './provinces/sumbar'
import sumut from './provinces/sumut'
import kepri from './provinces/kepri'
import babel from './provinces/babel'
import bengkulu from './provinces/bengkulu'
import jambi from './provinces/jambi'
import sumsel from './provinces/sumsel'
import lampung from './provinces/lampung'

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
