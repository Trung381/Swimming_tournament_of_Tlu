import React, { useState, useEffect } from "react";
import axios from "axios";

function CompetitionCategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [results, setResults] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const token = sessionStorage.getItem('token');
  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://api.thanglele08.id.vn/Sport/hangmucthidau');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch contestants for the selected category
  const fetchContestants = async (mahangmuc) => {
    try {
      const response = await axios.post(
        'https://api.thanglele08.id.vn/Sport/xembangxephang',
        { mahangmuc: mahangmuc },
        {
          headers: {
            Authorization: token
          },
        }
      );
      let temp = response.data;
      temp.sort((a,b) => a.xephang - b.xephang);
      setResults(temp);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle "Xem" button click
  const handleViewClick = (mahangmuc) => {
    setSelectedCategoryId(mahangmuc);  // Set the selected category ID
    fetchContestants(mahangmuc);  // Fetch contestants for the selected category
  };

  return (
    <div className="category-container mt-3">
      <div className="text-center mb-3">
        <h5 className="fw-bold">Thống kê kết quả theo hạng mục thi đấu</h5>
      </div>

      <div className="card">
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <strong>Danh sách hạng mục thi đấu</strong>
        </div>
        <div className="card-body">
          <div className="table-responsive" style={{ overflowX: "auto", maxHeight: "60vh" }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Hạng mục</th>
                  <th scope="col">Hạng tuổi</th>
                  <th scope="col" className="text-right">Xếp hạng</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={category.mahangmuc}>
                    <td>{index + 1}</td>
                    <td>{category.tenhangmuc}</td>
                    <td>{category.hangtuoi}</td>
                    <td className="text-right">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => handleViewClick(category.mahangmuc)}
                        data-bs-toggle="modal"
                        data-bs-target="#createCategoryModal"
                      >
                        Xem
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for displaying contestant information */}
      <div className="modal fade" id="createCategoryModal" tabIndex="-1" aria-labelledby="createCategoryModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createCategoryModalLabel">Thông tin thí sinh</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
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
                    <th scope="col">Thứ hạng</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr key={result.maketqua}>
                      <th scope="row">{index + 1}</th>
                      <td>{result.sobaodanh}</td>
                      <td>{result.hovatenthisinh}</td>
                      <td>{result.phut}</td>
                      <td>{result.giay}</td>
                      <td>{result.phantramgiay}</td>
                      <td>{result.tong}</td>
                      <td>{result.xephang}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompetitionCategoryManagement;
