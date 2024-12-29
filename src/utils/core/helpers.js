const getPromise = (promise) =>
  promise.then(data => {
    return [null, data]
  }).catch(err => {
    console.log(err)
    return [err]
  })

module.exports = {
  getPromise,
}