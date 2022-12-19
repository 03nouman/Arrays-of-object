let studentRecords = [
  { name: 'Jhon', id: 123, marks: 98 },
  { name: 'baba', id: 101, marks: 23 },
  { name: 'yaga', id: 200, marks: 45 },
  { name: 'wick', id: 115, marks: 75 }
]

// question 1 solution
const nameUpperCase = studentRecords.map(element => (element.name.toUpperCase()))
console.log(nameUpperCase);

// question 2 solution
const highestMark = []
studentRecords.forEach(element => {
  if (element.marks > 50) {
    highestMark.push(element)
  }
})
console.log(highestMark)

// question 3 solution
const highestIdMarks = [];
studentRecords.forEach(element => {
  if (element.id > 120 && element.marks > 50) {
    highestIdMarks.push(element)
  }
})
console.log(highestIdMarks);

//question 4
let sumOFMarks = 0
studentRecords.map(element => {
  sumOFMarks += element.marks;
})
console.log(sumOFMarks)

//question 5
let highMarks = [];
studentRecords.forEach(element => {
  if (element.marks > 50) {
    highMarks.push(element.name)
  }
})
console.log(highMarks);

//question 6
let SumOfHighestId = 0;
studentRecords.forEach(element => {
  if (element.id > 120) {
    SumOfHighestId += element.marks
  }
})
console.log(SumOfHighestId)

//question7
studentRecords.forEach(element => {
  if (element.marks < 50) {
    element.marks += 15
  }
})
let graceMarks = 0;
studentRecords.forEach(element => {
  if (element.marks > 50) {
    graceMarks += element.marks
  }
})
console.log(graceMarks)

//question 8
let StuArray = [];
function Student(name, className, rollno) {
  this.StuName = name,
    this.stuClass = className,
    this.StuRollNo = rollno
}
StuArray.push = ('EA17', 'Abc', 122)
