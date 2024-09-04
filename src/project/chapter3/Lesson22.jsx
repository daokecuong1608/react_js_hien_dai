const Lesson22 = (props) => {
  // ghi de
  //   const obj = {
  //     name: "abc",
  //     address: "hn",

  //     //
  //     name: "def",
  //     phobe: "123",
  //   };

  //   console.log(">>> ", obj);

  // ví dụ về copy: nested object
  const person = {
    name: "abc",
    address: {
      city: "hn",
      country: "vn",
    },
    job: {
      title: "dev",
      detail: {
        position: "boss",
        salary: "5k",
      },
    },
  };

  // modify directly
  //   const clone = { ...person };
  //   clone.name = "update name"; // ok
  //   clone.address.city = "hcm"; //2 level deep => not ok
  //   console.log(">>> check person: ", person, " clone= ", clone);
 
  // spread syntax
  const clone = {
    ...person,
    address: {
      ...person.address,
      city: "hcm",
    },
  };

  console.log(">>> check person: ", person, " clone= ", clone);

  return <div>Lesson 22;</div>;
};

export default Lesson22;
//toán tử Spread Syntax (...)  chỉ  ảnh hưởng  ở mức độ 1 ko ảnh hưởng sâu hn => shall copy : copy nông 