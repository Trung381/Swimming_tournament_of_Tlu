// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // function Score({ role }) {
// function Score() {
//   const [year, setYear] = useState("");
//   const [ageGroups, setAgeGroups] = useState([]);
//   const [competitions, setCompetitions] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [results, setResults] = useState([]);
//   const [selectedResult, setSelectedResult] = useState(null);
//   const [minute, setMinute] = useState("");
//   const [second, setSecond] = useState("");
//   const [millisecond, setMillisecond] = useState("");

//   // Simulate role for testing purposes
//   // role = 1;
//   // Trong component khác
//   const role = sessionStorage.getItem("role");

//   // Sử dụng role trong component
//   console.log("role = " + role);

//   useEffect(() => {
//     // Fetch initial data
//     const fetchData = async () => {
//       try {
//         const yearRes = await axios.get("http://localhost:3001/year");
//         const ageGroupRes = await axios.get("http://localhost:3001/ageGroups");
//         const competitionRes = await axios.get(
//           "http://localhost:3001/competitions"
//         );
//         const categoryRes = await axios.get("http://localhost:3001/categories");
//         const resultRes = await axios.get("http://localhost:3001/results");

//         setYear(yearRes.data);
//         setAgeGroups(ageGroupRes.data);
//         setCompetitions(competitionRes.data);
//         setCategories(categoryRes.data);
//         setResults(resultRes.data);
//       } catch (error) {
//         console.error("Error fetching initial data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleTraCuu = async (e) => {
//     e.preventDefault();

//     // Lấy giá trị ID từ input
//     const id = document.getElementById("Id").value;

//     if (!id) {
//       alert("Vui lòng nhập mã thí sinh.");
//       return;
//     }

//     try {
//       // Gửi yêu cầu API để tìm kiếm kết quả thí sinh dựa trên ID
//       const response = await axios.get(`http://localhost:3001/results/${id}`);
//       const result = response.data;

//       if (result) {
//         // Cập nhật trạng thái với thông tin của thí sinh
//         setSelectedResult(result);
//         setMinute(result.minute);
//         setSecond(result.second);
//         setMillisecond(result.millisecond);
//       } else {
//         alert("Không tìm thấy kết quả với mã thí sinh này.");
//       }
//     } catch (error) {
//       console.error("Lỗi khi tìm kiếm kết quả thí sinh:", error);
//       alert("Đã xảy ra lỗi khi tìm kiếm kết quả thí sinh.");
//     }
//   };

//   const handleLuu = async (e) => {
//     e.preventDefault();

//     if (role === 2) {
//       // Referee - Save new result
//       const newResult = {
//         minute,
//         second,
//         millisecond,
//       };

//       try {
//         // API call to save new result
//         await axios.post("http://localhost:3001/results", newResult);
//         alert("Lưu kết quả thành công!");

//         // Fetch updated results after saving
//         const resultRes = await axios.get("http://localhost:3001/results");
//         setResults(resultRes.data);

//         // Reset input fields
//         setMinute("");
//         setSecond("");
//         setMillisecond("");
//       } catch (error) {
//         console.error("Lỗi khi lưu kết quả:", error);
//         alert("Đã xảy ra lỗi khi lưu kết quả.");
//       }
//     } else if (role === 1 && selectedResult) {
//       // Secretary - Update existing result
//       const updatedResult = {
//         ...selectedResult,
//         minute,
//         second,
//         millisecond,
//       };

//       try {
//         await axios.put(
//           `http://localhost:3001/results/${selectedResult.id}`,
//           updatedResult
//         );
//         alert("Cập nhật kết quả thành công!");

//         // Fetch updated results after updating
//         const resultRes = await axios.get("http://localhost:3001/results");
//         setResults(resultRes.data);

//         // Optionally, reset selected result and input fields
//         setSelectedResult(null);
//         setMinute("");
//         setSecond("");
//         setMillisecond("");
//       } catch (error) {
//         console.error("Lỗi khi cập nhật kết quả:", error);
//         alert("Đã xảy ra lỗi khi cập nhật kết quả.");
//       }
//     }
//   };

