import React from 'react';

const CandidateInfoForm = () => {
  return (
    <div className="container border p-3 mt-3" style={{ maxWidth: 900, borderColor: '#2b80ff' }}>
      <h4 className="text-center">Tra cứu thông tin dự thi của thí sinh</h4>
      <div className="row justify-content-center mt-2">
        <div className="col-auto">
          <input type="text" className="form-control" placeholder="Nhập thông tin" />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary">Tra cứu</button>
        </div>
      </div>
      <p className="text-center mt-2">
        *Chưa có thông tin, nhấn <a href="#">Đăng ký</a>
      </p>
      <form className="mt-4">
        <div className="row">
          <div className="col-md-4">
            <h5>I. Thông tin cá nhân</h5>
            <div className="form-group">
              <label htmlFor="formName">1. Họ tên thí sinh</label>
              <input type="text" className="form-control" id="formName" />
            </div>
            <div className="form-group">
              <label htmlFor="formIdNumber">2. Số định danh</label>
              <input type="text" className="form-control" id="formIdNumber" />
            </div>
            <div className="form-group">
              <label htmlFor="formEmail">3. Email</label>
              <input type="email" className="form-control" id="formEmail" />
            </div>
            <div className="form-group">
              <label htmlFor="formBirthYear">4. Năm sinh</label>
              <select className="form-control" id="formBirthYear">
                <option>2005</option>
                <option>2006</option>
                <option>2007</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="formGender">5. Giới tính</label>
              <div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="male" />
                  <label className="form-check-label" htmlFor="male">Nam</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="female" />
                  <label className="form-check-label" htmlFor="female">Nữ</label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="formClass">8. Lớp</label>
              <input type="text" className="form-control" id="formClass" />
            </div>
            <div className="form-group">
              <label htmlFor="formParentName">6. Họ tên phụ huynh</label>
              <input type="text" className="form-control" id="formParentName" />
            </div>
          </div>
          <div className="col-md-4">
            <h5>II. Nội dung thi đấu</h5>
            <div className="form-group">
              <label>1. Hạng mục</label>
              <div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="category1" />
                  <label className="form-check-label" htmlFor="category1">Hạng mục 1</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="category2" />
                  <label className="form-check-label" htmlFor="category2">Hạng mục 2</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="category3" />
                  <label className="form-check-label" htmlFor="category3">Hạng mục 3</label>
                </div>
                {'{'}/* Add more checkboxes as needed  */{'}'}
              </div>
            </div>
            <div className="form-group">
              <label>2. Hạng tuổi</label>
              <div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="ageGroup" id="ageGroup1" />
                  <label className="form-check-label" htmlFor="ageGroup1">0 - 8 tuổi</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="ageGroup" id="ageGroup2" />
                  <label className="form-check-label" htmlFor="ageGroup2">9 - 12 tuổi</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="ageGroup" id="ageGroup3" />
                  <label className="form-check-label" htmlFor="ageGroup3">13 - 15 tuổi</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="ageGroup" id="ageGroup4" />
                  <label className="form-check-label" htmlFor="ageGroup4">16 - 18 tuổi</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-end mt-3">
          <div className="col-auto">
            <button className="btn btn-primary">Yêu cầu thay đổi thông tin</button>
          </div>
        </div>
      </form>
    </div>


  );
};

export default CandidateInfoForm;
