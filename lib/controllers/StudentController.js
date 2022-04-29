const Reader = require("../utils/Reader")

class StudentController{
    static getStudents(){
        return Reader.readJsonFile("visualpartners.json")
    }

}

module.exports = StudentController;