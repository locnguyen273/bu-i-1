import { useEffect, useRef } from "react";
import { useState } from "react";
import useClickOutside from "../components/customHook/clickOutside";
import useToggle from "../components/customHook/useToggle";
import useGetData from "../components/customHook/useGetData";

const DemoCustomHook = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const [isToggled, toggle] = useToggle(false);
  const { data, loading, error } = useGetData("https://dummyjson.com/products");
  const handleGetCurrentRef = () => {
    console.log(inputRef.current.value);
  };

  const closeDropdown = () => setOpenDropdown(false);

  useClickOutside(dropdownRef, closeDropdown);

  useEffect(() => {
    console.log(data, loading, error);
  }, [data, loading, error]);

  return (
    <div>
      {/* demo useRef */}
      <h4>Demo UseRef</h4>
      <input
        className="form-control"
        type="text"
        placeholder="demo input ref"
        ref={inputRef}
      />
      <button onClick={handleGetCurrentRef} className="btn btn-success">
        Get Current Ref
      </button>

      <button
        className="btn btn-primary"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        {openDropdown ? "Close Dropdown" : "Open Dropdown"}
      </button>

      {openDropdown && (
        <ul
          ref={dropdownRef}
          style={{ border: "1px solid #ccc", padding: "16px" }}
        >
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}

      <h4 className="mt-5">Demo useCallback</h4>
      <button className="btn btn-success d-block" onClick={toggle}>
        Toggle
      </button>
      {isToggled ? "Toggled On" : "Toggled Off"}

      <h4 className="mt-5">Demo useGetData</h4>
      <ul className="my-3">
        {data?.products?.map((product) => {
          return (
            <li key={product.id}>
              {product.id} - {product.title} - {product.category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DemoCustomHook;
