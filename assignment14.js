//problem 2
let employees = {
  "companyName": Tech Stars
  "website": "www.techstars.site"
//problem 1
  "employees":[
    {
        "firstName": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raiseEligible": true
    },
    {
        "firstName": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raiseEligible": true
    },
    {
        "firstName": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raiseEligible": false
    }
  ]
}

//problem 3
function addEmployee(obj, employeeName, employeeDepartment, employeeDesignation, employeeSalary, raiseStatus) {
  let employee = {
    "firstName": employeeName,
    "department": employeeDepartment,
    "designation": employeeDesignation,
    "salary": employeeSalary,
    "raiseEligible": raiseStatus
  };

  obj['employees'].push(employee); // the push() method adds a value to an object/array.
}

addEmployee(employees, "Anna", "Tech", "Executive", 25600, false);

//problem 4, https://bobbyhadz.com/blog/javascript-get-sum-of-array-object-values
let totalSalary = 0;
employees.forEach(element => {
  totalSalary += element.salary;
});
console.log(totalSalary);

//problem 5
giveRaise = employees.findIndex(obj => obj.raiseEligible == true);
employees[giveRaise].salary = employees.Salary * 1.1;
employees[giveRaise].raiseEligible = false;

console.log(employees[giveRaise]);

//problem 6 https://www.w3schools.com/jsref/jsref_push.asp
let wfh = [true, false, false, true];
employees.push("wfh");

function populateHeader(obj) {
  const header = document.querySelector('header');
  const myH1 = document.createElement('h1');

  myH1.textContent = obj['companyName'];
  console.log(myH1);
  header.appendChild(myH1);

  const myPara = document.createElement('p');
}

function populateEmployees(obj) {
  const section = document.querySelector('section');
  const heroes = obj['employees'];

  for (const employee of employees) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myPara4 = document.createElement('p');
    const myPara5 = document.createElement('p');

    myH2.textContent = employees.firstName;
    myPara1.textContent = `Department: ${employees.department}`;
    myPara2.textContent = `Designation: ${employees.designation}`;
    myPara3.textContent = `Salary: ${employees.salary}`;
    myPara4.textContent = `Raise Eligible: ${employees.raiseEligible}`;
    myPara5.textContent = `Working from home: ${employees.wfh}`;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);

    section.appendChild(myArticle);
  }
}

console.log(populateHeader(companyName));
console.log(populateHeroes(employees));
