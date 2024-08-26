// import React from "react";

// function AddContestantIntoTable() {
//   return(
//     <>
//       <div class="modal fade" id="addContestantIntoTableModal" tabindex="-1" aria-labelledby="addParticipantModalLabel" aria-hidden="true">
//         <div class="modal-dialog modal-lg">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="addParticipantModalLabel">Thêm thí sinh vào bảng ...</h5>
//               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//               <div class="input-group mb-3">
//                 <input type="text" class="form-control" placeholder="Tìm kiếm thí sinh"/>
//                 <button class="btn btn-primary">Tra cứu</button>
//               </div>
//               <table class="table table-bordered text-center">
//                 <thead>
//                   <tr class="table-primary">
//                     <th>Chọn</th>
//                     <th>STT</th>
//                     <th>Họ và tên</th>
//                     <th>Số báo danh</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td><input type="checkbox"/></td>
//                     <td>1</td>
//                     <td>Nguyễn Văn A</td>
//                     <td>1</td>
//                   </tr>
//                   <tr>
//                     <td><input type="checkbox"/></td>
//                     <td>2</td>
//                     <td>Lê Văn B</td>
//                     <td>2</td>
//                   </tr>
//                   <tr>
//                     <td><input type="checkbox"/></td>
//                     <td>3</td>
//                     <td>Trần Văn C</td>
//                     <td>3</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
//               <button type="button" class="btn btn-primary">Lưu</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddContestantIntoTable;


import React, { useState } from "react";
import axios from "axios";

function AddContestantIntoTable({ onAddContestants, selectedContestants }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [contestants, setContestants] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/candidates?search=${searchTerm}`);
      setContestants(response.data);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm thí sinh:", error);
    }
  };

  const handleCheckboxChange = (contestant) => {
    onAddContestants(contestant);
  };

  return (
    <div className="modal fade" id="addContestantIntoTableModal" tabIndex="-1" aria-labelledby="addParticipantModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addParticipantModalLabel">Thêm thí sinh vào bảng ...</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm thí sinh"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleSearch}>
                Tra cứu
              </button>
            </div>
            <table className="table table-bordered text-center">
              <thead>
                <tr className="table-primary">
                  <th>Chọn</th>
                  <th>STT</th>
                  <th>Họ và tên</th>
                  <th>Số báo danh</th>
                </tr>
              </thead>
              <tbody>
                {contestants.map((contestant, index) => (
                  <tr key={contestant.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedContestants.includes(contestant.id)}
                        onChange={() => handleCheckboxChange(contestant)}
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>{contestant.name}</td>
                    <td>{contestant.number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Đóng
            </button>
            <button type="button" className="btn btn-primary" onClick={() => alert('Lưu thành công!')}>
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContestantIntoTable;
