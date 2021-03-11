const getGrades = require("../../domain/grade/getGrades")

module.exports = {
  Query: {
    grades: () => getGrades()
  },
};
