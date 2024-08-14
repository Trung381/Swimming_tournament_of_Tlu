import React from 'react';

function CandidateInforForm() {
  return (
    // <div className="container border p-3 mt-3" style={{ maxWidth: 900, borderColor: '#2b80ff' }}>
    <div className="container mt-3" style={{ maxWidth: 900 }}>
      <form className="mt-4" >
        <div className='row' >
          <div className='col-md-4'>
            <h5>I. Thông tin cá nhân</h5>
          </div>
        </div>
        <div className='row' style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <div className="form-group">
            <label htmlFor="formName"><h6>1. Họ tên thí sinh</h6></label>
            <input type="text" className="form-control" id="formName" style={{borderColor: 'black'}}/>
          </div>
          <div className="form-group">
            <label htmlFor="formIdNumber"><h6>2. Số định danh</h6></label>
            <input type="text" className="form-control" id="formIdNumber" />
          </div>
          <div className="form-group">
            <label htmlFor="formEmail"><h6>3. Email</h6></label>
            <input type="email" className="form-control" id="formEmail" />
          </div>
          <div className="form-group">
            <label htmlFor="formBirthYear"><h6>4. Năm sinh</h6></label>
            <select className="form-control" id="formBirthYear">
              <option>2005</option>
              <option>2006</option>
              <option>2007</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor="formGender"><h6>5. Giới tính</h6></label>
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
            <label htmlFor="formParentName"><h6>6. Họ tên phụ huynh</h6></label>
            <input type="text" className="form-control" id="formParentName" />
          </div>
          <div className="form-group">
            <label htmlFor="formUnit"><h6>7. Đơn vị</h6></label>
            <select className="form-control" id="formUnit">
              <option>Khoa CNTT</option>
              <option>TT Đào tạo quốc tế</option>
              <option>Khoa KT và QL</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="formClass"><h6>8. Lớp</h6></label>
            <select className="form-control" id="formClass">
              <option>64CNTT</option>
              <option>64CNTT</option>
              <option>64CNTT</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4'>
            <h5>II. Nội dung thi đấu</h5>
          </div>
        </div>
        <div className='row' style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <div className="form-group">
            <label><h6>1. Hạng mục</h6></label>
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
            </div>
          </div>
          <div className="form-group">
            <label><h6>2. Hạng tuổi</h6></label>
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
      </form>
    </div>
  );
};

export default CandidateInforForm;
