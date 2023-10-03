import axios from "axios";

export default axios.create({
  baseURL: 'http://localhost:8079/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})