import _ from "lodash";

const Lesson25 = (props) => {
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

  //   let copyPerson = _.clone(person); //shallow copy lv 1
  let copyPerson = _.cloneDeep(person); //deep copy copy hết

  copyPerson.name = "update city";
  copyPerson.job.title = "update job";
  console.log(">>> check person: ", person, " copyPerson:", copyPerson);

  return <div>Lesson 25;</div>;
};

export default Lesson25;
