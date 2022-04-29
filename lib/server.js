const express = require("express");
const { response } = require("express");
const StudentController = require("./controllers/StudentController");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "VisualThinking Api welcome!" });
});

app.listen(port, () => {
    console.log(`VisualThinking API in localhost:${port}`);
});

app.get("/v1/students", (request, response) => {
    const listOfStudents = StudentController.getStudents();
    response.json(listOfStudents);
});