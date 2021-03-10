const User = require("./User");
const axios = require("axios")

const getGrades = async () => {
    const request = axios.get(
    "https://content-program.sasdigital.com.br/grades/",
    {
            headers: {"Authorization": "Bearer "             }
        })
    const request1 = axios.get(
        "https://content-program.sasdigital.com.br/grades/1/lectures/",
        {
            headers: {"Authorization": "Bearer " }
        })
    const [response, response1] = Promise.all([request, request1])
    console.log(response1)
    return response.data
}

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
