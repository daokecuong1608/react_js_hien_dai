import { useState } from "react";

const User = (props) => {
  const { listUser } = props;
  const [show, setShow] = useState(true);
  console.log(">>> listUser: ", listUser);
  return (
    <div className="detail-user">
      {listUser &&
        listUser.length > 0 &&
        listUser.map((data) => (
          <div>
            <div>ID: {data?.id}</div>
            <div>Username: {data?.username}</div>
            <div>
              {data.image && show && (
                <img
                  src={`data:image/png;base64, ${data.image}`}
                  alt="User image"
                />
              )}
            </div>
            <div>
              <button onClick={() => setShow(!show)}>Hide/Show Images</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default User;
