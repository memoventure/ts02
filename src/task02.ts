import {Student} from "./students.ts";
import {Grade} from "./students.ts";

const gradList1: Grade[] = [1, 4, 3, 1, 3, 2, 1, 2];
const student1: Student = {firstname: "Anton",
                            lastname: "Meier",
                            age: 17,
                            gradeList: gradList1};

const gradList2: Grade[] = ["A", 2, "F", 4, 1, "B", 2, 5];
const student2: Student = {firstname: "Anton",
    lastname: "Meier",
    age: 17,
    gradeList: gradList2};

const gradList3: Grade[] = ["A", 2, "F", undefined, 1, "B", undefined, 5];
const student3: Student = {firstname: "Anton",
    lastname: "Meier",
    age: 17,
    gradeList: gradList3};

function printGrade(gradeList: Grade[]): string {
    let result: string = "";

    for (let i = 0; i < gradeList.length; i++)
    {
        if(gradeList[i]!== undefined && i==0)
        {
            result = result.concat(gradeList[i].toString());
        }
        else if(gradeList[i]!== undefined)
        {
            result = result.concat(", " + gradeList[i].toString());
        }
        else
        {
            result = result.concat(", *");
        }
    }
    return result;
}

function printStudent(student: Student) : void {
    let studentString: string = student.firstname + " " + student.lastname + " (" + student.age + ")";
    console.log(studentString);
    console.log("=".repeat(studentString.length));
    console.log("Grades: " + printGrade(student.gradeList));
}

function printListOfStudents(studentList: Student[]): void {
    for (let i = 0; i < studentList.length; i++) {
        printStudent(studentList[i]);
    }
}

const studentList: Student[] = [student1, student2,student3];
printListOfStudents(studentList);


