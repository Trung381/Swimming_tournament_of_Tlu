function InfoManagement() {
    return (
        <div>
            <div>
                <div className="container mt-4">
                    <h5 className="text-center">Quản lý thông tin thí sinh</h5>
                    <form className="mb-4">
                        <div className="row">
                            <div className="col-md-5">
                                <label htmlFor="year">Năm</label>
                                <select id="year" className="form-select">
                                    <option defaultValue>Chọn năm...</option>
                                    {/* Add options here */}
                                </select>
                            </div>
                            <div className="col-md-5">
                                <label htmlFor="ageGroup">Hạng tuổi</label>
                                <select id="ageGroup" className="form-select">
                                    <option defaultValue>Chọn hạng tuổi...</option>
                                    {/* Add options here */}
                                </select>
                            </div>
                            <div className="col-md-5">
                                <label htmlFor="competition">Giải đấu</label>
                                <select id="competition" className="form-select">
                                    <option defaultValue>Chọn giải đấu...</option>
                                    {/* Add options here */}
                                </select>
                            </div>
                            <div className="col-md-5">
                                <label htmlFor="category">Hạng mục</label>
                                <select id="category" className="form-select">
                                    <option defaultValue>Chọn hạng mục...</option>
                                    {/* Add options here */}
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="Id">Mã hay j đó</label>
                                <input type="text" id="Id" className="form-control" placeholder="Mã j đó đi"></input>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-12 text-end">
                                <button type="submit" className="btn btn-primary">Tra cứu</button>
                            </div>
                        </div>
                    </form>
                    <div className="card">
                        <div className="card-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <strong>Danh sách thí sinh tham gia giải</strong>
                            <button className="btn btn-sm btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target="#thongTinThiSinhModal">+</button>
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col"><input type="checkbox" /></th>
                                        <th scope="col">Tên thí sinh</th>
                                        <th scope="col" className="text-right">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>Thí sinh 1</td>
                                        <td className="text-right">
                                            <button className="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#thongTinThiSinhModal">Sửa</button>
                                            <button className="btn btn-sm btn-outline-danger">Xóa</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>Thí sinh 2</td>
                                        <td className="text-right">
                                            <button className="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#thongTinThiSinhModal">Sửa</button>
                                            <button className="btn btn-sm btn-outline-danger">Xóa</button>
                                        </td>
                                    </tr>
                                    {/* Repeat rows as needed */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button id="printButton" className="btn btn-outline-dark">In phiếu dự thi</button>
                    
                </div>
                {/* Modal */}
                {/* Thông tin thí sinh Modal */}
                {/* <div className="modal fade" id="thongTinThiSinhModal" tabIndex="-1" aria-labelledby="thongTinThiSinhModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="thongTinThiSinhModalLabel">Thông tin thí sinh - SBD: ...</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form id="thongTinThiSinhForm" >
                                    <div className="mb-3">
                                        <label htmlFor="hoTenThiSinh" className="form-label">1. Họ tên thí sinh</label>
                                        <input type="text" className="form-control" id="hoTenThiSinh" name="hoTenThiSinh" placeholder="Nhập họ tên thí sinh" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="soDinhDanh" className="form-label">2. Số định danh</label>
                                        <input type="text" className="form-control" id="soDinhDanh" name="soDinhDanh" placeholder="Nhập số định danh" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">3. Email</label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Nhập email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="namSinh" className="form-label">4. Năm sinh</label>
                                        <input type="text" className="form-control" id="namSinh" name="namSinh" placeholder="Nhập năm sinh" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">5. Giới tính</label><br />
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gioiTinh" id="gioiTinhNam" value="Nam" />
                                            <label className="form-check-label" htmlFor="gioiTinhNam">Nam</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gioiTinh" id="gioiTinhNu" value="Nữ" />
                                            <label className="form-check-label" htmlFor="gioiTinhNu">Nữ</label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="hoTenPhuHuynh" className="form-label">6. Họ tên phụ huynh</label>
                                        <input type="text" className="form-control" id="hoTenPhuHuynh" name="hoTenPhuHuynh" placeholder="Nhập họ tên phụ huynh" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="donVi" className="form-label">7. Đơn vị</label>
                                        <select id="donVi" className="form-control" name="donVi" >
                                            <option selected>Chọn đơn vị...</option>
                                            
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lop" className="form-label">8. Lớp</label>
                                        <input type="text" className="form-control" id="lop" name="lop" placeholder="Nhập lớp" />
                                    </div>
                                    <hr />
                                    <h6>II. Nội dung thi đấu</h6>
                                    <div className="mb-3">
                                        <label htmlFor="hangMuc" className="form-label">1. Hạng mục</label><br />
                                        
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="hangMuc1" name="hangMuc1" />
                                            <label className="form-check-label" htmlFor="hangMuc1">Hạng mục 1</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="hangMuc2" name="hangMuc2" />
                                            <label className="form-check-label" htmlFor="hangMuc2">Hạng mục 2</label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="hangTuoi" className="form-label">2. Hạng tuổi</label>
                                        <select id="hangTuoi" className="form-control" name="hangTuoi" >
                                            <option selected>Chọn hạng tuổi...</option>
                                            
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Lưu</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="modal fade" id="thongTinThiSinhModal" tabIndex="-1" aria-labelledby="thongTinThiSinhModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="thongTinThiSinhModalLabel">Thông tin thí sinh - SBD: ...</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form id="thongTinThiSinhForm">
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="hoTenThiSinh" className="form-label">1. Họ tên thí sinh</label>
                                            <input type="text" className="form-control" id="hoTenThiSinh" name="hoTenThiSinh" placeholder="Nhập họ tên thí sinh" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="soDinhDanh" className="form-label">2. Số định danh</label>
                                            <input type="text" className="form-control" id="soDinhDanh" name="soDinhDanh" placeholder="Nhập số định danh" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="email" className="form-label">3. Email</label>
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Nhập email" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="namSinh" className="form-label">4. Năm sinh</label>
                                            <input type="text" className="form-control" id="namSinh" name="namSinh" placeholder="Nhập năm sinh" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">5. Giới tính</label><br />
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gioiTinh" id="gioiTinhNam" value="Nam" />
                                            <label className="form-check-label" htmlFor="gioiTinhNam">Nam</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gioiTinh" id="gioiTinhNu" value="Nữ" />
                                            <label className="form-check-label" htmlFor="gioiTinhNu">Nữ</label>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="hoTenPhuHuynh" className="form-label">6. Họ tên phụ huynh</label>
                                            <input type="text" className="form-control" id="hoTenPhuHuynh" name="hoTenPhuHuynh" placeholder="Nhập họ tên phụ huynh" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="donVi" className="form-label">7. Đơn vị</label>
                                            <select id="donVi" className="form-control" name="donVi">
                                                <option selected>Chọn đơn vị...</option>
                                                {/* Add options here */}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="lop" className="form-label">8. Lớp</label>
                                            <input type="text" className="form-control" id="lop" name="lop" placeholder="Nhập lớp" />
                                        </div>
                                    </div>
                                    <hr />
                                    <h6>II. Nội dung thi đấu</h6>
                                    <div className="mb-3">
                                        <label htmlFor="hangMuc" className="form-label">1. Hạng mục</label><br />
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="hangMuc1" name="hangMuc1" />
                                            <label className="form-check-label" htmlFor="hangMuc1">Hạng mục 1</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="hangMuc2" name="hangMuc2" />
                                            <label className="form-check-label" htmlFor="hangMuc2">Hạng mục 2</label>
                                        </div>
                                    </div>
                                    <div className="mb-1 row">
                                        <div className="col-md-6">
                                            <label htmlFor="hangTuoi" className="form-label">2. Hạng tuổi</label>
                                            <select id="hangTuoi" className="form-control" name="hangTuoi">
                                                <option selected>Chọn hạng tuổi...</option>
                                                {/* Add options here */}
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Lưu</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default InfoManagement;