const getPromise = (promise) =>
  promise.then(data => {
    return [null, data]
  }).catch(err => {
    console.log('Error: ' + err)
    return [err]
  })

const initialOfDay = (date) => new Date(date).setHours(0, 0, 0)
const finalOfDay = (date) => new Date(date).setHours(23, 59, 59)

module.exports = {
  getPromise,
  initialOfDay,
  finalOfDay,
}