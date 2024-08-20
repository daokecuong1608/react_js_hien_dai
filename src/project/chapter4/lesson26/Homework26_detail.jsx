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
  const { listUser } = props;

  return (
    <div className="list-users">
      {/* //chuyển dữ liệu từ listUser sang component User */}
      {listUser &&
        listUser.length > 0 &&
        listUser.map((item, index) => <User key={index} data={item} />)}
    </div>
  );
};

export default Homework26;
