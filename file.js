function tartib(arg1, arg2) {
  for (let i = 0; i < arg1.length; i++) {
    for (let a = i; a < arg1.length; a++) {
      if (arg2 == "asc" && arg1[i] > arg1[a] || arg2 == "desc" && arg1[i] < arg1[a]) {
        let teng = arg1[i]
        arg1[i] = arg1[a]
        arg1[a] = teng
      }
    }
  }
  return arg1;
}
console.log(tartib([5, 3, 8, 1, 2], "asc"));
console.log(tartib([5, 3, 8, 1, 2], "desc"));


// student filter
const students = [
  { name: "Ali", age: 20, gender: "male", subjects: ["Math", "Physics"] },
  {
    name: "Zarina",
    age: 21,
    gender: "female",
    subjects: ["English", "History"],
  },
  {
    name: "Bekzod",
    age: 22,
    gender: "male",
    subjects: ["Biology", "Chemistry"],
  },
  {
    name: "Gulnora",
    age: 19,
    gender: "female",
    subjects: ["Math", "Informatics"],
  },
  { name: "Iskandar", age: 23, gender: "male", subjects: ["Physics", "Math"] },
  {
    name: "Suhrob",
    age: 20,
    gender: "male",
    subjects: ["Geography", "History"],
  },
  { name: "Madina", age: 21, gender: "female", subjects: ["English", "Art"] },
  {
    name: "Sardor",
    age: 19,
    gender: "male",
    subjects: ["Informatics", "Math"],
  },
  {
    name: "Malika",
    age: 22,
    gender: "female",
    subjects: ["Biology", "History"],
  },
  { name: "Shokir", age: 20, gender: "male", subjects: ["Chemistry", "Math"] },
  {
    name: "Alisher",
    age: 21,
    gender: "male",
    subjects: ["Physics", "History"],
  },
  { name: "Nigora", age: 19, gender: "female", subjects: ["English", "Art"] },
  {
    name: "Sherzod",
    age: 22,
    gender: "male",
    subjects: ["Math", "Informatics"],
  },
  {
    name: "Dilshod",
    age: 23,
    gender: "male",
    subjects: ["Physics", "Geography"],
  },
  { name: "Yulduz", age: 20, gender: "female", subjects: ["Art", "History"] },
  { name: "Xurshid", age: 21, gender: "male", subjects: ["Math", "Physics"] },
  {
    name: "Feruza",
    age: 19,
    gender: "female",
    subjects: ["Biology", "English"],
  },
  {
    name: "Abdulloh",
    age: 22,
    gender: "male",
    subjects: ["Geography", "Math"],
  },
  {
    name: "Shahnoza",
    age: 20,
    gender: "female",
    subjects: ["Informatics", "Physics"],
  },
  { name: "Zokir", age: 23, gender: "male", subjects: ["Math", "Biology"] },
];


// - 21 yoshdan kichik bo'lgan talabalarni o'chirib yangi massiv qaytaring
let kichik = students.filter(student => student.age >= 21)
console.log(kichik);


// - Ingliz tili o'qiydigan qizlarni qaytaring, yangi massivda
let eng = students.filter(student => student.gender == "female" && student.subjects.includes("English"))
console.log(eng);


// - Kimyo o'qimaydigan bollarni o'chirib yangi massiv qaytaring
const kimyo = students.filter(student => student.gender == "male" && student.subjects.includes("Chemistry"))
console.log(kimyo);


// - { name: "Vali", age: 25, gender: "male", subjects: ["Math"] } ushbu objectni studentlar qatoriga qo'shing
students.push({ name: "Vali", age: 25, gender: "male", subject: ["Math"] })
console.log(students);


// - { name: "Suhrob", age: 20, gender: "male", subjects: ["Geography", "History"] } aynan shu bilan bir xil bo'lgan objectni massiv ichidan qidirib topadigan funksiya yozing. Umuman olgan parametridan obyekt qabul qiladi va uni qidiradi
console.log(
  JSON.stringify({
    name: "Suhrob",
    age: 20,
    gender: "male",
    subjects: ["Geography", "History"]
  })
)