//   const handleRowClick = (result) => {
//     if (role === 1) {
//       setSelectedResult(result);
//       setMinute(result.minute);
//       setSecond(result.second);
//       setMillisecond(result.millisecond);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h4 className="text-center">Kết quả thi đấu</h4>
//       <form className="mb-4">
//         <div className="row">
//           <div className="col-md-5">
//             <label htmlFor="year">Năm</label>
//             <select id="year" className="form-select">
//               <option defaultValue>Chọn năm...</option>
//               <option defaultValue>2024</option>
//               {/* Add options from year state */}
//             </select>
//           </div>
//           <div className="col-md-5">
//             <label htmlFor="ageGroup">Hạng tuổi</label>
//             <select id="ageGroup" className="form-select">
//               <option defaultValue>Chọn hạng tuổi...</option>
//               {ageGroups.map((ageGroup) => (
//                 <option key={ageGroup.id} value={ageGroup.id}>
//                   {ageGroup.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="col-md-5">
//             <label htmlFor="competition">Giải đấu</label>
//             <select id="competition" className="form-select">
//               <option defaultValue>Chọn giải đấu...</option>
//               {competitions.map((competition) => (
//                 <option key={competition.id} value={competition.id}>
//                   {competition.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="col-md-5">
//             <label htmlFor="category">Hạng mục</label>
//             <select id="category" className="form-select">
//               <option defaultValue>Chọn hạng mục...</option>
//               {categories.map((category) => (
//                 <option key={category.id} value={category.id}>
//                   {category.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="col-md-3">
//             <label htmlFor="Id">Mã</label>
//             <input
//               type="text"
//               id="Id"
//               className="form-control"
//               placeholder="Mã j đó đi"
//             ></input>
//           </div>
//         </div>
//         <div className="row mt-2">
//           <div className="col-md-12 text-end">
//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={handleTraCuu}
//             >
//               Tra cứu
//             </button>
//           </div>
//         </div>
//       </form>

//       {role !== 3 && (
//         <div className="container mt-3">
//           <form onSubmit={handleLuu}>
//             <div className="row">
//               <div className="col-auto">
//                 <label htmlFor="minute" className="col-form-label">
//                   Phút:
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="minute"
//                   value={minute}
//                   onChange={(e) => setMinute(e.target.value)}
//                   style={{ width: 60 }}
//                 />
//               </div>
//               <div className="col-auto">
//                 <label htmlFor="second" className="col-form-label">
//                   Giây:
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="second"
//                   value={second}
//                   onChange={(e) => setSecond(e.target.value)}
//                   style={{ width: 60 }}
//                 />
//               </div>
//               <div className="col-auto">
//                 <label htmlFor="millisecond" className="col-form-label">
//                   Tích tắc:
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="millisecond"
//                   value={millisecond}
//                   onChange={(e) => setMillisecond(e.target.value)}
//                   style={{ width: 60 }}
//                 />
//               </div>
//               <div className="col-auto">
//                 <button
//                   type="submit"
//                   className="btn btn-outline-secondary"
//                   style={{ marginTop: "33px" }}
//                 >
//                   Lưu
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       )}

