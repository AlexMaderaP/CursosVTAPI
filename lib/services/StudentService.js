class StudentService{
    static getEmailsByCertification(students){
        return students.filter((student) => student.haveCertification);
    }
}

module.exports = StudentService;