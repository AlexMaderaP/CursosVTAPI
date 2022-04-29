const StudentController = require("../../lib/controllers/StudentController");

describe("Unit Tests for StudentController Class", () => {
    test("Getting list of students", () => {
        const listOfStudents = StudentController.getStudents();
        expect(listOfStudents).not.toBeUndefined();
        expect(listOfStudents.length).toBeGreaterThan(4);
    });
    
});
