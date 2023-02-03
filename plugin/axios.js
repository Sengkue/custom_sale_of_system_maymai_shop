export default function (context) {
  context.$axios.onRequest((config) => {
    config.baseURL = context.app.$config.api
    config.headers.common.Authorization = `${context.$cookies.get('token')}`
  })

  context.$axios.onError((error) => {
    // Sending the toast messages.
    if (error.response.status !== 401) context.$toast.error(error)
    //  return Promise.resolve(false)
    return false
  })
}

// export default function (context) {
//   context.$axios.onRequest((config) => {
//     config.baseURL = context.app.$config.api
//     config.headers.common.Authorization = `Bearer ${context.$cookies.get('token')}`
//   })
//   // console.log('context--->',context)
//   context.$axios.onError((error) => {
//     if (error.response.status === 404) context.$toast.error(error)
//     if (error.response.status === 403) {
//     //   console.log('hi')
//       context.$cookies.remove('token')
//     }

//     return false
//       })
// }
