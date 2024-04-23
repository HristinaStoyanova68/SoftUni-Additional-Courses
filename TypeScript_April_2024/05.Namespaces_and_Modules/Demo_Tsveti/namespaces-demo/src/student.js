"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentGroup = void 0;
var StudentGroup;
(function (StudentGroup) {
    class Student {
        marks;
        favouriteSubject;
        constructor(marks, favouriteSubject) {
            this.marks = marks;
            this.favouriteSubject = favouriteSubject;
        }
    }
    StudentGroup.Student = Student;
})(StudentGroup || (exports.StudentGroup = StudentGroup = {}));
//# sourceMappingURL=student.js.map