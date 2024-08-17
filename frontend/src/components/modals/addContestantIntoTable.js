import React from "react";

function AddContestantIntoTable() {
  return(
    <>
      <div class="modal fade" id="addContestantIntoTableModal" tabindex="-1" aria-labelledby="addParticipantModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addParticipantModalLabel">Thêm thí sinh vào bảng ...</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Tìm kiếm thí sinh"/>
                <button class="btn btn-primary">Tra cứu</button>
              </div>
              <table class="table table-bordered text-center">
                <thead>
                  <tr class="table-primary">
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
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              <button type="button" class="btn btn-primary">Lưu</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddContestantIntoTable;