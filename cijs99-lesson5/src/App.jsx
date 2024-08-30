import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0); // count = 0
  const [student, setStudent] = useState({
    name: "Nguyễn văn a",
    age: "24",
    address: "nguyễn xí hcm",
  });

  const [formUser, setFormUser] = useState({
    email: "",
    password: "",
  });

  let arrListProduct = [
    { id: 1, name: "Logitech g903", price: 500 },
    { id: 2, name: "Ipad Pro M1", price: 1000 },
    { id: 3, name: "Macbook pro m3", price: 2000 },
  ];

  const [cartList, setCartList] = useState([]);
  //initialValue of student:
  // student = {
  //   name: "Nguyễn văn a",
  //   age: "24",
  //   address: "nguyễn xí hcm",
  // }

  // const handleIncreaseOneValue = () => {
  //   // count sau mỗi lần click => tăng 1 đơn vị
  //   console.log("first value")
  //   setCount(count + 1);
  // }

  // const handleDecreaseOneValue = () => {
  //   setCount(count - 1);
  // }

  const increaseAge = () => {
    // tăng số tuổi 1 tuổi
    student.age = student.age + 1; // age: 25
    console.log(student);
    setStudent({
      ...student,
    });
  };

  const handleChangeFormValue = (event) => {
    console.log(event.target.name, event.target.value);
    setFormUser({
      ...formUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    // reset lại value default => end
    event.preventDefault(); // ngăn chặn reload => hold new value
  };

  const handleAddToCart = (productItem) => {
    const productExisted = cartList.find((item) => item.id == productItem.id);
    if (productExisted) {
      productExisted.quantity = productExisted.quantity + 1;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, { ...productItem, quantity: 1 }]);
    }
  };

  return (
    <>
      Demo lesson 5
      {/* <div>
        <p>Đếm : {count}</p>
        <button onClick={handleDecreaseOneValue}>Decrease One Time</button>
        <button onClick={handleIncreaseOneValue}>Increase One Time</button>
      </div> */}
      <div>
        <h3>Tên học sinh: {student.name}</h3>
        <p>
          Tuổi: {student.age}. Address is: {student.address}
        </p>
        <button onClick={increaseAge}>Increase Age Student</button>
      </div>
      <h4>Demo form input & state</h4>
      <form>
        <div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={formUser.email}
              name="email"
              onChange={handleChangeFormValue}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={formUser.password}
              name="password"
              onChange={handleChangeFormValue}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      {/* bài tập giỏ hàng */}
      <div className="cart">
        <h5>Product List</h5>
        <div className="d-flex">
          {arrListProduct.length > 0 &&
            arrListProduct.map((item) => {
              return (
                <div key={item.id}>
                  <img
                    style={{ width: "100px" }}
                    src="https://product.hstatic.net/200000420363/product/chuot_khong_day_logitech_g903_hero_lightspeed_wireless_gaming_b3526fd6315d4a59b5238d1fefb8424e_master.png"
                    alt=""
                  />
                  <h5>{item.name}</h5>
                  <p>${item.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to cart
                  </button>
                </div>
              );
            })}
        </div>
        <h5>Cart Detail</h5>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {cartList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity * item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
