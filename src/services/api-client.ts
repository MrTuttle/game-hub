// src/services/api-client.ts

import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4776d7134d2e4dd2a99588b74ed151a6'
  }
})
