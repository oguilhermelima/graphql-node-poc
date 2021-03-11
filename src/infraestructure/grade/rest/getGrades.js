const axios = require("axios")


module.exports = async () => {
    try {
        const token = ""
        const config = {headers: {"Authorization": token}}
        const gradesFromContentProgram = await axios.get("https://content-program.sasdigital.com.br/grades/", config)
        return gradesFromContentProgram.data
    } catch (e) {
        console.log(e)
    }
}