// Task 1: Create a department structure
const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'John',
                    salary: 100000,
                    subordinates: []
                },
                {
                    name: 'Clyde',
                    salary: 80000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Bob',
                    salary: 90000,
                    subordinates: []
                }
            ]
        }
    ]
};

// Task 2: Create a recursive function to calculate total salary for a department
function calculateDepartmentSalary(department) {
    let totalSalary = 0;

    department.employees.forEach(employee => {
        totalSalary += employee.salary;

    if (employee.subordinates && employee.subordinates.length > 0) {
          totalSalary += calculateDepartmentSalary({
             employees: employee.subordinates
         }
    );
 }});

    return totalSalary;
}

// Task 3: Create a function to calculate the total salary for all departments
function calculateCompanySalary(company) {
    let totalCompanySalary = 0;

    company.departments.forEach(department => {
        // Adding together all departments to total company salary
        totalCompanySalary += calculateDepartmentSalary(department);
    });

    return totalCompanySalary; //return the company salary after adding in department salaries
}

// Test code 
const totalSalary = calculateCompanySalary(company);
console.log(`Total company salary is: $${totalSalary}`); // Lets user know the total salary company including departments