import React from "react";

const Harsh = () => {
  return (
    <div>
      <div>
        <lable>Gender:-</lable>
        <input
          type="radio"
          name="Gender"
          value="male"
          onChange={(e) => console.log(e.target.value)}
        />
        Male
        <input
          type="radio"
          name="Gender"
          value="female"
          onChange={(e) => console.log(e.target.value)}
        />
        Female
      </div>
    </div>
  );
};

export default Harsh;
