import Login from "./Login";
import "./Project.scss";
import "nprogress/nprogress.css";
import Lesson26 from "./chapter4/lesson26/Lesson26";
import Lesson27 from "./chapter4/lesson27/Lesson27";

const Project = (props) => {
  return (
    <div className="project">
      <Login />
      <Lesson27 />
    </div>
  );
};

export default Project;
