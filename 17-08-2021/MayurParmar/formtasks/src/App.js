import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState({
    fname: "",
    lname: "",
    intro: "",
    profilePic: "",
    gender: "",
    hobbies: "",
    country: "",
    state: "",
    pincode: "",
    email: "",
    contact: "",
  });
  const [error, setError] = useState({
    fname: "",
    lname: "",
    intro: "",
    profilePic: "",
    gender: "",
    hobbies: "",
    country: "",
    state: "",
    pincode: "",
    email: "",
    contact: "",
  });

  const showRef = useRef();
  const stateRef = useRef();

  useEffect(() => {
    showRef.current.style = "display:none";
    stateRef.current.style = "display:none";
  }, []);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputVaue = e.target.value;

    setError({ ...error, [inputName]: "" });
    if (inputName === "intro") {
      if (String(inputVaue).length < 100) {
        setError({
          ...error,
          intro: "The Intro field is minimum 100 Character.",
        });
        setValue({ ...value, [inputName]: inputVaue });
      } else {
        setValue({ ...value, [inputName]: inputVaue });
      }
    } else if (inputName === "country") {
      stateRef.current.style = "display:visible";
      setValue({ ...value, [inputName]: inputVaue });
    } else if (inputName === "contact") {
      if (String(inputVaue).length >= 11) {
      } else if (String(inputVaue).length < 10) {
        setError({
          ...error,
          contact: "The Contact field is minimum 10 Character.",
        });
        setValue({ ...value, [inputName]: inputVaue });
      } else {
        setValue({ ...value, [inputName]: inputVaue });
      }
    } else if (inputName === "pincode") {
      if (String(inputVaue).length >= 7) {
      } else {
        setValue({ ...value, [inputName]: inputVaue });
      }
    } else if (inputName === "profilePic") {
      const file = e.target.files;
      if (file.size < 524288) {
        setError({
          ...error,
          profilePic:
            "The Profile Picture Must be between the size of 10kb- 5mb.",
        });
      } else {
        setValue({ ...value, [inputName]: inputVaue });
      }
    } else if (inputName === "hobbies") {
      let value = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setValue({ ...value, [inputName]: value });
    } else {
      setValue({ ...value, [inputName]: inputVaue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (
      value.fname === "" &&
      value.lname === "" &&
      value.intro === "" &&
      value.profilePic === "" &&
      value.gender === "" &&
      value.hobbies === "" &&
      value.country === "" &&
      value.state === "" &&
      value.pincode === "" &&
      value.email === "" &&
      value.contact === ""
    ) {
      setError({
        ...error,
        fname: "The FirstName field is required.",
        lname: "The LastName field is required.",
        intro: "The Intro field is required.",
        profilePic: "The ProfilePicture field is required.",
        gender: "The Gender field is required.",
        hobbies: "The Hobbies field is required.",
        country: "The Country field is required.",
        state: "The State field is required.",
        pincode: "The Pincode field is required.",
        email: "The Email field is required.",
        contact: "The Contact field is required.",
      });
    } else if (value.fname === "") {
      setError({ ...error, fname: "The FirstName field is required." });
    } else if (value.lname === "") {
      setError({ ...error, lname: "The LastName field is required." });
    } else if (value.intro === "") {
      setError({ ...error, intro: "The Intro field is required." });
    } else if (value.profilePic === "") {
      setError({
        ...error,
        profilePic: "The ProfilePicture field is required.",
      });
    } else if (value.gender === "") {
      setError({ ...error, gender: "The Gender field is required." });
    } else if (value.hobbies === "") {
      setError({ ...error, hobbies: "The Hobbies field is required." });
    } else if (value.country === "") {
      setError({ ...error, country: "The Country field is required." });
    } else if (value.state === "") {
      setError({ ...error, state: "The State field is required." });
    } else if (value.pincode === "") {
      setError({ ...error, pincode: "The Pincode field is required." });
    } else if (value.email === "") {
      setError({ ...error, email: "The Email field is required." });
    } else if (value.contact === "") {
      setError({ ...error, contact: "The Contact field is required." });
    } else if (!value.email.match(mailformat)) {
      setError({
        ...error,
        email: "You have entered an invalid e-mail address. Please try again.",
      });
    } else {
      showRef.current.style = "display:visible";
    }
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="form">
          <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="fname">
              FirstName<span style={{ color: "red", fontSize: "14px" }}>*</span>
              :
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              onChange={handleChange}
              value={value.fname}
            />
            <span>{error.fname}</span>

            <label htmlFor="lname">
              LastName<span style={{ color: "red", fontSize: "14px" }}>*</span>:
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              onChange={handleChange}
              value={value.lname}
            />
            <span>{error.lname}</span>

            <label htmlFor="intro">
              Intro<span style={{ color: "red", fontSize: "14px" }}>*</span>:
            </label>
            <textarea
              name="intro"
              id="intro"
              rows="3"
              onChange={handleChange}
              value={value.intro}
            ></textarea>
            <span>{error.intro}</span>

            <label htmlFor="profilePic">
              Profile Picture
              <span style={{ color: "red", fontSize: "14px" }}>*</span>:
            </label>
            <input
              type="file"
              name="profilePic"
              id="profilePic"
              accept=".jpg, .jpeg, .png"
              onChange={handleChange}
            />
            <span>{error.profilePic}</span>

            <label>
              Gender<span style={{ color: "red", fontSize: "14px" }}>*</span>:
            </label>
            <div>
              <input
                type="radio"
                name="gender"
                id="male"
                onChange={handleChange}
                value="male"
              />
              <label style={{ margin: "0px 10px" }} htmlFor="male">
                Male
              </label>

              <input
                type="radio"
                name="gender"
                id="female"
                onChange={handleChange}
                value="female"
              />
              <label style={{ margin: "0px 10px" }} htmlFor="female">
                Female
              </label>
            </div>
            <span>{error.gender}</span>

            <label htmlFor="hobbies">
              Hobbies<span style={{ color: "red", fontSize: "14px" }}>*</span>:
            </label>
            <select
              name="hobbies"
              id="hobbies"
              onChange={handleChange}
              multiple
            >
              <option value="" disabled>
                Select Hobbies
              </option>
              <option value="Music">Music</option>
              <option value="Singing">Singing</option>
              <option value="Reading">Reading</option>
            </select>
            <span>{error.hobbies}</span>

            <label htmlFor="country">
              country<span style={{ color: "red", fontSize: "14px" }}>*</span>:
            </label>
            <select name="country" onChange={handleChange} id="country">
              <option value="" disabled selected>
                Select country
              </option>
              <option value="india">India</option>
              <option value="u.s">U.S</option>
            </select>
            <span>{error.country}</span>

            <div
              ref={stateRef}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="state">
                State<span style={{ color: "red", fontSize: "14px" }}>*</span>:
              </label>
              <select name="state" onChange={handleChange} id="state">
                <option value="" disabled selected>
                  Select State
                </option>
                <option value={value.country === "india" ? "Gujarat" : "Texas"}>
                  {value.country === "india" ? "Gujarat" : "Texas"}
                </option>
                <option
                  value={value.country === "india" ? "Maharast" : "Las Vages"}
                >
                  {value.country === "india" ? "Maharast" : "Las Vages"}
                </option>
              </select>
            </div>
            <span>{error.state}</span>

            <label htmlFor="pincode">
              Pincode<span style={{ color: "red", fontSize: "14px" }}>*</span>:
            </label>
            <input
              type="number"
              name="pincode"
              value={value.pincode}
              id="pincode"
              maxLength={6}
              onChange={handleChange}
            />
            <span>{error.pincode}</span>

            <label htmlFor="email">
              Email<span style={{ color: "red", fontSize: "14px" }}>*</span>:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={value.email}
            />
            <span>{error.email}</span>

            <label htmlFor="contact">
              Contact<span style={{ color: "red", fontSize: "14px" }}>*</span>:
            </label>
            <input
              type="number"
              name="contact"
              id="contact"
              maxLength={10}
              value={value.contact}
              onChange={handleChange}
            />
            <span>{error.contact}</span>

            <input type="submit" className="btn" name="submit"></input>
          </form>
        </div>
        <div className="show" ref={showRef}>
          <h1>Bio Data</h1>
          <table className="table">
            <tbody>
              <tr>
                <td>FirstName:</td>
                <td>{value.fname}</td>
              </tr>
              <tr>
                <td>LastName:</td>
                <td>{value.lname}</td>
              </tr>
              <tr>
                <td>Intro:</td>
                <td>{value.intro}</td>
              </tr>
              <tr>
                <td>Profile Picture:</td>
                <td>{value.profilePic}</td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>{value.gender}</td>
              </tr>
              <tr>
                <td>Hobbies:</td>
                <td>{value.hobbies}</td>
              </tr>
              <tr>
                <td>Country:</td>
                <td>{value.country}</td>
              </tr>
              <tr>
                <td>State:</td>
                <td>{value.state}</td>
              </tr>
              <tr>
                <td>Pin Code:</td>
                <td>{value.pincode}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{value.email}</td>
              </tr>
              <tr>
                <td>Contact:</td>
                <td>{value.contact}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
