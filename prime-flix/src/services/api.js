//Base da URL: https://api.themoviedb.org/3
//URL DA API: /movie/now_playing?api_key=6f48ba9883c7db588af9cfa4e86f3990&language=pt-BR

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;