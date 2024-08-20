import { useState } from "react";

const AddNewUser = (props) => {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");

  //chuyển sang dạng ảnh Base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleOnChangeFile = async (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      let strToReplace = await toBase64(e.target.files[0]);
      let strImage = strToReplace.replace("data:image/png;base64,", "");
      setImage(strImage);
    }
  };
  const handleOnSubmit = () => {
    if (!id || !username || !image) {
      alert("ID is not empty");
      return;
    }
    props.addNewUser({ id, username, image });
  };

  return (
    <div>
      <fieldset>
        <legend>ADD NEW USER:</legend>
        <div>
          <label>ID:</label>
          <input
            type={"text"}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type={"text"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input type={"file"} onChange={handleOnChangeFile} />
        </div>
        <div>
          <button type="button" onClick={handleOnSubmit}>
            Đăng ký
          </button>
        </div>
      </fieldset>
    </div>
  );
};
export default AddNewUser;
