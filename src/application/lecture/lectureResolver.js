const getLecturesByGradeId = require("../../domain/lecture/getLecturesByGradeId")

module.exports = {
  Query: {
    lectures: (root, { gradeId }) => getLecturesByGradeId(gradeId)
  },
};
