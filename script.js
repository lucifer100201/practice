/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  
  let employees = arr.map((item)=>{return item.name})
  console.log(employees);

}

function PrintDeveloperbyForEach() {
  
  arr.forEach((item)=> console.log(item.name));
}

function addData() {
  
  let data={id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(data);
  console.log(arr);

}

function removeAdmin() {
 
  arr = arr.filter((item)=>{
   return item.profession !== "admin"
  })
  console.log(arr);
}


function concatenateArray() {
  let newArray = [
    { id: 4, name: "alice", age: "25", profession: "designer" },
    { id: 5, name: "bob", age: "30", profession: "manager" },
    { id: 6, name: "emma", age: "22", profession: "engineer" }
  ];

  let concatinateArray = arr.concat(newArray);
  console.log(concatinateArray);
}


