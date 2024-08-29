// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function CompetitionCategoryManagement() {
//   const [year, setYear] = useState("");
//   const [competition, setCompetition] = useState("");
//   const [ageGroup, setAgeGroup] = useState("");
//   const [boards, setBoards] = useState([]);
//   const [newBoardName, setNewBoardName] = useState("");
//   const [selectedContestants, setSelectedContestants] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [contestants, setContestants] = useState([]);

//   useEffect(() => {
//     // Fetch initial data
//     const fetchBoards = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/competition_category");
//         setBoards(response.data);
//       } catch (error) {
//         console.error("Lỗi khi tải dữ liệu bảng:", error);
//       }
//     };

//     fetchBoards();
//   }, []);

//   const handleCreateBoard = async () => {
//     try {
//       const newBoard = {
//         year,
//         competition,
//         ageGroup,
//         category: newBoardName, // Tên hạng mục nhập từ modal
//         contestants: []
//       };
//       const response = await axios.post("http://localhost:3001/competition_category", newBoard);
//       setBoards([...boards, response.data]);
//       alert("Tạo bảng thành công!");
//     } catch (error) {
//       console.error("Lỗi khi tạo bảng:", error);
//     }
//   };

//   const handleDeleteBoard = async (boardId) => {
//     try {
//       await axios.delete(`http://localhost:3001/competition_category/${boardId}`);
//       setBoards(boards.filter(board => board.id !== boardId));
//       alert("Xóa bảng thành công!");
//     } catch (error) {
//       console.error("Lỗi khi xóa bảng:", error);
//     }
//   };

//   const handleCheckboxChange = (contestant) => {
//     if (selectedContestants.includes(contestant.id)) {
//       setSelectedContestants(selectedContestants.filter(id => id !== contestant.id));
//     } else {
//       setSelectedContestants([...selectedContestants, contestant.id]);
//     }
//   };

//   const handleSaveContestants = async (boardId) => {
//     try {
//       const boardToUpdate = boards.find(board => board.id === boardId);
//       const updatedBoard = {
//         ...boardToUpdate,
//         contestants: [...boardToUpdate.contestants, ...selectedContestants]
//       };

