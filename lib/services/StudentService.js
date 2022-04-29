class StudentService{
    static getEmailsByCertification(students){
        const studentsWithCertification = students.filter((student) => student.haveCertification);
        return studentsWithCertification.map((student) => student.email);
    }

    static getStudentsByMinimunCredits(students,minimumCredits){
        return students.filter((student) => student.credits > minimumCredits);
    }
}

module.exports = StudentService;