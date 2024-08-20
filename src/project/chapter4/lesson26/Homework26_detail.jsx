import { useEffect, useState } from "react";
import { getUserWithPaginate } from "../../utils/apiService";
import User from "./User";
import { map } from "lodash";

/**
 * Sử dụng API (hàm đã viết sẵn để hiển thị danh sách users)
 * Cụ thể: sử dùng hàm getUserWithPaginate (page, limit) trong file apiService (đã import ở trên)
 * page chính là trang muốn lấy, limit là giới hạn số lượng bản ghi sẽ lấy
 * Ở đây, truyền vào mặc định là getUserWithPaginate (1, 3) để có dữ liệu
 */

/**
 * Hiển thị list user lấy được ra view
 * Mỗi 1 user là 1 component
 * Về hiển thị hình ảnh base64, có thể tham khảo component Login, or Google keke ^^
 * Có thêm option để show/hide hình ảnh tại mỗi user
 * Tự CSS để có 1 giao diện 'tương đối' và dễ nhìn ^^
 */

const Homework26 = (props) => {
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
      setListUser(res.DT);
    }
  };
  return (
    <div className="table-users-container">
      {/* {listUser &&
        listUser.length > 0 &&
        listUser.map((user, index) => ( */}
      <User listUser={listUser} fetchListUserWithPage={fetchListUserWithPage} />
      {/* ))} */}
    </div>
  );
};

export default Homework26;
