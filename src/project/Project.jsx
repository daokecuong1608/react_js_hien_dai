import Login from "./Login";
import "./Project.scss";
// import "nprogress/nprogress.css";
import Lesson17 from "./chapter3/Lesson17";
import Lesson18 from "./chapter3/Lesson18";
import Lesson19 from "./chapter3/Lesson19";
import Lesson20 from "./chapter3/Lesson20";
import Lesson21 from "./chapter3/Lesson21";
import Lesson22 from "./chapter3/Lesson22";
import Lesson23 from "./chapter3/Lesson23";
import Lesson24 from "./chapter3/Lesson24";
import Lesson25 from "./chapter3/Lesson25";
import Lesson26 from "./chapter4/lesson26/Lesson26";
import Lesson27 from "./chapter4/lesson27/Lesson27";

const Project = (props) => {
  return (
    <div className="project">
      <Login />
      {/* <Lesson26 /> */}
      {/* <Lesson17 /> */}
      {/* <Lesson18 /> */}
      {/* <Lesson19 /> */}
      {/* <Lesson20 /> */}
      {/* <Lesson21 /> */}
      {/* <Lesson22 /> */}
      {/* <Lesson23 /> */}
      {/* <Lesson25 /> */}
      <Lesson27 />
      <Lesson26 />
    </div>
  );
};

export default Project;
