const getLectureByGradeIdRequest = require("../../infraestructure/lecture/rest/getLectures")


module.exports = async (gradeId) => {
    return getLectureByGradeIdRequest(gradeId)
}
