const StudentController = require("../../lib/controllers/StudentController");

describe("Unit Tests for StudentController Class", () => {
    test("Getting list of students", () => {
        const listOfStudents = StudentController.getStudents();
        expect(listOfStudents).not.toBeUndefined();
        expect(listOfStudents.length).toBeGreaterThan(4);
    });

    test("Getting students if certification", () => {
        const studentsEmailsWithCertification = StudentController.getStudentEmailsIfCertification();
        expect(studentsEmailsWithCertification).not.toBeUndefined();
        expect(studentsEmailsWithCertification.length).toBeGreaterThan(2);
    });

    test("Getting students by minimun credits (500)", () => {
        const minimumCredits = 500;
        const studentsWithMinimumCredits = StudentController.getStudentsByMinimumCredits(minimumCredits);
        expect(studentsWithMinimumCredits).not.toBeUndefined();
        expect(studentsWithMinimumCredits.length).toBeGreaterThan(20);
    });
    
});
