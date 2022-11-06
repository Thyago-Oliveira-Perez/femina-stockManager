import axios, { AxiosInstance } from 'axios';

export class Api {
  url = 'http://localhost:8080/api/estoque/';

  axiosClient: AxiosInstance = axios.create({
    baseURL: this.url,
    headers: { 'Content-type': 'application/json' },
  })

}