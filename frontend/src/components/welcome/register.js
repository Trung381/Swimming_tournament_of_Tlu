// import React from "react";
// import CandidateInforForm from "./candidateInforForm.js";

// function Register() {
//   return (
//     <>
//       <div className='container border' id='register' style={{ padding: '20px 0 1px 0', margin: '0px auto'}}>
//         {/* <h4 style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}><span style={{minWidth: '289px'}}>GIẢI BƠI TRUYỀN THỐNG</span><span style={{minWidth: '315px'}}> TRƯỜNG ĐẠI HỌC THỦY LỢI </span></h4>
//         <h4>TRƯỜNG ĐẠI HỌC THỦY LỢI</h4> */}
//         <h4 className="text-center" style={{ marginBottom: '10px' }}>GIẢI BƠI TRUYỀN THỐNG TRƯỜNG ĐẠI HỌC THỦY LỢI</h4>
//         <h4 className="text-center" style={{ marginBottom: '0'}}>PHIẾU ĐĂNG KÝ</h4>
//         <CandidateInforForm />
//         <div className="row justify-content-end mt-3" style={{ margin: '0 28px 25px 0' }}>
//           <div className="col-auto">
//             <button className="btn btn-danger" style={{marginRight: '7px'}}>Hủy</button>
//             <button className="btn btn-primary">Đăng ký</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;

import React, { useState } from "react";
import CandidateInforForm from "./candidateInforForm";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    idNumber: "",
    email: "",
    birthYear: "",
    gender: "",
    parentName: "",
    unit: "",
    class: "",
    categories: [],
    ageGroup: ""
  });

  // Xử lý khi người dùng thay đổi thông tin trên form
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        categories: checked
          ? [...prevData.categories, value]
          : prevData.categories.filter((item) => item !== value)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Xử lý khi người dùng submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/candidates', formData);  // Thay URL_API_CUA_BAN bằng URL API thực tế của bạn
      console.log("Đăng ký thành công:", response.data);
    } catch (error) {
      console.error("Có lỗi xảy ra:", error);
    }
  };

  return (
    <>
      <div className='container border' id='register' style={{ padding: '20px 0 1px 0', margin: '0px auto'}}>
        <h4 className="text-center" style={{ marginBottom: '10px' }}>GIẢI BƠI TRUYỀN THỐNG TRƯỜNG ĐẠI HỌC THỦY LỢI</h4>
        <h4 className="text-center" style={{ marginBottom: '0'}}>PHIẾU ĐĂNG KÝ</h4>
        
        <form onSubmit={handleSubmit}>
          <CandidateInforForm formData={formData} handleChange={handleChange} />
          <div className="row justify-content-end mt-3" style={{ margin: '0 28px 25px 0' }}>
            <div className="col-auto">
              <button type="button" className="btn btn-danger" style={{marginRight: '7px'}}>Hủy</button>
              <button type="submit" className="btn btn-primary">Đăng ký</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
