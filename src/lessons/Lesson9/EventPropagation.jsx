const EventPropagation = (props) => {
    const handleClickParent = (event) => {
        console.log(">>> run handleClickParent")
    }

    const handleClickChild = (event) => {
        console.log(">>> run handleClickChild")
        event.stopPropagation();//ko final event của tg cha
    }

    return (
        <div className="event-propagation">
            <div className="parent" onClick={handleClickParent}>
                <span>I'm the parent</span>
                <div className="child">
                    <button onClick={handleClickChild}>Click child</button>
                </div>
            </div>
        </div>
    )
}

export default EventPropagation;