import { useEffect, useState } from "react";
import { getUserWithPaginate } from "../../utils/apiService";
import Homework26 from "../lesson26/Homework26_detail";
import AddNewUser from "./AddNewUser";

const Lesson27 = (props) => {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    fetchListUserWithPage();
  }, []);
  //xử lý lấy danh sách user và phân trang
  const fetchListUserWithPage = async () => {
    //call api
    let res = await getUserWithPaginate(1, 3);
    if (res && +res.EC === 0) {
      console.log(">>> check res: ", res);
      setListUser(res.DT.users);
    }
  };

  const addNew = (user) => {
    console.log(">>> check user: ", user);
    setListUser([user, ...listUser]);
  };

  return (
    <div>
      <h1>Thêm mới người dùng </h1>
      <AddNewUser addNew={addNew} />
      <Homework26 listUser={listUser} />
    </div>
  );
};

export default Lesson27;
