import $http from '../services/api.service'

const state = () => ({
    barangs: []
})

const mutations = {
    _assign_barangs_data(state, payload) {
        state.barangs = payload
    }
}

const actions = {
    getAllBarang
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

function getAllBarang({ commit }) {
    return new Promise(async (resolve, reject) => {
        try {
            let network = await $http("http://localhost:8080/api/barang")
            commit('_assign_barangs_data', network.data)
            resolve(network)
        } catch (e) {
            log.error(e.message)
            reject(e)
        }
    })
}