//exercise

function Student(name,surname) {
  this.name=name;
  this.surname=surname;
  this.grade=undefined;
}
Student.prototype.toString= function()
  {
    return `${this.name} ${this.surname} (grade: ${this.grade})`
  };

let names=[
  "john",
  "luke",
  "jessica",
  "martin",
  "luka",
  "jeremy",
  "george",
  "bill",
  "suzan",
  "chris",
]

let surnames=[
  "Stewart",
  "Snow",
  "Targaryen",
  "Bolton",
  "Blackfyre",
  "Bittersteel",
  "Duncan",
  "Baratheon",
  "Stark",
  "Drogo"
]
function randomint(min,max)
{
  return Math.floor(math.random() * (max - min) + min);
};

let Students = new Array(10);
for (let i=0; i<Students.length; i++) {
  Students[i] = new Student(
    names[randomint(0,names.length)],
    surnames[randomint(0,surnames.length)]
  )
}
console.log(Students);

//grade function

function gradeStudent(student)
{
  student.grade = randomint(0,10);
}
for (let student of Students) {
  gradeStudent(student);
  console.log("" +student)
}

//average function
function average(Students) {
  let sum=0;
  for (let student of Students)
  sum += student.grade;
  return sum/Students.length;
}

console.log(`the average is ${average(Students)}`);

//sorting
let comparator = function(student1,student2) {
  return student1.grade1 - student2.grade;
}
console.sort(comparator);
console.log(Students);
