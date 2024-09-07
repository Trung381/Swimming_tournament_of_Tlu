import React, { useEffect, useState } from "react";
import CandidateInforForm from "../welcome/candidateInforForm";
import axios from "axios";

const RegisterModal = () => {
  const [formData, setFormData] = useState({
    hovatenthisinh: "",
    hovatenphuhuynh: "",
    donvi: "",
    lop: "",
    sodienthoai: "",
    namsinh: "",
    gioitinh: "",
    email: "",
    mahangmuc: []
  });

  // Xử lý khi người dùng thay đổi thông tin trên form
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let category;
      if (checked) {
        category = [...formData.mahangmuc, value];
      } else {
        category = formData.mahangmuc.filter(item => item !== value);
      }

      setFormData({
        ...formData,
        mahangmuc: category
      })
    }
    else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Xử lý khi người dùng submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // try {
    //   const response = await axios.post('http://localhost:3001/candidates', formData);  // Thay URL_API_CUA_BAN bằng URL API thực tế của bạn
    //   console.log("Đăng ký thành công:", response.data);
    // } catch (error) {
    //   console.error("Có lỗi xảy ra:", error);
    // }
  };

  return (
    <>
      <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registerModalLabel">Đăng ký thông tin</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h6 className="text-center"><b>GIẢI BƠI TRUYỀN THỐNG TRƯỜNG ĐẠI HỌC THỦY LỢI</b></h6>
              <h6 className="text-center" style={{ marginBottom: '0' }}><b>PHIẾU ĐĂNG KÝ</b></h6>
              <form>
                <CandidateInforForm formData={formData} handleChange={handleChange} />
              </form>
            </div>
            <div className="modal-footer">
              <div className="row justify-content-end mt-3">
                <div className="col-auto">
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal" style={{ marginRight: '7px' }}>Hủy</button>
                  <button type="submit" className="btn btn-primary" onClick={e => handleSubmit(e)}>Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterModal;