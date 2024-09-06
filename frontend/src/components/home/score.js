// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Score() {
//   const [sobaodanh, setSobaodanh] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [tenHangMuc, setTenHangMuc] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [results, setResults] = useState([]);
//   const [selectedResult, setSelectedResult] = useState(null);
//   const [minute, setMinute] = useState("");
//   const [second, setSecond] = useState("");
//   const [millisecond, setMillisecond] = useState("");
//   const [total, setTotal] = useState(0);

//   const role = "2";
//   const token = "77a1d381b74d503edf3c18b33de1d3031bc73056f09a870a74d75d5d396bba52";
//   // const role = sessionStorage.getItem('role');
//   // const token = sessionStorage.getItem('token');

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.thanglele08.id.vn/Sport/hangmucthidau",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//         alert("Đã xảy ra lỗi khi tải danh sách hạng mục.");
//       }
//     };

//     fetchCategories();
//   }, [token]);

//   const handleInputChange = (e) => {
//     const input = e.target.value;
//     setTenHangMuc(input);

//     const filteredSuggestions = categories.filter(
//       (category) =>
//         `${category.tenhangmuc} ${category.hangtuoi}`
//           .toLowerCase()
//           .includes(input.toLowerCase())
//     );

//     setSuggestions(filteredSuggestions);
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setTenHangMuc(`${suggestion.tenhangmuc} ${suggestion.hangtuoi}`);
//     setSuggestions([]);
//   };

//   const handleTraCuu = async (e) => {
//     e.preventDefault();

//     if (!sobaodanh || !tenHangMuc) {
//       alert("Vui lòng nhập số báo danh và chọn hạng mục.");
//       return;
//     }

//     const selectedCategory = categories.find(
//       (category) =>
//         `${category.tenhangmuc} ${category.hangtuoi}` === tenHangMuc
//     );

//     if (!selectedCategory) {
//       alert("Không tìm thấy hạng mục thi đấu.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://api.thanglele08.id.vn/Sport/getbangdiem",
//         { sobaodanh, mahangmuc: selectedCategory.mahangmuc },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
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
//       const selectedCategory = categories.find(
//         (category) =>
//           `${category.tenhangmuc} ${category.hangtuoi}` === tenHangMuc
//       );

//       if (!selectedCategory) {
//         alert("Không tìm thấy hạng mục thi đấu.");
//         return;
//       }

//       const updatedResult = {
//         maketqua: selectedResult.maketqua,
//         sobaodanh: selectedResult.sobaodanh,
//         mahangmuc: selectedCategory.mahangmuc,
//         vitri: selectedResult.vitri || 0,
//         dotthi: selectedResult.dotthi || 0,
//         phut: minute || 0,
//         giay: second || 0,
//         phantramgiay: millisecond || 0,
//         tong: total,
//       };

//       try {
//         await axios.post(
//           "https://api.thanglele08.id.vn/Sport/nhapdiem",
//           updatedResult,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         alert("Lưu kết quả thành công!");

//         if (results.length > 1){
//           await handleFetchContestantsByCategory();
//         }
//         else {
//           await handleTraCuu(e);
//         }
//         // await handleTraCuu(e);
//       } catch (error) {
//         console.error("Lỗi khi lưu kết quả:", error);
//         alert("Đã xảy ra lỗi khi lưu kết quả.");
//       }
//     }
//   };

//   const handleFetchContestantsByCategory = async () => {
//     const selectedCategory = categories.find(
//       (category) =>
//         `${category.tenhangmuc} ${category.hangtuoi}` === tenHangMuc
//     );

//     if (!selectedCategory) {
//       alert("Không tìm thấy hạng mục thi đấu.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://api.thanglele08.id.vn/Sport/getbangdiemhangmuc",
//         { mahangmuc: selectedCategory.mahangmuc },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const contestants = response.data;
//       setResults(contestants);
//     } catch (error) {
//       console.error("Lỗi khi lấy danh sách thí sinh theo mã hạng mục:", error);
//       alert("Đã xảy ra lỗi khi lấy danh sách thí sinh.");
//     }
//   };

//   return (
//     <div className="score-container mt-3">
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
//             <label htmlFor="tenHangMuc">Hạng mục thi đấu</label>
//             <input
//               type="text"
//               id="tenHangMuc"
//               className="form-control"
//               value={tenHangMuc}
//               onChange={handleInputChange}
//               placeholder="Nhập hạng mục thi đấu"
//             />
//             {suggestions.length > 0 && (
//               <ul
//                 className="list-group"
//                 style={{
//                   maxHeight: "150px",
//                   overflowY: "auto",
//                   marginTop: "5px",
//                 }}
//               >
//                 {suggestions.map((suggestion) => (
//                   <li
//                     key={suggestion.mahangmuc}
//                     className="list-group-item"
//                     onClick={() => handleSuggestionClick(suggestion)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     {`${suggestion.tenhangmuc} ${suggestion.hangtuoi}`}
//                   </li>
//                 ))}
//               </ul>
//             )}
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
//         <div className="text-center mt-3">
//           <button
//             type="button"
//             className="btn btn-secondary"
//             onClick={handleFetchContestantsByCategory}
//           >
//             Hiển thị danh sách thí sinh theo mã
//           </button>
//         </div>
//       </form>

//       {(role === "1" || role === "2") && selectedResult && (
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
//                   Phần trăm giây:
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
//                   <tr
//                     key={result.sobaodanh}
//                     onClick={() => handleRowClick(result)}
//                   >
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
//     </div>
//   );
// }

// export default Score;






//------------------------------------------------------- datalist instead of ul li ----------------------------------------------------------





import React, { useState, useEffect } from "react";
import axios from "axios";

function Score() {
  const [sobaodanh, setSobaodanh] = useState("");
  const [categories, setCategories] = useState([]);
  const [tenHangMuc, setTenHangMuc] = useState("");
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [millisecond, setMillisecond] = useState("");
  const [total, setTotal] = useState(0);

  const role = sessionStorage.getItem('role');
  const token = sessionStorage.getItem('token');


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://api.thanglele08.id.vn/Sport/hangmucthidau",
          {
            headers: {
              Authorization: token
            },
          }
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        alert("Đã xảy ra lỗi khi tải danh sách hạng mục.");
      }
    };

    fetchCategories();
  }, [token]);

  const handleInputChange = (e) => {
    setTenHangMuc(e.target.value);
  };

  const handleTraCuu = async (e) => {
    e.preventDefault();

    if (!sobaodanh || !tenHangMuc) {
      alert("Vui lòng nhập số báo danh và chọn hạng mục.");
      return;
    }

    const selectedCategory = categories.find(
      (category) =>
        `${category.tenhangmuc} ${category.hangtuoi}` === tenHangMuc
    );

    if (!selectedCategory) {
      alert("Không tìm thấy hạng mục thi đấu.");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.thanglele08.id.vn/Sport/getbangdiem",
        { sobaodanh, mahangmuc: selectedCategory.mahangmuc },
        {
          headers: {
            Authorization: token
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
      const selectedCategory = categories.find(
        (category) =>
          `${category.tenhangmuc} ${category.hangtuoi}` === tenHangMuc
      );

      if (!selectedCategory) {
        alert("Không tìm thấy hạng mục thi đấu.");
        return;
      }

      const updatedResult = {
        maketqua: selectedResult.maketqua,
        sobaodanh: selectedResult.sobaodanh,
        mahangmuc: selectedCategory.mahangmuc,
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
              Authorization: token
            },
          }
        );
        alert("Lưu kết quả thành công!");

        if (results.length > 1) {
          await handleFetchContestantsByCategory();
        } else {
          await handleTraCuu(e);
        }
      } catch (error) {
        console.error("Lỗi khi lưu kết quả:", error);
        alert("Đã xảy ra lỗi khi lưu kết quả.");
      }
    }
  };

  const handleFetchContestantsByCategory = async () => {
    const selectedCategory = categories.find(
      (category) =>
        `${category.tenhangmuc} ${category.hangtuoi}` === tenHangMuc
    );

    if (!selectedCategory) {
      alert("Không tìm thấy hạng mục thi đấu.");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.thanglele08.id.vn/Sport/getbangdiemhangmuc",
        { mahangmuc: selectedCategory.mahangmuc },
        {
          headers: {
            Authorization: token
          },
        }
      );

      const contestants = response.data;
      setResults(contestants);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách thí sinh theo mã hạng mục:", error);
      alert("Đã xảy ra lỗi khi lấy danh sách thí sinh.");
    }
  };

  return (
    <div className="score-container mt-3">
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
            <label htmlFor="tenHangMuc">Hạng mục thi đấu</label>
            <input
              type="text"
              id="tenHangMuc"
              className="form-control"
              value={tenHangMuc}
              onChange={handleInputChange}
              list="categories"
              placeholder="Nhập hạng mục thi đấu"
            />
            <datalist id="categories">
              {categories.map((category) => (
                <option
                  key={category.mahangmuc}
                  value={`${category.tenhangmuc} ${category.hangtuoi}`}
                />
              ))}
            </datalist>
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
        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleFetchContestantsByCategory}
          >
            Hiển thị danh sách thí sinh theo mã
          </button>
        </div>
      </form>

      {(role === "1" || role === "2") && selectedResult && (
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

      {results.length > 0 && (
        <div className="contestant-table mt-4">
          <h5 className="text-center">Kết quả tìm kiếm</h5>


          <table className="table table-hover mt-3">
            <thead className="thead-dark">
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Số báo danh</th>
                <th scope="col">Tên thí sinh</th>
                <th scope="col">Phút</th>
                <th scope="col">Giây</th>
                <th scope="col">Phần trăm giây</th>
                <th scope="col">Tổng</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr
                  key={result.maketqua}
                  onClick={() => handleRowClick(result)}
                  className={selectedResult === result ? "table-active" : ""}
                >
                  <th scope="row">{index + 1}</th>
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
      )}
    </div>
  );
}

export default Score;
