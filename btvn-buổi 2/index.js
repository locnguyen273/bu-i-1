// bài 9
const employees = [
  { id: 1, name: "John", salary: 2000 },
  { id: 2, name: "Jane", salary: 2500 },
  { id: 3, name: "Mark", salary: 3000 },
  { id: 4, name: "John", salary: 2200 },
];

const groupEmployeesByName = (employees) => {
  return employees.reduce((result, employee) => {
    if (!result[employee.name]) {
      result[employee.name] = [];
    }
    result[employee.name].push(employee);
    return result;
  }, {});
};

console.log("groupEmployeesByName", groupEmployeesByName(employees));

const employeesWorkingDay = [
  { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
  { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
  { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
];

const findUserPerformance = (listEmployees) => {
  let userPerformance = null;
  let highestWorkingDay = -Infinity;
  listEmployees.forEach((employee) => {
    const dayWorked = (employee.workingDays - employee.lateDays) / 8;
    const performance = dayWorked / employee.salary;
    if (performance > highestWorkingDay) {
      highestWorkingDay = performance;
      userPerformance = employee;
    }
  });
  return userPerformance;
};
console.log("findUserPerformance: ", findUserPerformance(employeesWorkingDay));

// bài 11
const employeesHistogram = [
  { id: 1, name: "John", workingDays: 20 },
  { id: 2, name: "Jane", workingDays: 22 },
  { id: 3, name: "Mark", workingDays: 20 },
  { id: 4, name: "Sam", workingDays: 24 },
  { id: 5, name: "Lucy", workingDays: 22 },
];

const countTimesWorkingDays = (employeesHistogram) => {
  return employeesHistogram.reduce((result, employee) => {
    if (!result[employee.workingDays]) {
      result[employee.workingDays] = 0;
    }
    result[employee.workingDays]++;
    return result;
  }, {});
};

console.log(
  "countTimesWorkingDays: ",
  countTimesWorkingDays(employeesHistogram)
);

// bài 12

const employeesGroupInfo = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    workingDays: 22,
    lateDays: 2,
    salary: 2000,
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    workingDays: 20,
    lateDays: 0,
    salary: 2500,
  },
  {
    id: 3,
    name: "Mark",
    email: "mark@example.com",
    workingDays: 25,
    lateDays: 1,
    salary: 3000,
  },
];

const groupInfoUser = (employeesGroupInfo) => {
  let listUser = [];
  employeesGroupInfo.forEach((item) => {
    if (item) {
      const newItemUser = {
        name: item.name,
        email: item.email,
        workInfo: {
          workingDays: item.workingDays,
          lateDays: item.lateDays,
        },
      };
      listUser.push(newItemUser);
    }
  });
  return listUser;
};

console.log("groupInfoUser: ", groupInfoUser(employeesGroupInfo));

// bài 13

// Yêu cầu:
//     1. Viết hàm thực thi thêm một công việc mới
// 2. Viết hàm đánh dấu một hoặc nhiều công việc hoàn thành
// 3. Viết hàm sắp xếp các công việc theo alphabet của tên công việc theo hai chiều A - > Z, Z - > A

let tasks = [
  {
    name: "Hoàn thành bài tập JavaScript",
    description: "Làm xong bài tập về Array và Object",
    completed: false,
  },
  { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
  {
    name: "Đi mua hàng",
    description: "Mua thêm thức ăn cho tuần",
    completed: false,
  },
];

// câu 1
const addNewTaskToArr = (task) => tasks.push(task);
addNewTaskToArr({
  name: "Frontend Developer",
  description: "Todo task frontend",
  completed: false,
});

// câu 2
// input ["", ""]
const makeTasksDone = (listTasks, listTaskName) => {
  listTaskName.forEach((taskName) => {
    const task = listTasks.find((item) => item.name === taskName);
    if (task) {
      task.completed = true;
    }
  });
};
makeTasksDone(tasks, ["Frontend Developer", "Đi mua hàng"]);

// câu 3
const sortTaskByName = (listTasks, typeSort) => {
  return listTasks.sort((a, b) => {
    if (typeSort === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
};

console.log("thêm một công việc mới", tasks);
console.log("makeTasksDone", tasks);
// console.log("Sort A -> Z: ", sortTaskByName(tasks, "asc"));
console.log("Sort Z -> A: ", sortTaskByName(tasks, "desc"));
