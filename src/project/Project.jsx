import Login from "./Login";
import "./Project.scss";
// import "nprogress/nprogress.css";
import Lesson17 from "./chapter3/Lesson17";

const Project = (props) => {
  return (
    <div className="project">
      <Login />
      {/* <Lesson26 /> */}
      <Lesson17 />
    </div>
  );
};

export default Project;
