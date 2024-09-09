import React, { useState, useEffect } from "react";
import axios from "axios";

function CompetitionCategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [results, setResults] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [category, setCategory] = useState('...');
  const [all, setAll] = useState([]);
  const [titles, setTitles] = useState([]);

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
      temp.sort((a, b) => a.xephang - b.xephang);
      setResults(temp);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle "Xem" button click
  const handleViewClick = (category) => {
    setSelectedCategoryId(category.mahangmuc);  // Set the selected category ID
    fetchContestants(category.mahangmuc);  // Fetch contestants for the selected category
    if (category.hangtuoi.trim() != '') {
      setCategory(category.tenhangmuc + ' (Độ tuổi: ' + category.hangtuoi + ')');
    }
    else {
      setCategory(category.tenhangmuc);
    }
  };

  const printAll = () => {
    const ids = [...categories];
    const titles = categories.map((item) => {
      if (item.hangtuoi.trim() != '') {
        return category.tenhangmuc + ' (Độ tuổi: ' + category.hangtuoi + ')';
      } else {
        return category.tenhangmuc;
      }
    });
    setTitles(titles);
    const res = [];
    ids.forEach(elem => {
      fetchContestants(elem.mahangmuc);
      res.push(results);
    });

    setAll(res);

    console.log(all);

    const printAll = document.getElementById("printAll");
    const printWindow = window.open('');
    printWindow.document.write(`
      <html>
        <head>
          <style>
            div {
              margin: 30px 20px;
              font-family: 'Quicksand', sans-serif;
              font-size: 14px;
            }
            .title {
              font-size: 16px !important;
              margin-bottom: 15px;
              text-align: center;
            }
            table, th, td {
              border: 1px solid black;
              border-collapse: collapse;
              padding: 5px 10px;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div>
            ${printAll.outerHTML}
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    };
  }

  const print = () => {
    const printContent = document.getElementById("printContent");
    const printWindow = window.open('');
    printWindow.document.write(`
      <html>
        <head>
          <style>
            div {
              margin: 30px 20px;
              font-family: 'Quicksand', sans-serif;
              font-size: 14px;
            }
            .title {
              font-size: 16px !important;
              margin-bottom: 15px;
              text-align: center;
            }
            table, th, td {
              border: 1px solid black;
              border-collapse: collapse;
              padding: 5px 10px;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div>
            <h1 class='title'>BẢNG KẾT QUẢ BƠI ${category.toUpperCase()}</h1>
            ${printContent.outerHTML}
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    };
  }

  return (
    <div className="category-container mt-3">
      <div className="text-center mb-3">
        <h5 className="fw-bold">Thống kê kết quả theo hạng mục thi đấu</h5>
      </div>

      <div className="card">
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <strong>Danh sách hạng mục thi đấu</strong>
          <button className="btn btn-primary" onClick={() => printAll()}>In tất cả</button>
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
                        onClick={() => handleViewClick(category)}
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
              <b className="modal-title" id="createCategoryModalLabel">Hạng mục: {category}</b>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <table className="table table-hover mt-3" id="printContent">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Số báo danh</th>
                    <th scope="col" style={{ padding: '5px 70px' }}>Họ và tên thí sinh</th>
                    <th scope="col" style={{ padding: '5px 20px' }}>Phút</th>
                    <th scope="col" style={{ padding: '5px 20px' }}>Giây</th>
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
                      <td style={{ textAlign: 'left' }}>{result.hovatenthisinh}</td>
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
              <button className="btn btn-primary" onClick={() => print()}>In bảng</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="allModal" tabIndex="-1" aria-labelledby="createCategoryModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body" id="printAll">
              {all.map((items, index) => (
                <div key={index}>
                  <h1 class='title'>BẢNG KẾT QUẢ BƠI {titles[index].toUpperCase()}</h1>
                  <table className="table table-hover mt-3">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Số báo danh</th>
                        <th scope="col" style={{ padding: '5px 70px' }}>Họ và tên thí sinh</th>
                        <th scope="col" style={{ padding: '5px 20px' }}>Phút</th>
                        <th scope="col" style={{ padding: '5px 20px' }}>Giây</th>
                        <th scope="col">Phần trăm giây</th>
                        <th scope="col">Tổng</th>
                        <th scope="col">Thứ hạng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((result, index) => (
                        <tr key={result.maketqua}>
                          <th scope="row">{index + 1}</th>
                          <td>{result.sobaodanh}</td>
                          <td style={{ textAlign: 'left' }}>{result.hovatenthisinh}</td>
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
              ))}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              <button className="btn btn-primary" onClick={() => print()}>In bảng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompetitionCategoryManagement;
