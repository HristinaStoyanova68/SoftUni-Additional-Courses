class Employee {
  name: string;
  salary: number;
  position: string;
  department: string;
  email?: string;
  age?: number;

  constructor(
    name: string,
    salary: number,
    position: string,
    department: string,
    email?: string,
    age?: number
  ) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
    this.email = email;
    this.age = age;
  }
}

class Department {
  employees: Employee[] = [];

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getAverageSalary(): number {
    if (this.employees.length === 0) {
      return 0;
    }

    const totalSalary = this.employees.reduce(
      (acc, employee) => acc + employee.salary,
      0
    );
    const averageSalary = totalSalary / this.employees.length;

    return averageSalary;
  }
}

function departmentHighestAverageSalary(commands: string[]): void {
  const departments: Map<string, Department> = new Map();

  const numOfEmployees = Number(commands[0]);
  const employees = commands.slice(1);
  let i = 0;

  while (i < numOfEmployees) {
    let [name, salaryAsStr, position, departmentName, email, ageAsStr] =
      employees[i].split(" ");
    const salary = Number(salaryAsStr);
    email = email !== undefined ? email : "n/a";
    const age = ageAsStr !== undefined ? Number(ageAsStr) : -1;

    const employee = new Employee(
      name,
      salary,
      position,
      departmentName,
      email,
      age
    );

    if (!departments.has(departmentName)) {
      departments.set(departmentName, new Department());
    }

    departments.get(departmentName).addEmployee(employee);

    i++;
  }

  let highestAverageSalary = 0;
  let departmentWithHighestSalary = "";

  for (const departmentName of departments.keys()) {
    const averageSalary = departments.get(departmentName).getAverageSalary();

    if (averageSalary > highestAverageSalary) {
      highestAverageSalary = averageSalary;
      departmentWithHighestSalary = departmentName;
    }
  }
  console.log(`Highest Average Salary: ${departmentWithHighestSalary}`);

  const sortedEmployees = departments
    .get(departmentWithHighestSalary)
    .employees.sort((a, b) => b.salary - a.salary);

  sortedEmployees.forEach((employee) => {
    console.log(
      `${employee.name} ${employee.salary} ${employee.email} ${employee.age}`
    );
  });
}

// departmentHighestAverageSalary([
//   "4",
//   "Peter 120.00 Dev Development peter@abv.bg 28",
//   "Tina 333.33 Manager Marketing 33",
//   "Sam 840.20 ProjectLeader Development sam@sam.com",
//   "George 0.20 Freeloader Nowhere 18",
// ]);

departmentHighestAverageSalary([
  "6",
  "Silver 496.37 Temp Coding silver@yahoo.com",
  "Sam 610.13 Manager Sales",
  "John 609.99 Manager Sales john@abv.bg 44",
  "Venci 0.02 Director BeerDrinking beer@beer.br 23",
  "Andre 700.00 Director Coding",
  "Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey",
]);
