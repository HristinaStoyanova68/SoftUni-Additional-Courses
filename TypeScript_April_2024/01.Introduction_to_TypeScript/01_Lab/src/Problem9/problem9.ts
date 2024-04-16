function createEmployeeList(employees: string[]): void {
  employees.forEach((employee) => {
    const employeeNumber: number = employee.length;

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
