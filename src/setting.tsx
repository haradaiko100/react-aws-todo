import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_AWS_API_GATEWAY_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';


export default axios;