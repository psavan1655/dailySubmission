import React, { useState } from "react";
import "./form.css";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // eslint-disable-next-line
  let [formdata, setFormData] = useState({
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
  
  let [showData, setShowData] = useState([]);
  // eslint-disable-next-line

  
  const handleOnChange = (e) => {
    e.preventDefault();
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const onSubmit = (data) => {
      console.log(data);
      setShowData(data);
    
  }
  console.log("newdata",showData);

  
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
              rows="5"
              cols="27"
              maxLength="100"
              onChange={(e) => handleOnChange(e)}
              {...register("Introduction", {
                required: true,
                maxLength: "100",
              })}
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
              value="male"
              onChange={(e) => handleOnChange(e)}
            />
            Male
            <input type="radio" name="Gender" value="female" />
            Female
            <span style={{ color: "red" }}>
              {errors.Gender?.type === "required" && "Gender is required"}
            </span>
          </div>
          <div {...register("Hobby", { required: true })}>
            <lable>Hobby:-</lable>
            <select onChange={(e) => handleOnChange(e)} name="Hobby">
              <option>Playing</option>
              <option>Reading</option>
              <option>Watching</option>
              <option>Travelling</option>
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
      </div>
      <div>
       FirstName:- {showData.FirstName}<br/>
       LastName:-{showData.LastName}<br/>
       Introduction:-{showData.Introduction}<br/>
        {/* Profilepic:-{showData.Profilepic} */}
       Gender:{showData.Gender} <br/>
    Hobby:{showData.Hobby}<br/>
    Countries:{showData.Countries} <br/>
    State: {showData.State}<br/>
    Pincode:{showData.Pincode} <br/>
    Email: {showData.Email}<br/>
    ContactNumber:{showData.ContactNumber}<br/>

      </div>
    </React.Fragment>
  );
};

export default Form;