//       <div className="card">
//         <div className="card-header">Danh sách thí sinh tham gia giải</div>
//         <div className="card-body p-0">
//           <div
//             className="table-responsive"
//             style={{ overflowX: "auto", maxHeight: "200px" }}
//           >
//             <table className="table table-hover m-0">
//               <thead>
//                 <tr>
//                   <th scope="col">#</th>
//                   <th scope="col">Tên thí sinh</th>
//                   <th scope="col">Phút</th>
//                   <th scope="col">Giây</th>
//                   <th scope="col">Tích tắc</th>
//                   <th scope="col">Thứ hạng</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {results.map((result) => (
//                   <tr key={result.id} onClick={() => handleRowClick(result)}>
//                     <th scope="row">{result.id}</th>
//                     <td>{result.name}</td>
//                     <td>{result.minute}</td>
//                     <td>{result.second}</td>
//                     <td>{result.millisecond}</td>
//                     <td>{result.rank}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Score;



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Score() {
//   const [sobaodanh, setSobaodanh] = useState("");
//   const [tenHangMuc, setTenHangMuc] = useState("");
//   const [results, setResults] = useState([]);
//   const [selectedResult, setSelectedResult] = useState(null);
//   const [minute, setMinute] = useState("");
//   const [second, setSecond] = useState("");
//   const [millisecond, setMillisecond] = useState("");
//   const [total, setTotal] = useState(0);

//   const role = sessionStorage.getItem("role");

//   // Tra cứu thí sinh dựa trên số báo danh và mã hạng mục
//   const handleTraCuu = async (e) => {
//     e.preventDefault();

//     // if (!sobaodanh || !tenHangMuc) {
//     if (!sobaodanh) {
//       alert("Vui lòng nhập số báo danh và chọn mã hạng mục.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://api.thanglele08.id.vn/Sport/getbangdiem",
//         { sobaodanh, mahangmuc: tenHangMuc }
//       );

//       const result = response.data;
//       if (result.length > 0) {
//         setResults(result);
//       } else {
//         alert("Không tìm thấy kết quả với số báo danh và mã hạng mục này.");
//       }
//     } catch (error) {
//       console.error("Lỗi khi tìm kiếm kết quả thí sinh:", error);
//       alert("Đã xảy ra lỗi khi tìm kiếm kết quả thí sinh.");
//     }
//   };

//   const handleRowClick = (result) => {
//     setSelectedResult(result);
//     setMinute(result.phut || "");
//     setSecond(result.giay || "");
//     setMillisecond(result.phantramgiay || "");
//     setTotal(result.tong);
//   };

//   const handleLuu = async (e) => {
//     e.preventDefault();

//     if (role !== "2" && role !== "1") {
//       alert("Bạn không có quyền thực hiện chức năng này.");
//       return;
//     }

//     if (selectedResult) {
//       const updatedResult = {
//         maketqua: selectedResult.maketqua,
//         sobaodanh: selectedResult.sobaodanh,
//         mahangmuc: tenHangMuc,
//         vitri: selectedResult.vitri || 0,
//         dotthi: selectedResult.dotthi || 0,
//         phut: minute || 0,
//         giay: second || 0,
//         phantramgiay: millisecond || 0,
//         tong: total,
//       };

//       try {
//         await axios.post("https://api.thanglele08.id.vn/Sport/nhapdiem", updatedResult);
//         alert("Lưu kết quả thành công!");
//       } catch (error) {
//         console.error("Lỗi khi lưu kết quả:", error);
//         alert("Đã xảy ra lỗi khi lưu kết quả.");
//       }
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h4 className="text-center">Kết quả thi đấu</h4>
//       <form className="mb-4">
//         <div className="row">
//           <div className="col-md-5">
//             <label htmlFor="sobaodanh">Số báo danh</label>
//             <input
//               type="text"
//               id="sobaodanh"
//               className="form-control"
//               value={sobaodanh}
//               onChange={(e) => setSobaodanh(e.target.value)}
//               placeholder="Nhập số báo danh"
//             />
//           </div>
//           <div className="col-md-5">
//             <label htmlFor="tenHangMuc">Mã hạng mục</label>
//             <input
//               type="text"
//               id="tenHangMuc"
//               className="form-control"
//               value={tenHangMuc}
//               onChange={(e) => setTenHangMuc(e.target.value)}
//               placeholder="Nhập mã hạng mục"
//             />
//           </div>
//           <div className="col-md-2 text-end">
//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={handleTraCuu}
//               style={{ marginTop: "30px" }}
//             >
//               Tra cứu
//             </button>
//           </div>
//         </div>
//       </form>

//       <div className="card">
//         <div className="card-header">Danh sách thí sinh</div>
//         <div className="card-body p-0">
//           <div
//             className="table-responsive"
//             style={{ overflowX: "auto", maxHeight: "200px" }}
//           >
//             <table className="table table-hover m-0">
//               <thead>
//                 <tr>
//                   <th scope="col">Số báo danh</th>
//                   <th scope="col">Tên thí sinh</th>
//                   <th scope="col">Phút</th>
//                   <th scope="col">Giây</th>
//                   <th scope="col">Phần trăm giây</th>
//                   <th scope="col">Tổng</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {results.map((result) => (
//                   <tr key={result.sobaodanh} onClick={() => handleRowClick(result)}>
//                     <td>{result.sobaodanh}</td>
//                     <td>{result.hovatenthisinh}</td>
//                     <td>{result.phut}</td>
//                     <td>{result.giay}</td>
//                     <td>{result.phantramgiay}</td>
//                     <td>{result.tong}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {role !== "3" && selectedResult && (
//         <div className="container mt-3">
//           <form onSubmit={handleLuu}>
//             <div className="row">
//               <div className="col-auto">
//                 <label htmlFor="minute" className="col-form-label">
//                   Phút:
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="minute"
//                   value={minute}
//                   onChange={(e) => setMinute(e.target.value)}
//                   style={{ width: 60 }}
//                   disabled={role !== "1" && selectedResult.phut !== ""}
//                 />
//               </div>
//               <div className="col-auto">
//                 <label htmlFor="second" className="col-form-label">
//                   Giây:
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="second"
//                   value={second}
//                   onChange={(e) => setSecond(e.target.value)}
//                   style={{ width: 60 }}
//                   disabled={role !== "1" && selectedResult.giay !== ""}
//                 />
//               </div>
//               <div className="col-auto">
//                 <label htmlFor="millisecond" className="col-form-label">
//                   Phần trăm giây:
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="millisecond"
//                   value={millisecond}
//                   onChange={(e) => setMillisecond(e.target.value)}
//                   style={{ width: 60 }}
//                   disabled={role !== "1" && selectedResult.phantramgiay !== ""}
//                 />
//               </div>
//               <div className="col-auto">
//                 <button
//                   type="submit"
//                   className="btn btn-outline-secondary"
//                   style={{ marginTop: "33px" }}
//                 >
//                   Lưu
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Score;



import React, { useState } from "react";
import axios from "axios";

function Score() {
  const [sobaodanh, setSobaodanh] = useState("");
  const [tenHangMuc, setTenHangMuc] = useState("");
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [millisecond, setMillisecond] = useState("");
  const [total, setTotal] = useState(0);

  // const role = sessionStorage.getItem("role");
  const role = "1";
  console.log("role =" + role);
  const token = "77a1d381b74d503edf3c18b33de1d3031bc73056f09a870a74d75d5d396bba52";

  // Tra cứu thí sinh dựa trên số báo danh và mã hạng mục
  const handleTraCuu = async (e) => {
    e.preventDefault();

    if (!sobaodanh) {
      alert("Vui lòng nhập số báo danh và chọn mã hạng mục.");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.thanglele08.id.vn/Sport/getbangdiem",
        { sobaodanh, mahangmuc: tenHangMuc },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = response.data;
      if (result.length > 0) {
        setResults(result);
      } else {
        alert("Không tìm thấy kết quả với số báo danh và mã hạng mục này.");
      }
    } catch (error) {
      console.error("Lỗi khi tìm kiếm kết quả thí sinh:", error);
      alert("Đã xảy ra lỗi khi tìm kiếm kết quả thí sinh.");
    }
  };

  const handleRowClick = (result) => {
    setSelectedResult(result);
    setMinute(result.phut || "");
    setSecond(result.giay || "");
    setMillisecond(result.phantramgiay || "");
    setTotal(result.tong);
  };

  const handleLuu = async (e) => {
    e.preventDefault();

    if (role !== "2" && role !== "1") {
      alert("Bạn không có quyền thực hiện chức năng này.");
      return;
    }

    if (selectedResult) {
      const updatedResult = {
        maketqua: selectedResult.maketqua,
        sobaodanh: selectedResult.sobaodanh,
        mahangmuc: tenHangMuc,
        vitri: selectedResult.vitri || 0,
        dotthi: selectedResult.dotthi || 0,
        phut: minute || 0,
        giay: second || 0,
        phantramgiay: millisecond || 0,
        tong: total,
      };

      try {
        await axios.post(
          "https://api.thanglele08.id.vn/Sport/nhapdiem",
          updatedResult,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert("Lưu kết quả thành công!");
      } catch (error) {
        console.error("Lỗi khi lưu kết quả:", error);
        alert("Đã xảy ra lỗi khi lưu kết quả.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h4 className="text-center">Kết quả thi đấu</h4>
      <form className="mb-4">
        <div className="row">
          <div className="col-md-5">
            <label htmlFor="sobaodanh">Số báo danh</label>
            <input
              type="text"
              id="sobaodanh"
              className="form-control"
              value={sobaodanh}
              onChange={(e) => setSobaodanh(e.target.value)}
              placeholder="Nhập số báo danh"
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="tenHangMuc">Mã hạng mục</label>
            <input
              type="text"
              id="tenHangMuc"
              className="form-control"
              value={tenHangMuc}
              onChange={(e) => setTenHangMuc(e.target.value)}
              placeholder="Nhập mã hạng mục"
            />
          </div>
          <div className="col-md-2 text-end">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleTraCuu}
              style={{ marginTop: "30px" }}
            >
              Tra cứu
            </button>
          </div>
        </div>
      </form>

      {/* {role !== "3" && selectedResult && ( */}
      {role !== "3" && selectedResult && (
        <div className="container mt-3">
          <form onSubmit={handleLuu}>
            <div className="row">
              <div className="col-auto">
                <label htmlFor="minute" className="col-form-label">
                  Phút:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="minute"
                  value={minute}
                  onChange={(e) => setMinute(e.target.value)}
                  style={{ width: 60 }}
                  disabled={role !== "1" && selectedResult.phut !== ""}
                />
              </div>
              <div className="col-auto">
                <label htmlFor="second" className="col-form-label">
                  Giây:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="second"
                  value={second}
                  onChange={(e) => setSecond(e.target.value)}
                  style={{ width: 60 }}
                  disabled={role !== "1" && selectedResult.giay !== ""}
                />
              </div>
              <div className="col-auto">
                <label htmlFor="millisecond" className="col-form-label">
                  Phần trăm giây:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="millisecond"
                  value={millisecond}
                  onChange={(e) => setMillisecond(e.target.value)}
                  style={{ width: 60 }}
                  disabled={role !== "1" && selectedResult.phantramgiay !== ""}
                />
              </div>
              <div className="col-auto">
                <button
                  type="submit"
                  className="btn btn-outline-secondary"
                  style={{ marginTop: "33px" }}
                >
                  Lưu
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      <div className="card">
        <div className="card-header">Danh sách thí sinh</div>
        <div className="card-body p-0">
          <div
            className="table-responsive"
            style={{ overflowX: "auto", maxHeight: "200px" }}
          >
            <table className="table table-hover m-0">
              <thead>
                <tr>
                  <th scope="col">Số báo danh</th>
                  <th scope="col">Tên thí sinh</th>
                  <th scope="col">Phút</th>
                  <th scope="col">Giây</th>
                  <th scope="col">Phần trăm giây</th>
                  <th scope="col">Tổng</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result.sobaodanh} onClick={() => handleRowClick(result)}>
                    <td>{result.sobaodanh}</td>
                    <td>{result.hovatenthisinh}</td>
                    <td>{result.phut}</td>
                    <td>{result.giay}</td>
                    <td>{result.phantramgiay}</td>
                    <td>{result.tong}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Score;
