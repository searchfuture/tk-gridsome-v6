module.exports = function (api) {
    api.loadSource(async store => {
        store.addMetadata('URL', 'localhost')
    })
}