import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';
import CandidateInforForm from '../welcome/candidateInforForm';
import SearchByNameAndPhone from '../searches/SearchByNameAndPhone';
import SearchByRegistrationNumber from '../searches/SearchByRegistrationNumber';
import { useSearch } from '../../services/searchInfo';
import { useModify } from '../../services/modifyInfo';
import ReactDOMServer from 'react-dom/server';

const ContestantCard = React.forwardRef(({ contestant }, ref) => {
  console.log(contestant.hangmucthidau);
  return (
    <div ref={ref} 
    style={{
      width: '210mm',
      height: '100mm',
      padding: '10px',
      border: '1px solid #000',
      // marginTop: '1px',    // Margin at the top
      // marginRight: '1px',  // Margin on the right
      // marginLeft: '1px',   // Margin on the left
      boxSizing: 'border-box'
      }}>
      <h4>Số báo danh: {contestant.sobaodanh}</h4>
      <p><strong>Họ và tên:</strong> {contestant.hovatenthisinh}</p>
      <p><strong>Đơn vị:</strong> {contestant.donvi}</p>
      <p><strong>Lớp:</strong> {contestant.lop || ""}</p>
      <p><strong>Họ và tên phụ huynh:</strong> {contestant.hovatenphuhuynh}</p>
      <div className="table-responsive" style={{ overflowX: "auto", maxHeight: "1000px" }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Hạng mục</th>
              <th scope="col">Hạng tuổi</th>
              <th scope="col">Phút</th>
              <th scope="col">Giây</th>
              <th scope="col">Tíc tắc</th>
            </tr>
          </thead>
          <tbody>
                  {contestant.hangmucthidau.map((contestan, index) => (
                    <tr key={contestan.id}>
                      <td>{index + 1}</td>
                      <td>{contestan.tenhangmuc}</td>
                      <td>{contestan.hangtuoi}</td>
                      <td>........</td>
                      <td>........</td>
                      <td>........</td>
                    </tr>
                  ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

function InfoManagement(props) {
  const { search, formData, reset, searchInput, isSearchByNameAndPhone, setSearchInput, handleChange, changeSearchWay, deleteList, addList } = useSearch();
  const { modify } = useModify();
  const [contestants, setContestants] = useState([]);
  const [currentId, setCurrentId] = useState('...');
  const [currentContestant, setCurrentContestant] = useState(null);
  const cardRef = useRef();

  const fetchAllContestantCards = async () => {
    try {
      const response = await axios.get('https://api.thanglele08.id.vn/Sport/xemtheduthiall', {
        headers: {
          Accept: '*/*',
          Authorization: sessionStorage.getItem('token')
        }
      });
      return response.data;
    } catch (error) {
      console.error("Lỗi khi lấy thông tin thẻ dự thi:", error);
      return [];
    }
  };

  

  const handleChangeSearchInput = (e) => {
    setSearchInput({
      ...searchInput,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = async () => {
    props.loading(true);
    try {
      const response = await axios.post(`https://api.thanglele08.id.vn/Sport/thongtinthisinh`, {
        sobaodanh: searchInput.sobaodanh.trim() === '' ? 0 : searchInput.sobaodanh.trim(),
        hovaten: searchInput.hovaten.trim() === '' ? null : searchInput.hovaten.trim(),
        sodienthoai: searchInput.sodienthoai.trim() === '' ? null : searchInput.sodienthoai.trim()
      });

      setContestants([response.data]);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Không tìm thấy thí sinh!");
        fetchContestants();
      } else {
        alert("Đã có lỗi xảy ra!");
      }
    }
    finally {
      props.loading(false);
    }
  };

  const fetchContestantToPrint = async (id) => {
    try {
      const response = await axios.post('https://api.thanglele08.id.vn/Sport/timkiemtheduthi', { sobaodanh: id });
      setCurrentContestant(response.data);
    } catch (error) {
      console.error("Có lỗi xảy ra:", error);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => cardRef.current,
    documentTitle: `Contestant_${currentContestant?.sobaodanh}_Card`,
  });

  const printAllCards = async () => {
    const allContestants = await fetchAllContestantCards();
    if (allContestants.length === 0) {
      alert("Không có thẻ dự thi nào để in.");
      return;
    }
  
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>In tất cả thẻ dự thi</title></head><body>');
  
    allContestants.forEach(contestant => {
      printWindow.document.write(`
        <div style="page-break-after: always;">
          ${ReactDOMServer.renderToString(<ContestantCard contestant={contestant} />)}
        </div>
      `);
    });
  
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  useEffect(() => {
    if (currentContestant) {
      handlePrint();
    }
  }, [currentContestant]);

  const fetchInfoById = async (id) => {
    search(null, id);
  };

  const clickEditInfo = (id) => {
    fetchInfoById(id);
    setCurrentId(id);
  };

  const fetchContestants = async () => {
    try {
      const response = await axios.get('https://api.thanglele08.id.vn/Sport/xemthongtinthisinhall', {
        headers: {
          Accept: '*/*',
          Authorization: sessionStorage.getItem('token')
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
    const loading = props.loading;
    modify({formData, deleteList, addList, loading});
    props.newState('Success modify')
  };

  const log = () => {
    console.log(addList);
    console.log(deleteList);
  };

  return (
    <>
      <div className="contestant-container mt-3">
        <h5 className="text-center">Quản lý thông tin thí sinh</h5>
        <div className='w-50' style={{ margin: '20px auto' }}>
          {!isSearchByNameAndPhone
            && <SearchByRegistrationNumber searchInput={searchInput} changeSearchInput={handleChangeSearchInput} changeSearchWay={changeSearchWay} search={handleSearch} />}
          {isSearchByNameAndPhone
            && <SearchByNameAndPhone searchInput={searchInput} changeSearchInput={handleChangeSearchInput} changeSearchWay={changeSearchWay} search={handleSearch} />}
        </div>
        <div className="card">
          <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong>Danh sách thí sinh tham gia giải</strong>
            <button
            className="btn btn-primary mt-3"
            onClick={printAllCards}
          >
            In tất cả thẻ dự thi
          </button>
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
                    {/* <th scope="col"><input type="checkbox" /></th> */}
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
                    <th scope="col" className="text-right">In thẻ</th>
                  </tr>
                </thead>
                <tbody>
                  {contestants.map((contestant, index) => (
                    <tr key={contestant.sobaodanh}>
                      {/* <td><input type="checkbox" /></td> */}
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
                      <td className="text-right">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => fetchContestantToPrint(contestant.sobaodanh)}
                        >
                          In thẻ
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <button id="printButton" className="btn btn-outline-dark">In phiếu dự thi</button> */}
      </div>
      <div className="modal fade" id="thongTinThiSinhModal" tabIndex="-1" aria-labelledby="thongTinThiSinhModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="thongTinThiSinhModalLabel"><b>Thông tin thí sinh - SBD: {currentId}</b></h6>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => reset()}></button>
            </div>
            <div className="modal-body">
              {formData && <CandidateInforForm formData={formData} handleChange={handleChange} />}
            </div>
            <div className='modal-footer'>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>Đóng</button>
              <button type="button" className="btn btn-primary" onClick={() => {handleModify(); log()}}>Lưu</button>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden printable component */}
      {currentContestant && (
        <div style={{ display: 'none' }}>
          <ContestantCard ref={cardRef} contestant={currentContestant} />
        </div>
      )}
    </>
  );
}

export default InfoManagement;
