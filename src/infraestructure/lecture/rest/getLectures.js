const axios = require("axios")


module.exports = async (gradeId) => {
    try {
        const token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMDMxNTIyIiwidXNlciI6eyJkZXRhaWxzIjpudWxsLCJpZCI6MTAzMTUyMiwibmFtZSI6IlByb2Zlc3NvciBFbnNpbm8gTcOpZGlvIiwic2Nob29sIjp7ImlkIjoyMiwibmFtZSI6IkVzY29sYSBJbnRlcm5hIFNBUyJ9LCJlZHVjYXRpb25hbFN5c3RlbSI6eyJpZCI6MSwibmFtZSI6IlNBUyJ9LCJsb2NhdGlvbklkIjoyMzA0NDAwLCJwcm9maWxlcyI6W3siaWQiOjMsIm5hbWUiOiJQcm9mZXNzb3IifV0sImdyYWRlcyI6W3siaWQiOjUsIm5hbWUiOiIywqogc8OpcmllIiwiY29sbGVjdGlvbklkIjo2LCJvcmRlciI6MTQsInNhc0RpZ2l0YWxFbmFibGVkIjp0cnVlfSx7ImlkIjo0LCJuYW1lIjoiUHLDqS1Vbml2ZXJzaXTDoXJpbyIsImNvbGxlY3Rpb25JZCI6Niwib3JkZXIiOjE2LCJzYXNEaWdpdGFsRW5hYmxlZCI6dHJ1ZX0seyJpZCI6MTgsIm5hbWUiOiJQcsOpLVZlc3RpYnVsYXIiLCJjb2xsZWN0aW9uSWQiOjYsIm9yZGVyIjoxNywic2FzRGlnaXRhbEVuYWJsZWQiOnRydWV9LHsiaWQiOjE5LCJuYW1lIjoiU0VNSSIsImNvbGxlY3Rpb25JZCI6Niwib3JkZXIiOjE4LCJzYXNEaWdpdGFsRW5hYmxlZCI6dHJ1ZX0seyJpZCI6MjAsIm5hbWUiOiJTZW1pZXh0ZW5zaXZvIDHCuiBTZW1lc3RyZSIsImNvbGxlY3Rpb25JZCI6Niwib3JkZXIiOjE5LCJzYXNEaWdpdGFsRW5hYmxlZCI6dHJ1ZX0seyJpZCI6MjIsIm5hbWUiOiJTZW1pZXh0ZW5zaXZvIDLCuiBTZW1lc3RyZSIsImNvbGxlY3Rpb25JZCI6Niwib3JkZXIiOjIwLCJzYXNEaWdpdGFsRW5hYmxlZCI6dHJ1ZX0seyJpZCI6MTcsIm5hbWUiOiIxwqogc8OpcmllIiwiY29sbGVjdGlvbklkIjo2LCJvcmRlciI6MTMsInNhc0RpZ2l0YWxFbmFibGVkIjp0cnVlfV0sImNvbnRlbnRZZWFyIjoyMDIxLCJkZWZhdWx0Q29sbGVjdGlvbklkIjo2LCJhY2NlcHRlZFRlcm1zT2ZTZXJ2aWNlVmVyc2lvbiI6MSwiYWNjZXB0ZWREYXRhU2hhcmVQb2xpY3kiOnRydWUsImxvZ2dlZFVzZXJBZG1pbiI6ZmFsc2UsImdzdWl0ZUVtYWlsIjoicHJvZmVzc29ybWVkaW8uam1wcmh6QGF1bGEucG9ydGFsc2FzLmNvbS5iciJ9LCJpYXQiOjE2MTU0NDEwNjksImV4cCI6MTYxNTUyNzQ2OX0.o1EAiJiVd31MLV38q_qa81gRS-tZb43bs9iHlWHEflX5EGqx8km8Os0QOBkNhbpQ4Ii4TwRuaJeBXkSse7XrTA"
        const config = {headers: {"Authorization": token}}
        const gradesFromContentProgram = await axios.get("https://content-program.sasdigital.com.br/grades/" + gradeId.toString() + "/lectures", config)
        return gradesFromContentProgram.data
    } catch (e) {
        console.log(e)
    }
}