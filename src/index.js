import axios from 'axios';

let interceptor = null;

function initAjax(axiosConfig) {
    interceptor = axios.interceptors.request.use((config) => {
        const newConfig = Object.assign({}, config, axiosConfig);
        return newConfig;
    }, error => Promise.reject(error));
}

function resetAjax() {
    if (interceptor != null) {
        axios.interceptors.request.eject(interceptor);
    }
}

const ajax = axios;

export {
    ajax,
    initAjax,
    resetAjax
};

