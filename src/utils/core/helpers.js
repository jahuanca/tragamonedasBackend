const getPromise = (promise) =>
  promise.then(data => {
    return [null, data]
  }).catch(err => [err])

module.exports = {
  getPromise,
}