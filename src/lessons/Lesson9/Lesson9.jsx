import EventPreventDefault from "./EventPreventDefault";
import EventPropagation from "./EventPropagation";
import './Lesson9.scss';

const Lesson9 = (props) => {
    return (
        <div className="lesson9-container">
            {/* <EventPreventDefault /> */}
            <EventPropagation />
        </div>
    )
}
export default Lesson9;
//stop something (event propagation -  sự lan truyền của sự kiện)
//prevent default (ngăn chặn hành vi mặc định của trình duyệt)