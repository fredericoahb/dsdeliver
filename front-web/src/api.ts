import axios from "axios";

const base_url = 'https://fred-deliver.herokuapp.com';

export function fetchProducts(){
  return axios(`${base_url}/products`)
}