//       await axios.put(`http://localhost:3001/competition_category/${boardId}`, updatedBoard);
//       setBoards(boards.map(board => (board.id === boardId ? updatedBoard : board)));
//       alert("Lưu thí sinh vào bảng thành công!");
//     } catch (error) {
//       console.error("Lỗi khi lưu thí sinh:", error);
//     }
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3001/candidates?q=${searchTerm}`);
//       setContestants(response.data);
//     } catch (error) {
//       console.error("Lỗi khi tìm kiếm thí sinh:", error);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <div className="text-center mb-3">
//         <h4 className="fw-bold">Quản lý hạng mục thi đấu</h4>
//       </div>

//       <div className="row mb-3">
//         <div className="col-md-4">
//           <label htmlFor="year" className="form-label">Năm</label>
//           <select
//             id="year"
//             className="form-select"
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//           >
//             <option value="">Chọn năm</option>
//             <option value="2023">2023</option>
//             <option value="2024">2024</option>
//           </select>
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="competition" className="form-label">Giải đấu</label>
//           <select
//             id="competition"
//             className="form-select"
//             value={competition}
//             onChange={(e) => setCompetition(e.target.value)}
//           >
//             <option value="">Chọn giải đấu</option>
//             <option value="1">Giải A</option>
//             <option value="2">Giải B</option>
//           </select>
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="age-group" className="form-label">Hạng tuổi</label>
//           <select
//             id="age-group"
//             className="form-select"
//             value={ageGroup}
//             onChange={(e) => setAgeGroup(e.target.value)}
//           >
//             <option value="">Chọn hạng tuổi</option>
//             <option value="1">U18</option>
//             <option value="2">U20</option>
//           </select>
//         </div>
//       </div>

//       <div className="new-board-btn text-center mb-3">
//         <button
//           className="btn btn-link"
//           data-bs-toggle="modal"
//           data-bs-target="#createBoardModal"
//         >
//           ➕ Bảng mới
//         </button>
//       </div>

//       {boards.map((board) => (
//         <div className="board mb-3" key={board.id}>
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <div className="board-header">Bảng: {board.category}</div>
//             <div className="d-flex justify-content-between mb-2">
//               <button
//                 className="btn btn-outline-danger"
//                 onClick={() => handleDeleteBoard(board.id)}
//               >
//                 Xóa bảng
//               </button>
//               <button
//                 className="btn btn-outline-primary"
//                 data-bs-toggle="modal"
//                 data-bs-target="#addContestantIntoTableModal"
//               >
//                 Thêm thí sinh
//               </button>
//             </div>
//           </div>
//           <table className="table text-center">
//             <thead>
//               <tr className="table-primary">
//                 <th>STT</th>
//                 <th>Họ và tên</th>
//                 <th>Số báo danh</th>
//                 <th>Hành động</th>
//               </tr>
//             </thead>
//             <tbody>
//               {board.contestants.map((contestant, index) => (
//                 <tr key={contestant.id}>
//                   <td>{index + 1}</td>
//                   <td>{contestant.name}</td>
//                   <td>{contestant.number}</td>
//                   <td>
//                     <button
//                       className="btn btn-outline-danger btn-sm"
//                       onClick={() => handleDeleteBoard(contestant.id)}
//                     >
//                       Xóa
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ))}

//       {/* Modal for creating a new board */}
//       <div
//         className="modal fade"
//         id="createBoardModal"
//         tabIndex="-1"
//         aria-labelledby="createBoardModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="createBoardModalLabel">
//                 Thêm bảng mới
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <div className="mb-3">
//                 <label htmlFor="new-board-name" className="form-label">
//                   Tên bảng
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="new-board-name"
//                   value={newBoardName}
//                   onChange={(e) => setNewBoardName(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Hủy
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-primary"
//                 onClick={() => {
//                   handleCreateBoard();
//                   setNewBoardName("");
//                   document
//                     .querySelector("#createBoardModal .btn-close")
//                     .click();
//                 }}
//               >
//                 Thêm bảng
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal for adding contestants to a board */}
//       <div
//         className="modal fade"
//         id="addContestantIntoTableModal"
//         tabIndex="-1"
//         aria-labelledby="addParticipantModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-lg">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="addParticipantModalLabel">
//                 Thêm thí sinh vào bảng
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <div className="input-group mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Tìm kiếm thí sinh"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <button className="btn btn-primary" onClick={handleSearch}>
//                   Tra cứu
//                 </button>
//               </div>
//               <table className="table table-bordered text-center">
//                 <thead>
//                   <tr className="table-primary">
//                     <th>Chọn</th>
//                     <th>STT</th>
//                     <th>Họ và tên</th>
//                     <th>Số báo danh</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {contestants.map((contestant, index) => (
//                     <tr key={contestant.id}>
//                       <td>
//                         <input
//                           type="checkbox"
//                           checked={selectedContestants.includes(contestant.id)}
//                           onChange={() => handleCheckboxChange(contestant)}
//                         />
//                       </td>
//                       <td>{index + 1}</td>
//                       <td>{contestant.name}</td>
//                       <td>{contestant.number}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Đóng
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-primary"
//                 onClick={() => alert("Lưu thành công!")}
//               >
//                 Lưu
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CompetitionCategoryManagement;



import React, { useState, useEffect } from "react";
import axios from "axios";

function CompetitionCategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({
    mahangmuc: '',
    tenhangmuc: '',
    hangtuoi: ''
  });

  const fetchCategoris = async () => {
    try {
      const response = await axios.get('https://api.thanglele08.id.vn/Sport/hangmucthidau');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategoris();
  }, []);

  const handleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    })
  };

  const handleCreateCategory = async () => {
    console.log("OK");
    // try {
    //   const response = await axios.post("http://localhost:3001/competition_category", newBoard);
    //   setBoards([...boards, response.data]);
    //   alert("Tạo bảng thành công!");
    // } catch (error) {
    //   console.error("Lỗi khi tạo bảng:", error);
    // }
  };

  // const handleDeleteBoard = async (boardId) => {
  //   try {
  //     await axios.delete(`http://localhost:3001/competition_category/${boardId}`);
  //     setBoards(boards.filter(board => board.id !== boardId));
  //     alert("Xóa bảng thành công!");
  //   } catch (error) {
  //     console.error("Lỗi khi xóa bảng:", error);
  //   }
  // };

  // const handleCheckboxChange = (contestant) => {
  //   if (selectedContestants.includes(contestant.id)) {
  //     setSelectedContestants(selectedContestants.filter(id => id !== contestant.id));
  //   } else {
  //     setSelectedContestants([...selectedContestants, contestant.id]);
  //   }
  // };

  // const handleSaveContestants = async () => {
  //   if (!currentBoardId) return; // Ensure board ID is available

  //   try {
  //     const boardToUpdate = boards.find(board => board.id === currentBoardId);
  //     const updatedBoard = {
  //       ...boardToUpdate,
  //       contestants: [...boardToUpdate.contestants, ...selectedContestants.map(id => contestants.find(c => c.id === id))]
  //     };

  //     await axios.put(`http://localhost:3001/competition_category/${currentBoardId}`, updatedBoard);
  //     setBoards(boards.map(board => (board.id === currentBoardId ? updatedBoard : board)));
  //     setSelectedContestants([]); // Clear selected contestants after saving
  //     alert("Lưu thí sinh vào bảng thành công!");
  //   } catch (error) {
  //     console.error("Lỗi khi lưu thí sinh:", error);
  //   }
  // };

  // const handleDeleteContestant = async (boardId, contestantId) => {
  //   try {
  //     const boardToUpdate = boards.find(board => board.id === boardId);
  //     const updatedBoard = {
  //       ...boardToUpdate,
  //       contestants: boardToUpdate.contestants.filter(contestant => contestant.id !== contestantId)
  //     };

  //     await axios.put(`http://localhost:3001/competition_category/${boardId}`, updatedBoard);
  //     setBoards(boards.map(board => (board.id === boardId ? updatedBoard : board)));
  //     alert("Xóa thí sinh thành công!");
  //   } catch (error) {
  //     console.error("Lỗi khi xóa thí sinh:", error);
  //   }
  // };

  // const handleSearch = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3001/candidates?q=${searchTerm}`);
  //     setContestants(response.data);
  //   } catch (error) {
  //     console.error("Lỗi khi tìm kiếm thí sinh:", error);
  //   }
  // };

  return (
    <div className="container mt-4">
      <div className="text-center mb-3">
        <h4 className="fw-bold">Quản lý hạng mục thi đấu</h4>
      </div>

      {/* <div className="new-board-btn text-center mb-3">
        <button
          className="btn btn-link"
          data-bs-toggle="modal"
          data-bs-target="#createBoardModal"
        >
          ➕ Bảng mới
        </button>
      </div>

      {boards.map((board) => (
        <div className="board mb-3" key={board.id}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="board-header">Bảng: {board.category} ({board.ageGroup})</div>
            <div className="d-flex justify-content-between mb-2">
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDeleteBoard(board.id)}
              >
                Xóa bảng
              </button>
              <button
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#addContestantIntoTableModal"
                onClick={() => setCurrentBoardId(board.id)} // Set current board ID
              >
                Thêm thí sinh
              </button>
            </div>
          </div>
          <table className="table text-center">
            <thead>
              <tr className="table-primary">
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Số báo danh</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {board.contestants.map((contestant, index) => (
                <tr key={contestant.id}>
                  <td>{index + 1}</td>
                  <td>{contestant.name}</td>
                  <td>{contestant.number}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDeleteContestant(board.id, contestant.id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))} */}

      <div className="card">
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <strong>Danh sách hạng mục thi đấu</strong>
          <button
            className="btn btn-sm btn-outline-primary float-right"
            data-bs-toggle="modal" data-bs-target="#createCategoryModal"
          >+</button>
        </div>
        <div className="card-body">
          <div className="table-responsive" style={{ overflowX: "auto", maxHeight: "1000px" }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"><input type="checkbox" /></th>
                  <th scope="col">STT</th>
                  <th scope="col">Mã hạng mục</th>
                  <th scope="col">Tên hạng mục</th>
                  <th scope="col">Hạng tuổi</th>
                  <th scope="col" className="text-right">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={category.mahangmuc}>
                    <td><input type="checkbox" /></td>
                    <td>{index + 1}</td>
                    <td>{category.mahangmuc}</td>
                    <td>{category.tenhangmuc}</td>
                    <td>{category.hangtuoi}</td>
                    <td className="text-right">
                      <button className="btn btn-sm btn-outline-secondary"
                        data-bs-toggle="modal" data-bs-target="#createCategoryModal"
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

      {/* Modal for creating a new board */}
      <div className="modal fade" id="createCategoryModal" tabIndex="-1" aria-labelledby="createCategoryModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createCategoryModalLabel">Thông tin hạng mục</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="categoryId" className="form-label">Mã hạng mục</label>
                <input
                  type="text" className="form-control" id="categoryId" name="mahangmuc"
                  value={category.mahangmuc} onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="categoryName" className="form-label">Tên hạng mục</label>
                <input
                  type="text" className="form-control" id="categoryName" name="tenhangmuc"
                  value={category.tenhangmuc} onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age-group" className="form-label">Hạng tuổi</label>
                <select
                  id="age-group"
                  className="form-select"
                >
                  <option disabled selected>Chọn hạng tuổi</option>
                  <option name="hangtuoi" value="">Mix</option>
                  <option name="hangtuoi" value="00-08">0 - 8 tuổi</option>
                  <option name="hangtuoi" value="09-12">9 - 12 tuổi</option>
                  <option name="hangtuoi" value="13-15">13 - 15 tuổi</option>
                  <option name="hangtuoi" value="16-18">16 - 18 tuổi</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Hủy</button>
              <button type="button" className="btn btn-primary" onClick={() => handleCreateCategory()}>Tạo bảng</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for adding contestants to a board */}
      {/* <div
        className="modal fade"
        id="addContestantIntoTableModal"
        tabIndex="-1"
        aria-labelledby="addContestantIntoTableModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addContestantIntoTableModalLabel">
                Thêm thí sinh vào bảng
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="search" className="form-label">
                  Tìm kiếm thí sinh
                </label>
                <input
                  type="text"
                  id="search"
                  className="form-control"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-primary mt-2"
                  onClick={handleSearch}
                >
                  Tìm kiếm
                </button>
              </div>
              <div className="table-responsive">
                <table className="table table-hover table-striped">
                  <thead>
                    <tr>
                      <th>Chọn</th>
                      <th>Tên thí sinh</th>
                      <th>Số báo danh</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contestants.map((contestant) => (
                      <tr key={contestant.id}>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedContestants.includes(contestant.id)}
                            onChange={() => handleCheckboxChange(contestant)}
                          />
                        </td>
                        <td>{contestant.name}</td>
                        <td>{contestant.number}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Hủy
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSaveContestants} // Lưu thí sinh vào bảng
              >
                Lưu thí sinh
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default CompetitionCategoryManagement;
