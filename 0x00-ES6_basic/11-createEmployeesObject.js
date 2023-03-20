export default function createEmployeesObject(departmentName, employees) {
    const employeesObject = {}; //create empty obj
    employeesObject[departmentName] = employees; //make departmentName the key of employees.
    return employeesObject;
  }  