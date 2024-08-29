import React, { useState } from "react";
import CandidateInforForm from "../welcome/candidateInforForm";
import axios from "axios";

const RegisterModal = () => {
    const [formData, setFormData] = useState({
        hovatenthisinh: "",
        email: "",
        sodienthoai: "",
        namsinh: "",
        gioitinh: "",
        hovatenphuhuynh: "",
        donvi: "",
        lop: "",
        hangmuc: [],
        hangtuoi: ""
      });
    
      // Xử lý khi người dùng thay đổi thông tin trên form
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
          setFormData((prevData) => ({
            ...prevData,
            hangmuc: checked
              ? [...prevData.hangmuc, value]
              : prevData.hangmuc.filter((item) => item !== value)
          }));

          //4 ki tu cuoi cua ma hang muc la hang tuoi
          const lastFourChars = value.slice(-4);
          const isAllDigits = /^\d{4}$/.test(lastFourChars);
          if (isAllDigits) {
            setFormData({
              ...formData,
              hangtuoi: lastFourChars.slice(0, 2) + '-' + lastFourChars.slice(-2)
            })
          }
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    
      // Xử lý khi người dùng submit form
      const handleSubmit = async (e) => {
        e.preventDefault(); console.log(formData);
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
                <h4 className="text-center" style={{ marginBottom: '10px' }}>GIẢI BƠI TRUYỀN THỐNG TRƯỜNG ĐẠI HỌC THỦY LỢI</h4>
                <h4 className="text-center" style={{ marginBottom: '0'}}>PHIẾU ĐĂNG KÝ</h4>
                  <form onSubmit={handleSubmit}>
                    <CandidateInforForm formData={formData} handleChange={handleChange} />
                    <div className="row justify-content-end mt-3">
                      <div className="col-auto">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" style={{ marginRight: '7px' }}>Hủy</button>
                        <button type="submit" className="btn btn-primary">Đăng ký</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </>
    );
  }
  
  export default RegisterModal;