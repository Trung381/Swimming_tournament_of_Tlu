import React, { useState } from "react";
import axios from "axios";
import CandidateInforForm from "../welcome/candidateInforForm";

const LookUpInforModal = () => {
    const [searchInput, setSearchInput] = useState("");
    const [formData, setFormData] = useState(null);
  
    const handleSearch = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/candidates?idNumber=${searchInput}`);
        if (response.data.length > 0) {
          setFormData(response.data[0]);
        } else {
          alert("Không tìm thấy thí sinh có mã tương ứng.");
          setFormData(null);
        }
      } catch (error) {
        console.error("Đã xảy ra lỗi khi tra cứu thông tin:", error);
      }
    };
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleUpdate = async () => {
      try {
        await axios.put(`http://localhost:3001/candidates/${formData.id}`, formData);
        alert("Thông tin thí sinh đã được cập nhật.");
      } catch (error) {
        console.error("Đã xảy ra lỗi khi cập nhật thông tin:", error);
      }
    };
  
    return (
      <>
        <div className="modal fade" id="lookUpInfoModal" tabIndex="-1" aria-labelledby="lookUpInfoModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="lookUpInfoModalLabel">Tra cứu thông tin</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className='container border' id='search' style={{ padding: '20px 0 1px 0', margin: '0 auto'}}>
                  <h4 className="text-center" style={{ marginBottom: '30px' }}>THÔNG TIN DỰ THI CỦA THÍ SINH</h4>
                  <div className="row justify-content-center mt-2">
                    <div className="col-auto" style={{ width: '48%', padding: 0 }}>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nhập thông tin" 
                        style={{ borderColor: 'black', borderRadius: '8px 0 0 8px' }} 
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                      />
                    </div>
                    <div className="col-auto" style={{ padding: 0 }}>
                      <button 
                        className="btn btn-primary" 
                        style={{ borderRadius: '0 8px 8px 0', borderLeft: 'none' }} 
                        onClick={handleSearch}
                      >
                        Tra cứu
                      </button>
                    </div>
                    <p className="text-center mt-2">*Chưa có thông tin, nhấn <a href="#registerModal" data-bs-toggle="modal" data-bs-target="#registerModal"><b>Đăng ký</b></a></p>
                  </div>
                  {formData && (
                    <CandidateInforForm formData={formData} handleChange={handleChange} />
                  )}
                  {formData && (
                    <div className="row justify-content-end mt-3" style={{ margin: '0 28px 25px 0' }}>
                      <div className="col-auto">
                        <button className="btn btn-primary" onClick={handleUpdate}>Yêu cầu thay đổi thông tin</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default LookUpInforModal;