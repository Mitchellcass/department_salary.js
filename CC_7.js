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

