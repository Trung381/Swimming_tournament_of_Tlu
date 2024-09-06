// import { React, useEffect, useState } from 'react';
// import axios from 'axios';
// import CandidateInforForm from '../welcome/candidateInforForm';
// import SearchByNameAndPhone from '../searches/SearchByNameAndPhone';
// import SearchByRegistrationNumber from '../searches/SearchByRegistrationNumber';
// import { useSearch } from '../../services/searchInfo';
// import { modify } from '../../services/modifyInfo';

// function InfoManagement() {
//   const { search, formData, searchInput, isSearchByNameAndPhone, setSearchInput, handleChange, changeSearchWay } = useSearch();
//   const [contestants, setContestants] = useState([]);
//   const [currentId, setCurrentId] = useState('...');
//   const [oldCategories, setOldCategories] = useState([]);

//   const handleChangeSearchInput = (e) => {
//     setSearchInput({
//       ...searchInput,
//       [e.target.name]: e.target.value
//     })
//   };

//   // Tim thong tin ca nhan cua thi sinh
//   const handleSearch = async () => {
//     try {
//       const response = await axios.post(`https://api.thanglele08.id.vn/Sport/thongtinthisinh`, {
//         sobaodanh: searchInput.sobaodanh.trim() === '' ? 0 : searchInput.sobaodanh.trim(),
//         hovaten: searchInput.hovaten.trim() === '' ? null : searchInput.hovaten.trim(),
//         sodienthoai: searchInput.sodienthoai.trim() === '' ? null : searchInput.sodienthoai.trim()
//       });

//       setContestants([response.data]);
//     }
//     catch (error) {
//       if (error.response.status === 404) {
//         alert("Không tìm thấy thí sinh!");
//         fetchContestants();
//       }
//       else {
//         alert("Đã có lỗi xảy ra!");
//       }
//     }
//   };

//   const fetchInfoById = async (id) => {
//     search(setOldCategories, id);
//   };

//   const clickEditInfo = (id) => {
//     fetchInfoById(id);
//     setCurrentId(id);
//   };

//   const token = sessionStorage.getItem('token');

//   const fetchContestants = async () => {
//     try {
//       const response = await axios.get('https://api.thanglele08.id.vn/Sport/xemthongtinthisinhall', {
//         headers: {
//           Accept: '*/*',
//           // Authorization: '77a1d381b74d503edf3c18b33de1d3031bc73056f09a870a74d75d5d396bba52'
//           Authorization: token
//         }
//       });

//       setContestants(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchContestants();
//   }, []);

//   const handleModify = () => {
//     modify({formData, oldCategories});
//   }

//   return (
//     <>
//       <div className="contestant-container mt-3">
//         <h5 className="text-center">Quản lý thông tin thí sinh</h5>
//         <div className='w-50' style={{margin: '20px auto'}}>
//           {!isSearchByNameAndPhone
//             && <SearchByRegistrationNumber searchInput={searchInput} changeSearchInput={handleChangeSearchInput} changeSearchWay={changeSearchWay} search={handleSearch} />}
//           {isSearchByNameAndPhone
//             && <SearchByNameAndPhone searchInput={searchInput} changeSearchInput={handleChangeSearchInput} changeSearchWay={changeSearchWay} search={handleSearch} />}
//         </div>
//         <div className="card">
//           <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <strong>Danh sách thí sinh tham gia giải</strong>
//             <button
//               className="btn btn-sm btn-outline-primary float-right"
//               data-bs-toggle="modal" data-bs-target="#thongTinThiSinhModal"
//             >+</button>
//           </div>
//           <div className="card-body">
//             <div className="table-responsive" style={{ overflowX: "auto", maxHeight: "1000px" }}>

