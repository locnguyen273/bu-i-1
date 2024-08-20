// bài 3
// input arr = ["one", "two", "three"]; text = "number"
// output newArrAfterChange = ["number: one", ...]
const themTienTo = (arrInput, txtInput) => {
    // b1 duyệt mảng
    // b2 gán text vào từng phần tử của arr
    // b3 return mảng mới sau khi map
    let newArrAfterChange = [];
    arrInput.forEach(item => item && newArrAfterChange.push(`${txtInput} : ${item}`))
        // for (let i = 0; i < arrInput.length; i++) {
        //     const tempString = `${txtInput} : ${arrInput[i]}`;
        //     newArrAfterChange.push(tempString);
        // }
    console.log(newArrAfterChange);
};
// const arrTxt = ["one", "two", "three"];
// const txtExp = "number";
// themTienTo(arrTxt, txtExp);

// bài 4
// input arr = [1,2,3,4,5,6,7,8,9,10]
// output newArr = [2,4,6,8,10,12,14,16,18,20]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleArrValue = arr.map((item) => {
    return item * 2
})
console.log("double change", doubleArrValue)
    // const doubleArrValue = (arrInput) => {

// let newArrDoubleValue = [];
// for (let i = 0; i < arrInput.length; i++) {
//     newArrDoubleValue.push(arrInput[i] * 2);
// }
// console.log("double after change", newArrDoubleValue);
// }
// doubleArrValue(arr)

// bài 5 tìm số lẻ
// input arr = [1,2,3,4,5,6,7,8,9,10]
// output newArr = [1,3,5,7,9]
console.log("find Odd Number", arr.filter(item => item && item % 2 === 1))
    // const findOddNumber = (arrInput) => {
    //         let oddNumberArr = [];
    //         for (let i = 0; i < arrInput.length; i++) {
    //             if (arrInput[i] % 2 == 1) {
    //                 oddNumberArr.push(arrInput[i]);
    //             }
    //         }
    //         console.log(oddNumberArr);
    //     }
    // findOddNumber(arr)

// // bài 6
// const listEmployee = [
//     { id: 1, name: "A", workingDays: 22 },
//     { id: 2, name: "B", workingDays: 25 },
//     { id: 3, name: "C", workingDays: 20 },
// ]

// const initialValue = 0;
// console.log("total working day: ", listEmployee.reduce((value, item) => value + item.workingDays, initialValue))

// const tinhTongSoCong = (listEmployee) => {
//     let sumWorkingDay = 0;
//     for (let i = 0; i < listEmployee.length; i++) {
//         sumWorkingDay += listEmployee[i].workingDays;
//     }
//     console.log("tổng ngày làm việc", sumWorkingDay);
// }

// tinhTongSoCong(listEmployee)
// let fruits = ['Apple', 'Banana', 'Cherry'];

// console.log("push value: ", fruits.push("Date"));
// console.log(fruits)
// console.log("pop value: ", fruits.pop("Date"));
// console.log(fruits)

// console.log("shift value: ", fruits.shift());
// console.log(fruits)

// console.log("unshift value: ", fruits.unshift("Mango"));
// console.log(fruits)

// console.log("splice value: ", fruits.splice(0, 1));
// console.log(fruits)

// let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];
//map()
// fruits.map((item, index) => {
//     console.log(`${index + 1}: ${item}`)
//     return;
// })

// filter();
// fruits.filter((item) => {
//     if (item.toLocaleLowerCase() == "apple") {
//         console.log(item)
//     }
// })

// let arrNumber = [1, 2, 3, 4, "5", 6, 7, 8, "9", 10];
// console.log("find Method ", arrNumber.find(item => item % 2 == 0))
// console.log("findIndex Method ", arrNumber.findIndex(item => item === 3))
// console.log("slice Method ", arrNumber.slice(1, 3))

// arrNumber.forEach(item => {
//     if (item % 2 === 1 && typeof(item) === "number") {
//         console.log(item)
//     }
// })



// bài 7 tìm nhân viên có lương cao nhất
// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
// ];
// viết 1 function để sắp cho user có salary cao nhất lên trên đầu mảng
// const compareSalary = (a, b) => {
//         return b - a;
//     }
// viết hàm sort => gọi lại hàm sort user có lương nhất
// const sortSalaryMaxIsFirst = employees.sort((a, b) => compareSalary(a.salary, b.salary));
// if (sortSalaryMaxIsFirst.length > 0) {
//     console.log(sortSalaryMaxIsFirst[0])
// }

// bài 8 tìm user làm việc chăm chỉ nhất
// công = (workingDays - lateDays)

const listEmployees = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2 },
    { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
    { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
];

const compareWorkingDay = (a, b) => {
    return b - a;
}

const sortWorkingDayMaxIsFirst = listEmployees.sort((a, b) => compareWorkingDay((a.workingDays - a.lateDays), (b.workingDays - b.lateDays)));

if (sortWorkingDayMaxIsFirst.length > 0) {
    console.log("user cham chi: ", sortWorkingDayMaxIsFirst[0])
}

// bài 9 nhóm key theo name
// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
//     { id: 4, name: "John", salary: 2200 },
// ];

// ===>
// {
// "John": [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 4, name: "John", salary: 2200 },
// ],
// "Jane": [{ id: 2, name: "Jane", salary: 2500 }],
// "Mark": [{ id: 3, name: "Mark", salary: 3000 }],
// }


// b1 convert data [name]: [{ id: 1, name: "John", salary: 2000 }] => "John" : [{ id: 1, name: "John", salary: 2000 }]
// b2 duyệt mảng employees mới nhất => check key
// * nếu key trùng với nhau => gom nhóm data chung 1 array
// * nếu khác key thì vẫn giữ nguyên data k tác động
// b3 return output
const employees = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
    { id: 4, name: "John", salary: 2200 },
];

const groupEmployeeByName = (employees) => {
    return employees.reduce((result, employee) => {
        if (!result[employee.name]) {
            result[employee.name] = [];
        }
        result[employee.name].push(employee);
        return result;
    }, {})
};

console.log(groupEmployeeByName(employees))