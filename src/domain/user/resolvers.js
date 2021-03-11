const User = require("../../infraestructure/lecture/database/schemas/User");
const getGrades = require("../../infraestructure/grade/rest/getGrades")

module.exports = {
  Query: {
    users: () => User.find(),
    user: (root, { id }) => User.findById(id),
    grades: () => getGrades()
  },

  Mutation: {
    createUser: (root, { name, email }) => User.create({ name, email })
  }
};