//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th scope="col"><input type="checkbox" /></th>
//                     <th scope="col">STT</th>
//                     <th scope="col">SBD</th>
//                     <th scope="col">Họ tên thí sinh</th>
//                     <th scope="col">Email</th>
//                     <th scope="col">Số điện thoại</th>
//                     <th scope="col">Ngày sinh</th>
//                     <th scope="col">Giới tính</th>
//                     <th scope="col">Họ tên phụ huynh</th>
//                     <th scope="col">Đơn vị</th>
//                     <th scope="col">Lớp</th>
//                     <th scope="col" className="text-right">Hành động</th>
//                     <th scope="col" className="text-right">In thẻ</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {contestants.map((contestant, index) => (
//                     <tr key={contestant.id}>
//                       <td><input type="checkbox" /></td>
//                       <td>{index + 1}</td>
//                       <td>{contestant.sobaodanh}</td>
//                       <td>{contestant.hovatenthisinh}</td>
//                       <td>{contestant.email}</td>
//                       <td>{contestant.sodienthoai}</td>
//                       <td>{contestant.namsinh}</td>
//                       <td>{contestant.gioitinh}</td>
//                       <td>{contestant.hovatenphuhuynh}</td>
//                       <td>{contestant.donvi}</td>
//                       <td>{contestant.lop}</td>
//                       <td className="text-right">
//                         <button className="btn btn-sm btn-outline-secondary"
//                           data-bs-toggle="modal" data-bs-target="#thongTinThiSinhModal"
//                           onClick={() => clickEditInfo(contestant.sobaodanh)}
//                         >Sửa</button>
//                         <button className="btn btn-sm btn-outline-danger">Xóa</button>
//                       </td>
//                       <td className="text-right">
//                         <button className="btn btn-sm btn-outline-primary">In thẻ</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//         <button id="printButton" className="btn btn-outline-dark">In phiếu dự thi</button>
//       </div>
//       <div className="modal fade" id="thongTinThiSinhModal" tabIndex="-1" aria-labelledby="thongTinThiSinhModalLabel" aria-hidden="true">
//         <div className="modal-dialog modal-lg">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h6 className="modal-title" id="thongTinThiSinhModalLabel"><b>Thông tin thí sinh - SBD: {currentId}</b></h6>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               {formData && <CandidateInforForm formData={formData} handleChange={handleChange} />}
//             </div>
//             <div className='modal-footer'>
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
//               <button type="button" className="btn btn-primary" onClick={() => handleModify()}>Lưu</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default InfoManagement;





// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import { useReactToPrint } from 'react-to-print';
// import CandidateInforForm from '../welcome/candidateInforForm';
// import SearchByNameAndPhone from '../searches/SearchByNameAndPhone';
// import SearchByRegistrationNumber from '../searches/SearchByRegistrationNumber';
// import { useSearch } from '../../services/searchInfo';
// import { modify } from '../../services/modifyInfo';

// const ContestantCard = React.forwardRef(({ contestant }, ref) => {
//   return (
//     <div ref={ref} style={{ width: '240px', height: '360px', padding: '10px', border: '1px solid #000', boxSizing: 'border-box' }}>
//       <h4>SBD: {contestant.sobaodanh}</h4>
//       <p><strong>Tên:</strong> {contestant.hovatenthisinh}</p>
//       <p><strong>Đơn vị:</strong> {contestant.donvi}</p>
//       <p><strong>Lớp:</strong> {contestant.lop || "N/A"}</p>
//       {/* <p><strong>Hạng mục thi:</strong> [Hạng mục thi]</p> */}
//       <p><strong>Tên phụ huynh:</strong> {contestant.hovatenphuhuynh}</p>
//       {/* <p><strong>Kết quả:</strong> ______________________</p> */}
//       <p>
//       <div className="table-responsive" style={{ overflowX: "auto", maxHeight: "1000px" }}>
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th scope="col">STT</th>
//                     <th scope="col">Hạng mục</th>
//                     <th scope="col">Điểm</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {/* {contestants.map((contestant, index) => (
//                     <tr key={contestant.id}>
//                       <td>{index + 1}</td>
//                       <td>{contestant.sobaodanh}</td>
//                       <td></td>
//                     </tr>
//                   ))} */}
//                 </tbody>
//               </table>
//             </div>
//       </p>
//     </div>
//   );
// });

// function InfoManagement() {
//   const { search, formData, searchInput, isSearchByNameAndPhone, setSearchInput, handleChange, changeSearchWay } = useSearch();
//   const [contestants, setContestants] = useState([]);
//   const [currentId, setCurrentId] = useState('...');
//   const [oldCategories, setOldCategories] = useState([]);
//   const [currentContestant, setCurrentContestant] = useState('...');
//   const cardRef = useRef();

