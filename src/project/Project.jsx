import Login from "./Login";
import "./Project.scss";
// import "nprogress/nprogress.css";
import Lesson17 from "./chapter3/Lesson17";
import Lesson18 from "./chapter3/Lesson18";
import Lesson19 from "./chapter3/Lesson19";
import Lesson20 from "./chapter3/Lesson20";

const Project = (props) => {
  return (
    <div className="project">
      <Login />
      {/* <Lesson26 /> */}
      {/* <Lesson17 /> */}
      {/* <Lesson18 /> */}
      {/* <Lesson19 /> */}
      <Lesson20 />
    </div>
  );
};

export default Project;
