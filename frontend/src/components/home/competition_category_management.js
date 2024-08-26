// import React from "react";

// function competition_category_management() {
//   return(
//     <>
//       <div class="container mt-4">
//         <div class="text-center mb-3">
//           <h4 class="fw-bold">Quản lý hạng mục thi đấu</h4>
//         </div>
    
//         <div class="row mb-3">
//           <div class="col-md-4">
//             <label for="year" class="form-label">Năm</label>
//             <select id="year" class="form-select">
//               <option selected>Chọn năm</option>
//               <option value="1">2023</option>
//               <option value="2">2024</option>
//             </select>
//           </div>
//           <div class="col-md-4">
//             <label for="competition" class="form-label">Giải đấu</label>
//             <select id="competition" class="form-select">
//               <option selected>Chọn giải đấu</option>
//               <option value="1">Giải A</option>
//               <option value="2">Giải B</option>
//             </select>
//           </div>
//           <div class="col-md-4">
//             <label for="age-group" class="form-label">Hạng tuổi</label>
//             <select id="age-group" class="form-select">
//               <option selected>Chọn hạng tuổi</option>
//               <option value="1">U18</option>
//               <option value="2">U20</option>
//             </select>
//           </div>
//         </div>
    
//         <div class="new-board-btn text-center mb-3">
//           <button class="btn btn-link">➕ Bảng mới</button>
//         </div>

        
//         <div class="board">
//           <div style={{display: 'flex', justifyContent: 'space-between'}}>
//             <div class="board-header">Bảng: Hạng mục A</div>
//               <div class="d-flex justify-content-between mb-2">
//                 <button class="btn btn-outline-danger">Xóa bảng</button>
//                 <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#addContestantIntoTableModal">Thêm thí sinh</button>
//               </div>
//             </div>
//           </div>

//         <div class="board">
//           <div style={{display: 'flex', justifyContent: 'space-between'}}>
//             <div class="board-header">Bảng: 50m đơn nam</div>
//             <div class="d-flex justify-content-between mb-2">
//               <button class="btn btn-outline-danger">Xóa bảng</button>
//               <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#addContestantIntoTableModal">Thêm thí sinh</button>
//             </div>
//           </div>
//           <table class="table  text-center">
//             <thead>
//               <tr class="table-primary">
//                 <th>STT</th>
//                 <th>Họ và tên</th>
//                 <th>Số báo danh</th>
//                 <th>Hành động</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Nguyễn Văn A</td>
//                 <td>1</td>
//                 <td><button class="btn btn-outline-danger btn-sm">Xóa</button></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default competition_category_management;



import React, { useState, useEffect } from "react";
import axios from "axios";
import AddContestantIntoTable from "../modals/addContestantIntoTable.js";

function CompetitionCategoryManagement() {
  const [year, setYear] = useState("");
  const [competition, setCompetition] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [boards, setBoards] = useState([]);
  const [selectedContestants, setSelectedContestants] = useState([]);

  useEffect(() => {
    // Fetch initial data if needed
    const fetchBoards = async () => {
      try {
        const response = await axios.get("http://localhost:3001/competition_category");
        setBoards(response.data);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu bảng:", error);
      }
    };

    fetchBoards();
  }, []);

  const handleCreateBoard = async () => {
    try {
      const newBoard = {
        year,
        competition,
        ageGroup,
        category: "Hạng mục mới", // Tên hạng mục có thể được thay đổi theo ý bạn
      };
      const response = await axios.post("http://localhost:3001/competition_category", newBoard);
      setBoards([...boards, response.data]);
      alert("Tạo bảng thành công!");
    } catch (error) {
      console.error("Lỗi khi tạo bảng:", error);
    }
  };

  const handleDeleteBoard = async (boardId) => {
    try {
      await axios.delete(`http://localhost:3001/competition_category/${boardId}`);
      setBoards(boards.filter(board => board.id !== boardId));
      alert("Xóa bảng thành công!");
    } catch (error) {
      console.error("Lỗi khi xóa bảng:", error);
    }
  };

  const handleAddContestants = (contestant) => {
    if (selectedContestants.includes(contestant.id)) {
      setSelectedContestants(selectedContestants.filter(id => id !== contestant.id));
    } else {
      setSelectedContestants([...selectedContestants, contestant.id]);
    }
  };

  const handleSaveContestants = async (boardId) => {
    try {
      await axios.post(`http://localhost:3001/competition_category/${boardId}/contestants`, {
        contestants: selectedContestants,
      });
      alert("Lưu thí sinh vào bảng thành công!");
    } catch (error) {
      console.error("Lỗi khi lưu thí sinh:", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="text-center mb-3">
        <h4 className="fw-bold">Quản lý hạng mục thi đấu</h4>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="year" className="form-label">Năm</label>
          <select
            id="year"
            className="form-select"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="" selected>Chọn năm</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="competition" className="form-label">Giải đấu</label>
          <select
            id="competition"
            className="form-select"
            value={competition}
            onChange={(e) => setCompetition(e.target.value)}
          >
            <option value="" selected>Chọn giải đấu</option>
            <option value="1">Giải A</option>
            <option value="2">Giải B</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="age-group" className="form-label">Hạng tuổi</label>
          <select
            id="age-group"
            className="form-select"
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
          >
            <option value="" selected>Chọn hạng tuổi</option>
            <option value="1">U18</option>
            <option value="2">U20</option>
          </select>
        </div>
      </div>

      <div className="new-board-btn text-center mb-3">
        <button className="btn btn-link" onClick={handleCreateBoard}>
          ➕ Bảng mới
        </button>
      </div>

      {boards.map((board) => (
        <div className="board mb-3" key={board.id}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="board-header">Bảng: {board.category}</div>
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
                      onClick={() => handleDeleteBoard(contestant.id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <AddContestantIntoTable
        onAddContestants={handleAddContestants}
        selectedContestants={selectedContestants}
      />
    </div>
  );
}

export default CompetitionCategoryManagement;
