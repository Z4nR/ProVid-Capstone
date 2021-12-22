import CONFIG from './config'

const API_ENDPOINT = {
  COVID_DATA: `${CONFIG.COVID_ID_URL}`,
  COVID_PROV_DATA: `${CONFIG.COVID_ID_URL}provinsi`,
  CITY_RISK: `${CONFIG.CITY_RISK_URL}city_risk/raw`,
  VACCINE: `${CONFIG.VACCINE_URL}vaksin/`,
  HOSPITAL_PROV_DATA: `${CONFIG.HOSPITAL_URL}get-provinces`,
  HOSPITAL_CITY_IN_PROV: (province) => `${CONFIG.HOSPITAL_URL}get-cities?provinceid=${province}`,
  SEARCH_HOSPITAL: (prov, city, type) => `${CONFIG.HOSPITAL_URL}get-hospitals?provinceid=${prov}&cityid=${city}&type=${type}`,
  HOSPITAL_MAP: (hospitalId) => `${CONFIG.HOSPITAL_URL}get-hospital-map?hospitalid=${hospitalId}`,
  HOSPITAL_DETAIL: (hospitalId, type) => `${CONFIG.HOSPITAL_URL}get-bed-detail?hospitalid=${hospitalId}&type=${type}`
}

export default API_ENDPOINT
