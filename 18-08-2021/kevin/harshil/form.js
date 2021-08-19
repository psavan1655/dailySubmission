import React, { useState } from "react";
import "./form.css";
import { useForm } from "react-hook-form";

const Form = () => {
  let fileArray = {};
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // eslint-disable-next-line
  let [formdata, setFormData] = useState({
    fname: "",
    lname: "",
    intro: "",
    profilePic: {},
    gender: "",
    Hobby: [],
    Countries: "",
    State: "",
    Pincode: "",
    Email: "",
    ContactNumber: "",
  });

  let [showData, setShowData] = useState([]);

  const handleChange = (data) => {
    setFormData({ ...formdata, [data.target.name]: data.target.value });

    // setFormData({ ...formdata, data });
    if (data.target.files) {
      // alert('Okay')
      fileArray = Array.from(data.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setFormData({ ...formdata, pictures: fileArray });
    }
  };

  // const handleFiles = (e) => {
  //   debugger;
  //   e.preventDefault();
  //
  //   // setFormData({ ...formdata, [e.target.name]: e.target.files });
  //   if (e.target.files) {
  //     const fileArra y = Array.from(e.target.files).map((file) =>
  //       URL.createObjectURL(file)
  //     );
  //
  //     setFormData({ ...formdata, profilePic: fileArray });
  //   }
  // };

  const onSubmit = (data) => {
    setFormData(data);

    const updatedData = {
      ...formdata,
      id: new Date().getTime().toString(),
    };

    setShowData({ ...showData, updatedData });
  };

  return (
    <React.Fragment>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>First Name:-</label>
            <input
              type="text"
              name="fname"
              onChange={(e) => {
                handleChange(e);
              }}
              {...register("fname", { required: true })}
            />
            <br />
            <span style={{ color: "red" }}>
              {errors.fname?.type === "required" && "First name is required"}
            </span>
          </div>
          <div>
            <label>Last Name:-</label>
            <input
              type="text"
              name="lname"
              onChange={(e) => {
                handleChange(e);
              }}
              {...register("lname", { required: true })}
            />
            <br />
            <span style={{ color: "red" }}>
              {errors.lname?.type === "required" && "Last name is required"}
            </span>
          </div>
          <div>
            <label>intro:-</label>
            <textarea
              name="intro"
              rows="5"
              cols="27"
              onChange={(e) => {
                handleChange(e);
              }}
              {...register("intro", {
                required: true,
                minLength: "100",
              })}
            />
            <br />
            {errors?.intro?.type === "required" && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
            {errors?.intro?.type === "minLength" && (
              <span style={{ color: "red" }}>
                intro cannot less then 100 characters
              </span>
            )}
          </div>

          <div {...register("gender", { required: true })}>
            <label>gender:-</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            Male
            <input type="radio" name="gender" value="female" />
            Female
            <br />
            <span style={{ color: "red" }}>
              {errors.gender?.type === "required" && "gender is required"}
            </span>
          </div>
          <div {...register("Hobby", { required: true })}>
            <label>Hobby:-</label>
            <select
              onChange={(e) => {
                handleChange(e);
              }}
              name="Hobby"
            >
              <option>Playing</option>
              <option>Reading</option>
              <option>Watching</option>
              <option>Travelling</option>
            </select>
            <br />
            <span style={{ color: "red" }}>
              {errors.Hobby?.type === "required" && "Hobby is required"}
            </span>
          </div>
          <div {...register("Countries", { required: true })}>
            <label>Countries:-</label>
            <select
              onChange={(e) => {
                handleChange(e);
              }}
              name="Countries"
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
            <br />
            <span style={{ color: "red" }}>
              {errors.Countries?.type === "required" && "Countries is required"}
            </span>
          </div>
          <div {...register("State", { required: true })}>
            <label>State:-</label>
            <select
              onChange={(e) => {
                handleChange(e);
              }}
              name="State"
            >
              <option value=""></option>
              <option
                value={formdata.Countries === "India" ? "Gujrat" : "LasVegas"}
              >
                {formdata.Countries === "India" ? "Gujrat" : "LasVegas"}
              </option>
              <option
                value={formdata.Countries === "India" ? "Rajasthan" : "Texas"}
              >
                {formdata.Countries === "India" ? "Rajasthan" : "Texas"}
              </option>
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
              onChange={(e) => {
                handleChange(e);
              }}
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
              {...register("Email", {
                required: true,
                pattern: {
                  value:
                    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                },
              })}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <span style={{ color: "red" }}>
              {errors.Email?.type === "required" && "Email is required"}
              {errors?.Email?.type === "pattern" && (
                <span style={{ color: "red" }}>Invalid Email </span>
              )}
            </span>
          </div>
          <div>
            <label>Contact Number:-</label>
            <input
              type="text"
              name="ContactNumber"
              {...register("ContactNumber", {
                required: true,
                pattern: "[789][0-9]{9}",
                maxLength: 10,
              })}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            {errors?.ContactNumber?.type === "required" && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
            {errors?.ContactNumber?.type === "maxLength" && (
              <span style={{ color: "red" }}>Invalid Contact Number</span>
            )}
          </div>
          <div>
            <label>Profile pic:-</label>
            <input
              type="file"
              multiple
              accept="image/jpeg, image/jpg"
              name="profilePic"
              {...register("profilePic", { required: true })}
              onChange={(e) => {
                handleChange(e);
                // handleFiles(e);
              }}
            />
            <br />
            <span style={{ color: "red" }}>
              {errors.profilePic?.type === "required" &&
                "profilePic is required"}
            </span>
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
      <div>
        FirstName:- {formdata.fname}
        <br />
        lname:-{formdata.lname}
        <br />
        intro:-{formdata.intro}
        <br />
        gender:{formdata.gender} <br />
        Hobby:{formdata.Hobby}
        <br />
        Countries:{formdata.Countries} <br />
        State: {formdata.State}
        <br />
        Pincode:{formdata.Pincode} <br />
        Email: {formdata.Email}
        <br />
        ContactNumber:{formdata.ContactNumber}
        <br />
        Profile Picture :
        <img src={formdata.profilePic} alt="pic" height="50%" />
      </div>
    </React.Fragment>
  );
};

export default Form;
