// import { useState, useEffect } from "react";
import HomePage from './pages/home/index';

function App() {
  // const [count, setCount] = useState(0);

  // 1. useEffect nhận vào 2 tham số: callback func, deps []
  // 2. useEffect có deps empty => useEffect đó chỉ chạy đúng 1 lần sau khi component đc khởi tạo
  // 3. useEffect có deps => useEffect đó được chạy lại khi các giá trị trong deps thay đổi giá trị
  // useEffect(() => {
  //   console.log(`useEffect run ${count} times`);
  // }, [count]);

  // console.log(`component run ${count} times`);

  return (
    <>
      {/* <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div> */}
      <HomePage />
    </>
  );
}

export default App;
