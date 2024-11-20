// Write your solution in this file!
const employee= {
    employeeName:"Melody",
    streetAddress:"24 Nairobi"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
return {
    ...employee, 
    [key]: value 
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee;
}
/*deletes `key` from a clone of employee and returns the new employee*/
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
    
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}
