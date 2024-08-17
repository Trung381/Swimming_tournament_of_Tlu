import React from "react";

function Reward() {
  return(
    <>
      <div className="container mt-4">
        <div className="text-center mb-3">
          <h4 className="fw-bold">Kết quả đạt giải và khen thưởng</h4>
        </div>
    
        <div className="row mb-3">
          <div className="col-md-4">
            <label for="year" className="form-label">Năm</label>
            <select id="year" className="form-select">
              <option selected>Chọn năm</option>
              <option value="1">2023</option>
              <option value="2">2024</option>
            </select>
          </div>
          <div className="col-md-4">
            <label for="competition" className="form-label">Giải đấu</label>
            <select id="competition" className="form-select">
              <option selected>Chọn giải đấu</option>
              <option value="1">Giải A</option>
              <option value="2">Giải B</option>
            </select>
          </div>
          <div className="col-md-4">
            <label for="age-group" className="form-label">Hạng tuổi</label>
            <select id="age-group" className="form-select">
              <option selected>Chọn hạng tuổi</option>
              <option value="1">U18</option>
              <option value="2">U20</option>
            </select>
          </div>
        </div>    
        <h6 style={{color: '#000000', fontSize: '13px'}}><b>Bảng 50m đơn nam</b></h6>
        <div className="table-container border border-primary"> 
          <table className="table table-bordered text-center align-middle" style={{marginBottom: 0}}>
            <thead style={{position: 'sticky'}}>
              <tr className="table-primary">
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Số báo danh</th>
                <th>Tổng thời gian</th>
                <th>Xếp hạng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Nguyễn Văn A</td>
                <td>1</td>
                <td>12s</td>
                <td>Nhất</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Lê Văn B</td>
                <td>2</td>
                <td>56s</td>
                <td>Nhì</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Trần Văn C</td>
                <td>3</td>
                <td>120s</td>
                <td>Ba</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="text-end mt-3">
            <button className="btn btn-secondary">In giấy khen</button>
        </div>
      </div>

      <div className="footer mt-4">
        <p>© 2024 Đoàn thanh niên, Trường Đại học Thủy lợi</p>
      </div>
    </>
  );
}

export default Reward;