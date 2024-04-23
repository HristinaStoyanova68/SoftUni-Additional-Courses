function createEmployeeList(employees) {
    employees.forEach((employee) => {
        const employeeNumber = employee.length;
        console.log(`Name: ${employee} -- Personal Number: ${employeeNumber}`);
    });
}
createEmployeeList([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
]);
createEmployeeList([
    "Samuel Jackson",
    "Will Smith",
    "Bruce Willis",
    "Tom Holland",
]);
//# sourceMappingURL=problem9.js.map