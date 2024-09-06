import { React, useEffect, useState } from 'react';
import axios from 'axios';
import CandidateInforForm from '../welcome/candidateInforForm';
import SearchByNameAndPhone from '../searches/SearchByNameAndPhone';
import SearchByRegistrationNumber from '../searches/SearchByRegistrationNumber';
import { useSearch } from '../../services/searchInfo';
import { useModify } from '../../services/modifyInfo';

function InfoManagement(props) {
  const { search, formData, searchInput, isSearchByNameAndPhone, setSearchInput, handleChange, changeSearchWay, deleteList, addList } = useSearch();
  const { modify } = useModify();
  const [contestants, setContestants] = useState([]);
  const [currentId, setCurrentId] = useState('...');

  const handleChangeSearchInput = (e) => {
    setSearchInput({
      ...searchInput,
      [e.target.name]: e.target.value
    })
  };

  // Tim thong tin ca nhan cua thi sinh
  const handleSearch = async () => {
    try {
      const response = await axios.post(`https://api.thanglele08.id.vn/Sport/thongtinthisinh`, {
        sobaodanh: searchInput.sobaodanh.trim() === '' ? 0 : searchInput.sobaodanh.trim(),
        hovaten: searchInput.hovaten.trim() === '' ? null : searchInput.hovaten.trim(),
        sodienthoai: searchInput.sodienthoai.trim() === '' ? null : searchInput.sodienthoai.trim()
      });

      setContestants([response.data]);
    }
    catch (error) {
      if (error.response.status === 404) {
        alert("Không tìm thấy thí sinh!");
        fetchContestants();
      }
      else {
        alert("Đã có lỗi xảy ra!");
      }
    }
  };

  const fetchInfoById = async (id) => {
    search(id);
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

  const handleModify = () => {
    modify({formData, addList, deleteList});
  };

  const log = () => {
    console.log(addList);
    console.log(deleteList);
  }

  return (
    <>
      <div className="contestant-container mt-3">
        <h5 className="text-center">Quản lý thông tin thí sinh</h5>
        <div className='w-50' style={{margin: '20px auto'}}>
          {!isSearchByNameAndPhone
            && <SearchByRegistrationNumber searchInput={searchInput} changeSearchInput={handleChangeSearchInput} changeSearchWay={changeSearchWay} search={handleSearch} />}
          {isSearchByNameAndPhone
            && <SearchByNameAndPhone searchInput={searchInput} changeSearchInput={handleChangeSearchInput} changeSearchWay={changeSearchWay} search={handleSearch} />}
        </div>
        <div className="card">
          <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong>Danh sách thí sinh tham gia giải</strong>
            <button
              className="btn btn-sm btn-outline-primary float-right"
              data-bs-toggle="modal" data-bs-target="#thongTinThiSinhModal"
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
                    <tr key={contestant.sobaodanh}>
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
              <h6 className="modal-title" id="thongTinThiSinhModalLabel"><b>Thông tin thí sinh - SBD: {currentId}</b></h6>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {formData && <CandidateInforForm formData={formData} handleChange={handleChange} />}
            </div>
            <div className='modal-footer'>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              <button type="button" className="btn btn-primary" onClick={() => {handleModify(); log()}}>Lưu</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoManagement;