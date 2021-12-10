import CONFIG from './config'

const API_ENDPOINT = {
  COVID_DATA: `${CONFIG.COVID_ID_URL}`,
  COVID_PROV_DATA: (provName) => `${CONFIG.COVID_ID_URL}provinsi?name=${provName}`,
  CITY_RISK: `${CONFIG.CITY_RISK_URL}city_risk/raw`,
  HOSPITAL_BY_PROV: `${CONFIG.HOSPITAL_URL}get-provinces`,
  HOSPITAL_CITY_IN_PROV: (province) => `${CONFIG.HOSPITAL_URL}get-cities?provinceid=${province}`,
  SEARCH_HOSPITAL: (prov, city, type) => `${CONFIG.HOSPITAL_URL}get-hospitals?provinceid=${prov}&cityid=${city}&type=${type}`,
  VACCINE: `${CONFIG.VACCINE_URL}vaksin/`
}

export default API_ENDPOINT
