const StudentService = require("../../lib/services/StudentService");

describe("Unit Tests for StudentService Class", () => {
    test("Getting students if certification", () => {
        const students = [{email: "Todd@visualpartnership.xyz", haveCertification: true},
        {email: "Sexton@visualpartnership.xyz", haveCertification: true}]
        const studentsEmailsWithCertification = StudentService.getEmailsByCertification(students);
        expect(studentsEmailsWithCertification[1]).toBe("Sexton@visualpartnership.xyz");
        expect(studentsEmailsWithCertification.length).toBe(2);
    });

    test("Getting students by minimum score", () => {
        const students = [{email: "Todd@visualpartnership.xyz", haveCertification: true, credits: 508},
        {email: "Sexton@visualpartnership.xyz", haveCertification: true, credits: 900}]
        const studentsAboveCredits = StudentService.getStudentsByMinimunCredits(students,500);
        expect(studentsAboveCredits[0].email).toBe("Todd@visualpartnership.xyz");
        expect(studentsAboveCredits.length).toBe(2);
    });


});