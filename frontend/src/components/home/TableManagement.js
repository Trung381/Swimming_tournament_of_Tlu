import React from "react";

function TableManagement() {
  return(
    <>
      <div class="container mt-4">
        <div class="text-center mb-3">
          <h4 class="fw-bold">Quản lý bảng đấu</h4>
        </div>
    
        <div class="row mb-3">
          <div class="col-md-4">
            <label for="year" class="form-label">Năm</label>
            <select id="year" class="form-select">
              <option selected>Chọn năm</option>
              <option value="1">2023</option>
              <option value="2">2024</option>
            </select>
          </div>
          <div class="col-md-4">
            <label for="competition" class="form-label">Giải đấu</label>
            <select id="competition" class="form-select">
              <option selected>Chọn giải đấu</option>
              <option value="1">Giải A</option>
              <option value="2">Giải B</option>
            </select>
          </div>
          <div class="col-md-4">
            <label for="age-group" class="form-label">Hạng tuổi</label>
            <select id="age-group" class="form-select">
              <option selected>Chọn hạng tuổi</option>
              <option value="1">U18</option>
              <option value="2">U20</option>
            </select>
          </div>
        </div>
    
        <div class="new-board-btn text-center mb-3">
          <button class="btn btn-link">➕ Bảng mới</button>
        </div>

        
        <div class="board">
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div class="board-header">Bảng: Nhập tên bảng</div>
              <div class="d-flex justify-content-between mb-2">
                <button class="btn btn-outline-danger">Xóa bảng</button>
                <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#addContestantIntoTableModal">Thêm thí sinh</button>
              </div>
            </div>
          </div>

        <div class="board">
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div class="board-header">Bảng: 50m đơn nam</div>
            <div class="d-flex justify-content-between mb-2">
              <button class="btn btn-outline-danger">Xóa bảng</button>
              <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#addContestantIntoTableModal">Thêm thí sinh</button>
            </div>
          </div>
          <table class="table table-bordered text-center">
            <thead>
              <tr class="table-primary">
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Số báo danh</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Nguyễn Văn A</td>
                <td>1</td>
                <td><button class="btn btn-outline-danger btn-sm">Xóa</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TableManagement;