require("dotenv/config")
const rp = require("request-promise")

async function getStores(la, lo) {
    const options = {
        method: "GET",
        url: "https://api2.carrefour.com.br/cci/publico/cadastro-lojas-complemento/cadastro-lojas-complemento",
        qs: {
            latitude: la,
            longitude: lo
        },
        headers: {
            accept: "application/json",
            "x-ibm-client-id": process.env.CLIENT_ID
        }
    }
    const res = await rp(options)
    .then(response => {
        const data = JSON.parse(response).data
        const store = data.filter(value => value.is_open === "true")
            .reduce((st, value) => value.location.distance < st.location.distance ? value : st, data[0])
        return store
    })
    .catch(error => error)
    return res
}

module.exports.getStores = getStores