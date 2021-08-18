import React, { useState } from "react";
import Select from "react-select";

const NewForm = () => {
  // eslint-disable-next-line
  const [recode, setRecode] = useState([]);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    intro: "",
    image: [],
    gender: "",
    counties: "",
    state: "",
    pincode: "",
    email: "",
    contact: "",
  });
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [errormessage, setErrorMessage] = useState({
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
  const hobbies = [
    { value: "Gardening", label: "Gardening" },
    { value: "Magic-Tricks", label: "Magic-Tricks" },
    { value: "Photography", label: "Photography" },
    { value: "Fishing", label: "Fishing" },
    { value: "Dance-Class", label: "Dance-Class" },
  ];

  const handleValidataion = (name, value) => {
    if (value.length === " ") {
      setErrorMessage({
        [name]: `$[name]should not be empty`,
      });
    } else {
      setErrorMessage({ [name]: " " });
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    handleValidataion(name, value);
    console.log("Selected Options: ", selectedOptions);

    if (name === "image") {
      if (e.target.files) {
        const fileArray = Array.from(e.target.files).map((file) =>
          URL.createObjectURL(file)
        );
        console.log("fileArray:", fileArray);
        setUserInfo({ ...userInfo, image: fileArray });
      }
    }
  };
  const hadleOnChangeHobbie = (hobbies) => {
    setSelectedOptions(hobbies);
    console.log(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    if (
      !userInfo.firstName ||
      !userInfo.lastName ||
      !userInfo.intro ||
      !userInfo.image ||
      !selectedOptions.hobbies||
      !userInfo.gender ||
      !userInfo.counties ||
      !userInfo.state ||
      !userInfo.pincode ||
      !userInfo.email ||
      !userInfo.contact
    ) {
      if (!userInfo.firstName) {
        setErrorMessage({
          firstName: "Please This Field is Required",
        });
      } else if (!userInfo.lastName) {
        setErrorMessage({
          lastName: "Please This Field is Required",
        });
      } else if (!userInfo.intro) {
        setErrorMessage({
          intro: "Please This Field is Required",
        });
      } else if (!userInfo.image) {
        setErrorMessage({
          image: "Please This Field is Required",
        });
      } else if (!selectedOptions.hobbies) {
        setErrorMessage({
          hobbies: "Please This Field is Required",
        });
      }
      else if (!userInfo.gender) {
        setErrorMessage({
          gender: "Please This Field is Required",
        });
      } else if (!userInfo.counties) {
        setErrorMessage({
          counties: "Please This Field is Required",
        });
      } else if (!userInfo.state) {
        setErrorMessage({
          state: "Please This Field is Required",
        });
      } else if (!userInfo.pincode) {
        setErrorMessage({
          pincode: "Please This Field is Required",
        });
      } else if (!userInfo.email) {
        setErrorMessage({
          email: "Please This Field is Required",
        });
      } else if (!userInfo.contact) {
        setErrorMessage({
          contact: "Please This Field is Required",
        });
      }
    } else {
      e.preventDefault();
      alert("Okay");
      const newDataAdd = {
        ...userInfo,
        id: new Date().getTime().toString(),
        hobbies: selectedOptions,
      };
      // eslint-disable-next-line
      setRecode([...recode, newDataAdd]);
    }
  };
  console.log("Data :", recode);

  const handleOnBlur = (data) => {
    let name = data.target.name;
    let value = data.target.value;

    if (name === "email") {
      // eslint-disable-next-line
      let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let email = value;
      if (!email.match(mailFormat)) {
        setErrorMessage({ email: "Please enter valid email" });
      }
    }
    if (name === "contact") {
      let num = value.length;
      if (num < 10 && num > 11) {
        setErrorMessage({ contact: "Number should be 10 digits" });
      }
    }
    if (name === "pincode") {
      let pin = value.length;
      if (pin < 6 && pin > 7) {
        setErrorMessage({ pincode: "Please Enter Valid PinCode" });
      }
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={userInfo.firstName}
              onChange={(e) => handleInput(e)}
            />
            <div style={{ color: "red", fontSize: "12px" }}>
              {errormessage.firstName}
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
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {errormessage.lastName}
          </div>
          <div>
            <label>Profile Pic</label>
            <input
              type="file"
              multiple
              name="image"
              accept="image/jpg image/png image/jpeg"
              className="userimg"
              data-max-size="5000"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {errormessage.image}
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
                onChange={(e) => handleInput(e)}
                maxLength="100"
              ></textarea>
            </label>
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {errormessage.intro}
          </div>
          <div>
            <label>Gender</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => handleInput(e)}
              id="male"
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => handleInput(e)}
              id="female"
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={(e) => handleInput(e)}
              id="other"
            />
            <label htmlFor="other">Other</label>
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {errormessage.gender}
          </div>
          <div>
            <label>Hobbies</label>
            <Select
              options={hobbies}
              onChange={hadleOnChangeHobbie}
              value={selectedOptions}
              isMulti={true}
              closeMenuOnSelect={false}
            />
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {errormessage.hobbies}
          </div>
          <div>
            <label>Counties</label>
            <select name="counties" onChange={(e) => handleInput(e)}>
              <option value=""></option>
              <option>India</option>
              <option>USA</option>
            </select>
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {errormessage.counties}
          </div>
          <div>
            <label>State</label>
            <select name="state" onChange={(e) => handleInput(e)}>
              <option value=""></option>
              <option
                value={userInfo.counties === "India" ? "Gujarat" : "LasVeges"}
              >
                {userInfo.counties === "India" ? "Gujarat" : "LasVeges"}
              </option>
              <option value={userInfo.counties === "India" ? "Up" : "Texas"}>
                {userInfo.counties === "India" ? "Up" : "Texas"}
              </option>
            </select>
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {errormessage.state}
          </div>
          <div>
            <label htmlFor="pincode">PinCode</label>
            <input
              type="text"
              value={userInfo.pincode}
              onChange={(e) => handleInput(e)}
              autoComplete="off"
              name="pincode"
              id="pincode"
              maxLength="6"
            />
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {errormessage.pincode}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={userInfo.email}
              autoComplete="off"
              name="email"
              id="email"
              onChange={(e) => handleInput(e)}
              onBlur={(e) => handleOnBlur(e)}
            />
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {errormessage.email}
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
              onChange={(e) => handleInput(e)}
              onBlur={(e) => handleOnBlur(e)}
            />
          </div>
          <div style={{ color: "red", fontSize: "12px" }}>
            {errormessage.contact}
          </div>
          <div className="btn">
            <button type="submit" className="sbtn">
              submit
            </button>
          </div>
        </form>

        {/* Display Data */}
        <div>
          {recode.map((curElem, i) => {
            const { image, hobbies } = curElem;
            return (
              <div key={i}>
                <p>FristName-{curElem.firstName}</p>
                <p>LastName-{curElem.lastName}</p>
                <p>Intro-{curElem.intro}</p>
                <p>
                  Images :
                  {image.map((kevin, i) => {
                    return (
                      <img
                        src={kevin}
                        alt="Ok"
                        key={i}
                        width="50"
                        height="50"
                        style={{ margin: "0 2px" }}
                      />
                    );
                  })}
                </p>
                {/* <p>Hobbies-{curElem.hobbies}</p> */}
                <span>
                  <div>
                    Hobbies 
                    {hobbies.map((item) => {
                      return <p>{item.value}</p>;
                    })}
                  </div>
                </span>
                <p>Gender-{curElem.gender}</p>
                <p>Counties-{curElem.counties}</p>
                <p>State-{curElem.state}</p>
                <p>PinCode-{curElem.pincode}</p>
                <p>Email-{curElem.email}</p>
                <p>Contact-{curElem.contact}</p>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewForm;
