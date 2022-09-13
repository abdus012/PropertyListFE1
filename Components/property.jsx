import React, { useState } from "react";

const initialValues = {
  name: "",
  description: "",
  size: ""
};

export default function Form() {
  let [values, setValues] = useState(initialValues);
  const [inputList, setInputList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const deleteItems = (i) => {
    setInputList((olditem) => {
      return olditem.filter((arrEle, index) => {
        return index !== i;
      });
    });
  };
  const listOfItems = () => {
    setInputList((olditem) => {
      return [...olditem, values];
    });
    setValues({ ...initialValues });
  };

  return (
    <div className="main_div">
      {/* <From person={myName} onSubmit={getData} /> */}
      <div className="center_div">
        <br />
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleInputChange}
          placeholder="name"
        />
        <span className="input_space"></span>
        <input
          type="text"
          name="description"
          value={values.description}
          onChange={handleInputChange}
          placeholder="description"
        />
        <span className="input_space"></span>
        <input
          type="text"
          name="size"
          value={values.size}
          onChange={handleInputChange}
          placeholder="size"
        />
        <button onClick={listOfItems}>+</button>
        <ol>
          {inputList.map((item, i) => {
            return (
              <div className="listPos">
                <li>
                  {item.name} {item.description} {item.size}
                  <button
                    className="rightMostBtn"
                    onClick={() => {
                      deleteItems(i);
                    }}
                  >
                    -
                  </button>
                </li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
