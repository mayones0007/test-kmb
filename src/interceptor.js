export const initInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const key = JSON.parse(localStorage.getItem('userData'))?.key
      if (key) {
        config.headers = {
          ...config.headers,
          "Authorization": key}
      }
      return config;
    },
    (error) => {
      return Promise.reject(error)
    }
  );
  let refreshPromise = null

  axiosInstance.interceptors.response.use(function (response) {
    return response
  }, async (error) => {
    const config = error.config
    if (error.response.status === 401 && config.url !== '/auth/refresh/') {
      if (!refreshPromise) {
        refreshPromise = axiosInstance.post('/auth/refresh/',
          {
            refresh_token: JSON.parse(localStorage.getItem('userData'))?.refresh_token
          })
        const tokenResponse = await refreshPromise
        refreshPromise = null
        localStorage.setItem('userData', JSON.stringify({ key: tokenResponse.data.data.key, refresh_token: tokenResponse.data.data.refresh_key }))
      } else {
        await refreshPromise
      }
      return axiosInstance(config)
    }
    return Promise.reject(error)
  })
}

