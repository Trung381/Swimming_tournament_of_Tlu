import React, { useState } from "react";
import axios from "axios";
import CandidateInforForm from "../welcome/candidateInforForm";

const LookUpInforModal = () => {
  const [formData, setFormData] = useState(null);
  const [isSearchByNameAndPhone, setIsSearchByNameAndPhone] = useState(false);
  const [searchInput, setSearchInput] = useState({
    sobaodanh: '',
    hovaten: '',
    sodienthoai: ''
  });
  const [isModify, setIsModify] = useState(false);

  // Thay đổi giao diện tra cứu thông tin theo cách thức tra cứu
  const changeSearchWay = (e) => {
    e.preventDefault();
    setIsSearchByNameAndPhone(!isSearchByNameAndPhone);
    setSearchInput({
      sobaodanh: '',
      hovaten: '',
      sodienthoai: ''
    })
    setFormData(null);
  }

  // Data sending
  const handleChangeSearchInput = (e) => {
    setSearchInput({
      ...searchInput,
      [e.target.name]: e.target.value
    })
  }

  // Call api lấy thông tin thí sinh theo tiêu chí tìm kiếm
  const handleSearch = async () => {
    try {
      const response = await axios.post(`https://api.thanglele08.id.vn/Sport/timkiemtheduthi`, {
        sobaodanh: searchInput.sobaodanh.trim() === '' ? 0 : searchInput.sobaodanh.trim(),
        hovaten: searchInput.hovaten.trim() === '' ? null : searchInput.hovaten.trim(),
        sodienthoai: searchInput.sodienthoai.trim() === '' ? null : searchInput.sodienthoai.trim()
      });

      setFormData(response.data[0]);
    } catch (error) {
      if (error.response.status === 404) {
        alert("Không tìm thấy thông tin thí sinh!");
        setFormData(null);
      }
      else {
        alert("Đã có lỗi xảy ra!");
      }
    }
  };

  // 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  // Dang loi phia BE
  const handleModifyPersonalInfo = async () => {
    try {
      const [year, month, date] = formData.namsinh.split("-");
      await axios.post(`https://api.thanglele08.id.vn/Sport/dieuchinhthongtinthisinh`, {
        sobaodanh: 22,
        hovatenthisinh: formData.hovatenthisinh,
        hovatenphuhuynh: formData.hovatenphuhuynh,
        donvi: formData.donvi,
        lop: formData.lop,
        sodienthoai:formData.sodienthoai,
        namsinh: {
          year: year,
          month: month,
          day: date,
          dayOfWeek: ""
        },
        gioitinh: formData.gioitinh,
        isModify: true,
        email: formData.email
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  // Dieu chinh hang muc thi dau
  const handleModifyCategories = () => {
    
  }

  const handleModify = () => {
    if (formData) {
      if (formData.isModify) {
        setIsModify(true);
        return;
      }

      handleModifyPersonalInfo();
      handleModifyCategories();
    }
  }

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
              <div className='container border' id='search' style={{ padding: '20px 0 1px 0', margin: '0 auto' }}>
                <h4 className="text-center" style={{ marginBottom: '30px' }}>THÔNG TIN DỰ THI CỦA THÍ SINH</h4>
                {!isSearchByNameAndPhone && (
                  <div className="row justify-content-center mt-2">
                    <div className="col-auto" style={{ width: '48%', padding: 0 }}>
                      <input
                        type="text"
                        className="form-control"
                        name="sobaodanh"
                        placeholder="Nhập số báo danh cần tìm..."
                        style={{ borderColor: 'black', borderRadius: '8px 0 0 8px' }}
                        value={searchInput.sobaodanh}
                        onChange={(e) => handleChangeSearchInput(e)}
                      />
                    </div>
                    <div className="col-auto" style={{ padding: 0 }}>
                      <button
                        className="btn btn-primary"
                        style={{ borderRadius: '0 8px 8px 0', borderLeft: 'none' }}
                        onClick={handleSearch}
                      >Tra cứu</button>
                    </div>
                    <p className="text-center mt-2" style={{ marginBottom: '0', paddingBottom: '0' }}>Hoặc <a href="" onClick={(e) => changeSearchWay(e)}><b>Tìm theo tên và số điện thoại</b></a></p>
                  </div>
                )}

                {isSearchByNameAndPhone && (
                  <div>
                    <div className="row justify-content-center mt-2">
                      <input
                        type="text"
                        className="form-control"
                        name="hovaten"
                        placeholder="Nhập họ tên cần tìm..."
                        style={{ borderColor: 'black', borderRadius: '8px', width: '36%', marginRight: '5px' }}
                        value={searchInput.hovaten}
                        onChange={(e) => handleChangeSearchInput(e)}
                      />
                      <input
                        type="text"
                        className="form-control"
                        name="sodienthoai"
                        placeholder="Nhập số điện thoại cần tìm..."
                        style={{ borderColor: 'black', borderRadius: '8px', width: '36%', marginLeft: '5px' }}
                        value={searchInput.sodienthoai}
                        onChange={(e) => handleChangeSearchInput(e)}
                      />
                    </div>
                    <div className="row justify-content-center mt-2">
                      <button
                        className="btn btn-primary"
                        style={{ borderRadius: '8px', width: '100px', marginTop: '5px' }}
                        onClick={handleSearch}
                      >Tra cứu</button>
                    </div>
                    <p className="text-center mt-2" style={{ marginBottom: '0', paddingBottom: '0' }}>Hoặc <a href="" onClick={(e) => changeSearchWay(e)}><b>Tìm theo số báo danh</b></a></p>
                  </div>
                )};
                <p className="text-center mt-2">*Chưa có thông tin, nhấn <a href="#registerModal" data-bs-toggle="modal" data-bs-target="#registerModal"><b>Đăng ký</b></a></p>
                {formData && (
                  <div>
                    { isModify && <p style={{color: 'red'}}>*Bạn đã thay đổi thông tin trước đó và không thể thay đổi tiếp. Nếu cần, hãy liên hệ BTC!</p>}
                    <CandidateInforForm formData={formData} handleChange={handleChange} />
                  </div>
                )}
                {(formData && !isModify) && (
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