const getGradesFromRequest = require("../../infraestructure/grade/rest/getGrades")


module.exports = async () => {
    return getGradesFromRequest()
}
