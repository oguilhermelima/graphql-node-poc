const axios = require("axios")


module.exports = async () => {
    try {
        const token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMDMxNTIwIiwidXNlciI6eyJkZXRhaWxzIjpudWxsLCJpZCI6MTAzMTUyMCwibmFtZSI6IlByb2Zlc3NvciBGdW5kIEkiLCJzY2hvb2wiOnsiaWQiOjIyLCJuYW1lIjoiRXNjb2xhIEludGVybmEgU0FTIn0sImVkdWNhdGlvbmFsU3lzdGVtIjp7ImlkIjoxLCJuYW1lIjoiU0FTIn0sImxvY2F0aW9uSWQiOjIzMDQ0MDAsInByb2ZpbGVzIjpbeyJpZCI6MywibmFtZSI6IlByb2Zlc3NvciJ9XSwiZ3JhZGVzIjpbeyJpZCI6NiwibmFtZSI6IjHCuiBhbm8iLCJjb2xsZWN0aW9uSWQiOjYsIm9yZGVyIjo0LCJzYXNEaWdpdGFsRW5hYmxlZCI6dHJ1ZX0seyJpZCI6NywibmFtZSI6IjLCuiBhbm8iLCJjb2xsZWN0aW9uSWQiOjYsIm9yZGVyIjo1LCJzYXNEaWdpdGFsRW5hYmxlZCI6dHJ1ZX0seyJpZCI6OCwibmFtZSI6IjPCuiBhbm8iLCJjb2xsZWN0aW9uSWQiOjYsIm9yZGVyIjo2LCJzYXNEaWdpdGFsRW5hYmxlZCI6dHJ1ZX0seyJpZCI6MTMsIm5hbWUiOiI0wrogYW5vIiwiY29sbGVjdGlvbklkIjo2LCJvcmRlciI6Nywic2FzRGlnaXRhbEVuYWJsZWQiOnRydWV9LHsiaWQiOjIsIm5hbWUiOiI1wrogYW5vIiwiY29sbGVjdGlvbklkIjo2LCJvcmRlciI6OCwic2FzRGlnaXRhbEVuYWJsZWQiOnRydWV9XSwiY29udGVudFllYXIiOjIwMjEsImRlZmF1bHRDb2xsZWN0aW9uSWQiOjYsImFjY2VwdGVkVGVybXNPZlNlcnZpY2VWZXJzaW9uIjoxLCJhY2NlcHRlZERhdGFTaGFyZVBvbGljeSI6ZmFsc2UsImxvZ2dlZFVzZXJBZG1pbiI6ZmFsc2UsImdzdWl0ZUVtYWlsIjoicHJvZmVzc29yZnVuZDFAYXVsYS5wb3J0YWxzYXMuY29tLmJyIn0sImlhdCI6MTYxNTQyODYwOCwiZXhwIjoxNjE1NTE1MDA4fQ.5ZhyVDQp3-auLcpBFdVcTrO3W9KWhkuC7y0xrcuZ8xyROi5N4C5a_yBuXB5CKqh58onuYmBXqdAUgUjkL0Nsrg"
        const config = {headers: {"Authorization": token}}
        const gradesFromContentProgram = await axios.get("https://content-program.sasdigital.com.br/grades/", config)
        return gradesFromContentProgram.data
    } catch (e) {
        console.log(e)
    }
}