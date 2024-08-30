import { React, useEffect, useState } from 'react';
import axios from 'axios';
import CandidateInforForm from '../welcome/candidateInforForm';

function InfoManagement() {
  const [contestants, setContestants] = useState([]);
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
  const [currentId, setCurrentId] = useState('...')

  const fetchInfoById = async (id) => {
    try {
      const response = await axios.post('https://api.thanglele08.id.vn/Sport/timkiemtheduthi', {
        sobaodanh: id,
        hovaten: null,
        sodienthoai: null
      });

      setFormData(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const clickEditInfo = (id) => {
    fetchInfoById(id);
    setCurrentId(id);
  };

  const token = sessionStorage.getItem('token');

  const fetchContestants = async () => {
    try {
      const response = await axios.get('https://api.thanglele08.id.vn/Sport/xemthongtinthisinhall', {
        headers: {
          Accept: '*/*',
          // Authorization: '77a1d381b74d503edf3c18b33de1d3031bc73056f09a870a74d75d5d396bba52'
          Authorization: token
        }
      });

      setContestants(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContestants();
  }, []);

  const resetForm = () => {
    setFormData({
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

    setCurrentId('...')
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div className="contestant-container mt-3">
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
              <label htmlFor="Id">Số báo danh</label>
              <input type="text" id="Id" className="form-control" placeholder="Nhập số báo danh..."></input>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-12 text-end">
              <button type="submit" className="btn btn-primary">Tra cứu</button>
            </div>
          </div>
        </form>
        <div className="card">
          <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong>Danh sách thí sinh tham gia giải</strong>
            <button
              className="btn btn-sm btn-outline-primary float-right"
              data-bs-toggle="modal" data-bs-target="#thongTinThiSinhModal"
              onClick={() => resetForm()}
            >+</button>
          </div>
          <div className="card-body">
            <div className="table-responsive" style={{ overflowX: "auto", maxHeight: "1000px" }}>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col"><input type="checkbox" /></th>
                    <th scope="col">STT</th>
                    <th scope="col">SBD</th>
                    <th scope="col">Họ tên thí sinh</th>
                    <th scope="col">Email</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Ngày sinh</th>
                    <th scope="col">Giới tính</th>
                    <th scope="col">Họ tên phụ huynh</th>
                    <th scope="col">Đơn vị</th>
                    <th scope="col">Lớp</th>
                    <th scope="col" className="text-right">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {contestants.map((contestant, index) => (
                    <tr key={contestant.id}>
                      <td><input type="checkbox" /></td>
                      <td>{index + 1}</td>
                      <td>{contestant.sobaodanh}</td>
                      <td>{contestant.hovatenthisinh}</td>
                      <td>{contestant.email}</td>
                      <td>{contestant.sodienthoai}</td>
                      <td>{contestant.namsinh}</td>
                      <td>{contestant.gioitinh}</td>
                      <td>{contestant.hovatenphuhuynh}</td>
                      <td>{contestant.donvi}</td>
                      <td>{contestant.lop}</td>
                      <td className="text-right">
                        <button className="btn btn-sm btn-outline-secondary"
                          data-bs-toggle="modal" data-bs-target="#thongTinThiSinhModal"
                          onClick={() => clickEditInfo(contestant.sobaodanh)}
                        >Sửa</button>
                        <button className="btn btn-sm btn-outline-danger">Xóa</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button id="printButton" className="btn btn-outline-dark">In phiếu dự thi</button>
      </div>
      <div className="modal fade" id="thongTinThiSinhModal" tabIndex="-1" aria-labelledby="thongTinThiSinhModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="thongTinThiSinhModalLabel">Thông tin thí sinh - SBD: {currentId}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <CandidateInforForm formData={formData} handleChange={handleChange} />
            </div>
            <div className='modal-footer'>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              <button type="submit" className="btn btn-primary">Lưu</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoManagement;