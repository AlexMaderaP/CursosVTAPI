const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentController{
    static getStudents(){
        return Reader.readJsonFile("visualpartners.json");
    }

    static getStudentEmailsIfCertification(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getEmailsByCertification(students);
    }

    static getStudentsByMinimumCredits(minimumCredits){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getStudentsByMinimunCredits(students,minimumCredits);
    }
}

module.exports = StudentController;