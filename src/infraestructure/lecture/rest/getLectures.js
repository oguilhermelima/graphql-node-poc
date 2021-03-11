const axios = require("axios")


module.exports = async (gradeId) => {
    try {
        const token = ""
        const config = {headers: {"Authorization": token}}
        const gradesFromContentProgram = await axios.get("https://content-program.sasdigital.com.br/grades/" + gradeId.toString() + "/lectures", config)
        return gradesFromContentProgram.data
    } catch (e) {
        console.log(e)
    }
}