//   const handleChangeSearchInput = (e) => {
//     setSearchInput({
//       ...searchInput,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Tim thong tin ca nhan cua thi sinh
//   const handleSearch = async () => {
//     try {
//       const response = await axios.post(`https://api.thanglele08.id.vn/Sport/thongtinthisinh`, {
//         sobaodanh: searchInput.sobaodanh.trim() === '' ? 0 : searchInput.sobaodanh.trim(),
//         hovaten: searchInput.hovaten.trim() === '' ? null : searchInput.hovaten.trim(),
//         sodienthoai: searchInput.sodienthoai.trim() === '' ? null : searchInput.sodienthoai.trim()
//       });

//       setContestants([response.data]);
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         alert("Không tìm thấy thí sinh!");
//         fetchContestants();
//       } else {
//         alert("Đã có lỗi xảy ra!");
//       }
//     }
//   };





//   const fetchContestantToPrint = async (id) => {
//     try {
//       // setCurrentContestant('...');
//       const response = await axios.post('https://api.thanglele08.id.vn/Sport/timkiemtheduthi', { sobaodanh: id });
//       setCurrentContestant(response.data);
//       // Đợi cho currentContestant cập nhật xong trước khi in
//       // handlePrint();
//       // setCurrentContestant('...');
//     } catch (error) {
//       console.error("Có lỗi xảy ra:", error);
//     }
//   };
  
//   const handlePrint = useReactToPrint({
//     content: () => cardRef.current,
//     documentTitle: `Contestant_${currentContestant.sobaodanh}_Card`,
//   });

//   const fetchInfoById = async (id) => {
//     search(setOldCategories, id);
//   };

//   const clickEditInfo = (id) => {
//     fetchInfoById(id);
//     setCurrentId(id);
//   };

//   const token = sessionStorage.getItem('token');

//   const fetchContestants = async () => {
//     try {
//       const response = await axios.get('https://api.thanglele08.id.vn/Sport/xemthongtinthisinhall', {
//         headers: {
//           Accept: '*/*',
//           Authorization: token
//         }
//       });

//       setContestants(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchContestants();
//   }, []);

//   const handleModify = () => {
//     modify({ formData, oldCategories });
//   };

//   // const handlePrint = useReactToPrint({
//   //   content: () => cardRef.current,
//   //   documentTitle: `Contestant_${currentContestant?.sobaodanh}_Card`,
//   // });

