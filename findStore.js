const apiCarrefour = require("./api/carrefour")

async function store(msg){
    const latitude = msg.location.latitude
    const longitude = msg.location.longitude

    return await apiCarrefour.getStores(latitude, longitude)
}

module.exports.store = store