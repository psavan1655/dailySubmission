import React, { useState } from "react";
// import { useForm } from "react-hook-form"
const NewForm = () => {
  // eslint-disable-next-line// eslint-disable-next-line
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    intro: "",
    image: "",
    hobbies: [],
    gender: "",
    counties: "",
    state: "",
    pincode: "",
    email: "",
    contact: "",
  });
const {
      firstName,
      lastName,
      intro,
      image,
      hobbies,
      gender,
      counties,
      state,
      pincode,
      email,
      contact,
} = userInfo;
  // eslint-disable-next-line
  const [recode, setRecode] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
      setUserInfo({ errormessage: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newDataAdd = { ...userInfo, id: new Date().getTime().toString() };
    console.log(recode);
    // eslint-disable-next-line
    setRecode([...recode, newDataAdd]);
    console.log(recode);
    setUserInfo({
      firstName: "",
      lastName: "",
      intro: "",
      image: "",
      hobbies: "",
      gender: "",
      counties: "",
      state: "",
      pincode: "",
      email: "",
      contact: "",
    });
    setUserInfo({ loading: true });
    if (
      !firstName ||
      !lastName ||
      !intro||
      !image||
      !hobbies ||
      !gender ||
      !counties||
      !state ||
      !pincode ||
      !email ||
      !contact 
    ) {
      setUserInfo({errormessage: "please enter all details" });
    } else {
        console.log(userInfo);
    }
  };
   
    
  return (
    <React.Fragment>
      <div className="container">
        <from onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={userInfo.firstName}
              onChange={handleInput}
            />
            <div style={{ color: "red", fontSize: "12px" }}>
              {userInfo.errormessage}
            </div>
          </div>
          <div>
            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              autoComplete="off"
              name="lastName"
              id="lastName"
              value={userInfo.lastName}
              onChange={handleInput}
            />
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {userInfo.errormessage}
          </div>
          <div>
            <label>Profile Pic</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="userimg"
              value={userInfo.image}
              onChange={handleInput}
            />
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {userInfo.errormessage}
          </div>
          <div>
            <label>
              Intro
              <textarea
                rows="3"
                autoComplete="off"
                cols="20"
                name="intro"
                value={userInfo.intro}
                onChange={handleInput}
                maxLength="100"
              ></textarea>
            </label>
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {userInfo.errormessage}
          </div>
          <div>
            <label>Gender</label>
            <input
              type="radio"
              name="gender"
              value={userInfo.gender}
              onChange={handleInput}
              id="male"
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              value={userInfo.gender}
              onChange={handleInput}
              id="female"
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              value={userInfo.gender}
              onChange={handleInput}
              id="other"
            />
            <label htmlFor="other">Other</label>
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {userInfo.errormessage}
          </div>
          <div>
            <select name="hobbies" onChange={handleInput}>
              <option value=""></option>
              <option>Gardening</option>
              <option>Magic-Tricks</option>
              <option>Photography</option>
              <option>Fishing</option>
              <option>Dance-Class</option>
            </select>
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {userInfo.errormessage}
          </div>
          <div>
            <label>Counties</label>
            <select name="counties" onChange={handleInput}>
              <option value=""></option>
              <option>India</option>
              <option>USA</option>
            </select>
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {userInfo.errormessage}
          </div>
          <div>
            <label>State</label>
            <select name="state" onChange={handleInput}>
              <option value=""></option>
              <option>Gujarat</option>
              <option>UP</option>
              <option>Texas</option>
              <option>Las-Vegas</option>
            </select>
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {userInfo.errormessage}
          </div>
          <div>
            <label htmlFor="pincode">PinCode</label>
            <input
              type="text"
              value={userInfo.pincode}
              onChange={handleInput}
              autoComplete="off"
              name="pincode"
              id="pincode"
              maxLength="6"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={userInfo.email}
              autoComplete="off"
              name="email"
              id="email"
              onChange={handleInput}
            />
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {userInfo.errormessage}
          </div>
          <div>
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              value={userInfo.contact}
              autoComplete="off"
              name="contact"
              id="contact"
              maxLength="12"
              onChange={handleInput}
            />
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {userInfo.errormessage}
          </div>
          <div className="btn">
            <button type="submit" onClick={handleSubmit} className="sbtn">
              submit
            </button>
          </div>
        </from>
        <div>
          {recode.map((curElem) => {
            return (
              <div>
                <p>{curElem.firstName}</p>
                <p>{curElem.lastName}</p>
                <p>{curElem.intro}</p>
                <p>{curElem.image}</p>
                <p>{curElem.hobbies}</p>
                <p>{curElem.gender}</p>
                <p>{curElem.counties}</p>
                <p>{curElem.state}</p>
                <p>{curElem.pincode}</p>
                <p>{curElem.email}</p>
                <p>{curElem.contact}</p>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewForm;