//   return (
//     <>
//       <div className="contestant-container mt-3">
//         <h5 className="text-center">Quản lý thông tin thí sinh</h5>
//         <div className='w-50' style={{ margin: '20px auto' }}>
//           {!isSearchByNameAndPhone
//             && <SearchByRegistrationNumber searchInput={searchInput} changeSearchInput={handleChangeSearchInput} changeSearchWay={changeSearchWay} search={handleSearch} />}
//           {isSearchByNameAndPhone
//             && <SearchByNameAndPhone searchInput={searchInput} changeSearchInput={handleChangeSearchInput} changeSearchWay={changeSearchWay} search={handleSearch} />}
//         </div>
//         <div className="card">
//           <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <strong>Danh sách thí sinh tham gia giải</strong>
//             <button
//               className="btn btn-sm btn-outline-primary float-right"
//               data-bs-toggle="modal" data-bs-target="#thongTinThiSinhModal"
//             >+</button>
//           </div>
//           <div className="card-body">
//             <div className="table-responsive" style={{ overflowX: "auto", maxHeight: "1000px" }}>
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th scope="col"><input type="checkbox" /></th>
//                     <th scope="col">STT</th>
//                     <th scope="col">SBD</th>
//                     <th scope="col">Họ tên thí sinh</th>
//                     <th scope="col">Email</th>
//                     <th scope="col">Số điện thoại</th>
//                     <th scope="col">Ngày sinh</th>
//                     <th scope="col">Giới tính</th>
//                     <th scope="col">Họ tên phụ huynh</th>
//                     <th scope="col">Đơn vị</th>
//                     <th scope="col">Lớp</th>
//                     <th scope="col" className="text-right">Hành động</th>
//                     <th scope="col" className="text-right">In thẻ</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {contestants.map((contestant, index) => (
//                     <tr key={contestant.id}>
//                       <td><input type="checkbox" /></td>
//                       <td>{index + 1}</td>
//                       <td>{contestant.sobaodanh}</td>
//                       <td>{contestant.hovatenthisinh}</td>
//                       <td>{contestant.email}</td>
//                       <td>{contestant.sodienthoai}</td>
//                       <td>{contestant.namsinh}</td>
//                       <td>{contestant.gioitinh}</td>
//                       <td>{contestant.hovatenphuhuynh}</td>
//                       <td>{contestant.donvi}</td>
//                       <td>{contestant.lop}</td>
//                       <td className="text-right">
//                         <button className="btn btn-sm btn-outline-secondary"
//                           data-bs-toggle="modal" data-bs-target="#thongTinThiSinhModal"
//                           onClick={() => clickEditInfo(contestant.sobaodanh)}
//                         >Sửa</button>
//                         <button className="btn btn-sm btn-outline-danger">Xóa</button>
//                       </td>
//                       <td className="text-right">
//                         <button
//                           className="btn btn-sm btn-outline-primary"
//                           onClick={() => {
//                             fetchContestantToPrint(contestant.sobaodanh);
//                             handlePrint();
//                           }}
//                           // onClick={() => fetchContestantToPrint(contestant.sobaodanh)}
//                         >
//                           In thẻ
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//         <button id="printButton" className="btn btn-outline-dark">In phiếu dự thi</button>
//       </div>
//       <div className="modal fade" id="thongTinThiSinhModal" tabIndex="-1" aria-labelledby="thongTinThiSinhModalLabel" aria-hidden="true">
//         <div className="modal-dialog modal-lg">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h6 className="modal-title" id="thongTinThiSinhModalLabel"><b>Thông tin thí sinh - SBD: {currentId}</b></h6>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               {formData && <CandidateInforForm formData={formData} handleChange={handleChange} />}
//             </div>
//             <div className='modal-footer'>
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
//               <button type="button" className="btn btn-primary" onClick={() => handleModify()}>Lưu</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Hidden printable component */}
//       {currentContestant && (
//         <div style={{ display: 'none' }}>
//           <ContestantCard ref={cardRef} contestant={currentContestant} />
//         </div>
//       )}
//     </>
//   );
// }

// export default InfoManagement;



import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';
import CandidateInforForm from '../welcome/candidateInforForm';
import SearchByNameAndPhone from '../searches/SearchByNameAndPhone';
import SearchByRegistrationNumber from '../searches/SearchByRegistrationNumber';
import { useSearch } from '../../services/searchInfo';
import { modify } from '../../services/modifyInfo';

const ContestantCard = React.forwardRef(({ contestant }, ref) => {
  console.log(contestant.hangmucthidau);
  return (
    <div ref={ref} style={{ width: '500px', height: '350px', padding: '10px', border: '1px solid #000', boxSizing: 'border-box' }}>
      <h4>SBD: {contestant.sobaodanh}</h4>
      <p><strong>Tên:</strong> {contestant.hovatenthisinh}</p>
      <p><strong>Đơn vị:</strong> {contestant.donvi}</p>
      <p><strong>Lớp:</strong> {contestant.lop || "N/A"}</p>
      <p><strong>Tên phụ huynh:</strong> {contestant.hovatenphuhuynh}</p>
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

function InfoManagement() {
  const { search, formData, searchInput, isSearchByNameAndPhone, setSearchInput, handleChange, changeSearchWay } = useSearch();
  const [contestants, setContestants] = useState([]);
  const [currentId, setCurrentId] = useState('...');
  const [oldCategories, setOldCategories] = useState([]);
  const [currentContestant, setCurrentContestant] = useState(null);
  const cardRef = useRef();

  const handleChangeSearchInput = (e) => {
    setSearchInput({
      ...searchInput,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = async () => {
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

  useEffect(() => {
    if (currentContestant) {
      handlePrint();
    }
  }, [currentContestant]);

  const fetchInfoById = async (id) => {
    search(setOldCategories, id);
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
    modify({ formData, oldCategories });
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
                    <th scope="col" className="text-right">In thẻ</th>
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
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {formData && <CandidateInforForm formData={formData} handleChange={handleChange} />}
            </div>
            <div className='modal-footer'>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              <button type="button" className="btn btn-primary" onClick={() => handleModify()}>Lưu</button>
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
