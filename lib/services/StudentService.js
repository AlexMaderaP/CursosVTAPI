class StudentService{
    static getEmailsByCertification(students){
        return students.filter((student) => student.haveCertification);
    }

    static getStudentsByMinimunCredits(students,minimumCredits){
        return students.filter((student) => student.credits > minimumCredits);
    };
}

module.exports = StudentService;