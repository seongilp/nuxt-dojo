export default defineEventHandler(async (event) => {

    // const { name } = getQuery(event)
    // const { age } = readBody(event)

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_gBEekxSQWw57l0tR6HfnN23rmSdBYkkU6PVUNe6H')

    return {
        data
    }
})