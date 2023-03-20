export default function createReportObject(employeesList) {
    const allEmployees = {};
    
    for (const [department, employees] of Object.entries(employeesList)) {
        allEmployees[department] = [...employees];
    }

    const reportObject = {
        allEmployees,
        getNumberOfDepartments: () => Object.keys(allEmployees).length
    };
    return reportObject;
  };