/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((arr) => {
    if (arr.profession === "developer") {
      console.log(arr);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((arr) => {
    if (arr.profession === "developer") {
      console.log(arr);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: 20, profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const updatedEmployee = arr.filter((arr) => arr.profession !== "admin");
  console.log(updatedEmployee);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newEmployees = [
    { id: 5, name: "tom", age: 22, profession: "engineer" },
    { id: 6, name: "emma", age: 21, profession: "designer" },
    { id: 7, name: "sam", age: 23, profession: "developer" },
  ];
  const concatenatedArray = arr.concat(newEmployees);
  console.log(concatenatedArray);
}
