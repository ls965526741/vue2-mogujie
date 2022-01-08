import axios from 'axios'
import NProgress from 'nprogress'
const serve = axios.create({
  // baseURL:
})
serve.interceptors.request.use(function (config) {
  NProgress.start()
  return config
}, function (error) {
  return Promise.reject(error)
})

serve.interceptors.response.use(function (response) {
  NProgress.done()
  return response
}, function (error) {
  return Promise.reject(error)
})
export default serve
