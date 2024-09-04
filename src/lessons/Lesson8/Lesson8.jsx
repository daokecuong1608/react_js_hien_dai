import './Lesson8.scss';

const Lesson8 = (props) => {
    //cách truyền thôngs
    function handleOnClick1() {
        alert('click me')
    }
//arrow function (có thể truy cập this)
    const handleOnClick2 = () => {
        alert('click me')
    }

    return (
        <div className="lesson8">
            <h3>Lesson 8 :</h3>
            <div>
                <button 
                //passing functions
                // onClick={handleOnClick2}
                onClick={handleOnClick2()}  //running (excute) 
                >Tham Chiếu</button>
            </div>
            <div>
                <button 
                //running (excute) 
                // onClick={alert('click me')}
                >Inline</button>
            </div>
            <div>
                <button
                // onClick={() => {
                //     alert('click me')
                // }}
                >Arrow function</button>
            </div>
        </div>
    )
}

export default Lesson8;
//event handler 
//running (excute) và passing functions