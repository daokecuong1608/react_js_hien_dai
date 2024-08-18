import Login from "./Login";
import "./Project.scss";
// import "nprogress/nprogress.css";
import Lesson17 from "./chapter3/Lesson17";
import Lesson18 from "./chapter3/Lesson18";

const Project = (props) => {
  return (
    <div className="project">
      <Login />
      {/* <Lesson26 /> */}
      {/* <Lesson17 /> */}
      <Lesson18 />
    </div>
  );
};

export default Project;
