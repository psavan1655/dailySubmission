import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // eslint-disable-next-line
  let [userInfo, setUserInfo] = useState({
    FirstName: "",
    LastName: "",
    Introduction: "",
    Profilepic: "",
    Gender: "",
    Hobby: "",
    Countries: "",
    State: "",
    Pincode: "",
    Email: "",
    ContactNumber: "",
  });
  // eslint-disable-next-line
  const [recode, setRecode] = useState([]);
  // eslint-disable-next-line
  const onSubmit = (e) => {
    e.preventDefault();
    const newDataAdd = {
      ...userInfo,
      id: new Date().getTime().toString(),
      };
       console.log(recode);
       // eslint-disable-next-line
       setRecode([...recode, newDataAdd]);
      console.log(recode);
          setUserInfo({
            FirstName: "",
            LastName: "",
            Introduction: "",
            Profilepic: "",
            Gender: "",
            Hobby: "",
            Countries: "",
            State: "",
            Pincode: "",
            Email: "",
            ContactNumber: "",
          });
      
  };
  const handleOnChange = (e) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <lable>First Name:-</lable>
            <input
              type="text"
              name="FirstName"
              id="firstname"
              value={userInfo.FirstName}
              onChange={handleOnChange}
              {...register("FirstName", { required: true })}
            />
            <br />
            <span style={{ color: "red" }}>
              {errors.FirstName?.type === "required" &&
                "First name is required"}
            </span>
          </div>
          <div>
            <lable>Last Name:-</lable>
            <input
              type="text"
              name="LastName"
              id="lastname"
              value={userInfo.LastName}
              onChange={(e) => handleOnChange(e)}
              {...register("LastName", { required: true })}
            />
            <br />
            <span style={{ color: "red" }}>
              {errors.LastName?.type === "required" && "Last name is required"}
            </span>
          </div>
          <div>
            <lable>Introduction:-</lable>
            <textarea
              name="Introduction"
              id="introduction"
              value={userInfo.Introduction}
              rows="5"
              cols="27"
              maxLength="100"
              onChange={(e) => handleOnChange(e)}
              {...register("Introduction", { required: true })}
            />
            <br />
            <span style={{ color: "red" }}>
              {errors.Introduction?.type === "required" &&
                "Introduction is required"}
            </span>
          </div>
          <div>
            <label>Profile pic:-</label>
            <input
              type="file"
              accept="image/*"
              name="Profilepic"
              onChange={(e) => handleOnChange(e)}
              value={userInfo.Profilepic}
              {...register("Profilepic", { required: true })}
            />
            <br />
            <span style={{ color: "red" }}>
              {errors.Profilepic?.type === "required" &&
                "Profilepic is required"}
            </span>
          </div>
          <div {...register("Gender", { required: true })}>
            <lable>Gender:-</lable>
            <input
              type="radio"
              name="Gender"
              value={userInfo.Gender}
              onChange={(e) => handleOnChange(e)}
            />
            Male
            <input type="radio" name="Gender" value={userInfo.Gender} />
            Female
            <span style={{ color: "red" }}>
              {errors.Gender?.type === "required" && "Gender is required"}
            </span>
          </div>
          <div {...register("Hobby", { required: true })}>
            <lable>Hobby:-</lable>
            <select onChange={(e) => handleOnChange(e)} name="hobbies">
              <option value=""></option>
              <option>Gardening</option>
              <option>Magic-Tricks</option>
              <option>Photography</option>
              <option>Fishing</option>
              <option>Dance-Class</option>
            </select>
            <span style={{ color: "red" }}>
              {errors.Hobby?.type === "required" && "Hobby is required"}
            </span>
          </div>
          <div {...register("Countries", { required: true })}>
            <label>Countries:-</label>
            <select onChange={(e) => handleOnChange(e)} name="Countries">
              <option>India</option>
              <option>USA</option>
            </select>
            <span style={{ color: "red" }}>
              {errors.Countries?.type === "required" && "Countries is required"}
            </span>
          </div>
          <div {...register("State", { required: true })}>
            <label>State:-</label>
            <select onChange={(e) => handleOnChange(e)} name="State">
              <option>Rajasthan</option>
              <option>Punjab</option>
              <option>Las Vegas</option>
              <option>Texas</option>
            </select>
            <br />
            <span style={{ color: "red" }}>
              {errors.State?.type === "required" && "State is required"}
            </span>
          </div>
          <div>
            <label>Pincode:-</label>
            <input
              type="text"
              name="Pincode"
              value={userInfo.Pincode}
              onChange={(e) => handleOnChange(e)}
              {...register("Pincode", { required: true })}
            />
            <br />
            <span style={{ color: "red" }}>
              {errors.Pincode?.type === "required" && "Pincode is required"}
            </span>
          </div>
          <div>
            <label>Email:-</label>
            <input
              type="email"
              name="Email"
              value={userInfo.Email}
              onChange={(e) => handleOnChange(e)}
              {...register("Email", { required: true })}
            />
            <br />
            <span style={{ color: "red" }}>
              {errors.Email?.type === "required" && "Email is required"}
            </span>
          </div>
          <div>
            <label>Contact Number:-</label>
            <input
              type="text"
              name="ContactNumber"
              value={userInfo.Contact}
              onChange={(e) => handleOnChange(e)}
              {...register("ContactNumber", { required: true })}
            />
            <br />
            <span style={{ color: "red" }}>
              {errors.ContactNumber?.type === "required" &&
                "ContactNumber is required"}
            </span>
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
        <div>
          {recode.map((curElem) => {
            return (
              <div>
                <p>{curElem.FirstName}</p>
                <p>{curElem.LastName}</p>
                <p>{curElem.Introduction}</p>
                <p>{curElem.Profilepic}</p>
                <p>{curElem.hobbies}</p>
                <p>{curElem.Gender}</p>
                <p>{curElem.Counties}</p>
                <p>{curElem.State}</p>
                <p>{curElem.Pincode}</p>
                <p>{curElem.Email}</p>
                <p>{curElem.Contact}</p>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
