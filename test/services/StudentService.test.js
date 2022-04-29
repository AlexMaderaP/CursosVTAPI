const StudentService = require("../../lib/services/StudentService");

describe("Unit Tests for StudentService Class", () => {
    test("Getting students if certification", () => {
        const students = [{email: "Todd@visualpartnership.xyz", haveCertification: true},
        {email: "Sexton@visualpartnership.xyz", haveCertification: true}]
        const studentsEmailsWithCertification = StudentService.getEmailsByCertification(students);
        expect(studentsEmailsWithCertification[1].email).toBe("Sexton@visualpartnership.xyz");
        expect(studentsEmailsWithCertification.length).toBe(2);
    });


});