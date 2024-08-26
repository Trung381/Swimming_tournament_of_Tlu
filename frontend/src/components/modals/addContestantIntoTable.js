import React from "react";

function AddContestantIntoTable() {
  return(
    <>
      <div className="modal fade" id="addContestantIntoTableModal" tabIndex="-1" aria-labelledby="addParticipantModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addParticipantModalLabel">Thêm thí sinh vào bảng ...</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Tìm kiếm thí sinh"/>
                <button className="btn btn-primary">Tra cứu</button>
              </div>
              <table className="table table-bordered text-center">
                <thead>
                  <tr className="table-primary">
                    <th>Chọn</th>
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Số báo danh</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="checkbox"/></td>
                    <td>1</td>
                    <td>Nguyễn Văn A</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox"/></td>
                    <td>2</td>
                    <td>Lê Văn B</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox"/></td>
                    <td>3</td>
                    <td>Trần Văn C</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              <button type="button" className="btn btn-primary">Lưu</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddContestantIntoTable;