import axios from "axios";
import { useEffect, useState } from "react";

const WholeGroup = (props) => {
  const [wholeGroups, setWholeGroups] = useState([]);
  const role = sessionStorage.getItem('role');
  const fetchWholeGroups = async () => {
    try {
      const response = await axios.get('https://api.thanglele08.id.vn/Sport/xemketquatoandoan', {
        headers: {
          Authorization: sessionStorage.getItem('token')
        }
      });
      const temp = [...response.data];
      temp.sort((a, b) => a.xephang - b.xephang);
      setWholeGroups(temp);
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchWholeGroups();
  }, []);

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
            <h1 class='title'>BẢNG THỐNG KÊ KẾT QUẢ TOÀN ĐOÀN</h1>
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
    <>
      <div className="whole-group-container mt-3">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <strong>Danh sách thống kê toàn đoàn</strong>
            {role == 1 && <button className="btn btn-primary" onClick={() => print()}>In danh sách</button>}
          </div>
          <div className="card-body">
            <div className="table-responsive" style={{ overflowX: "auto", maxHeight: "60vh" }}>
              <table className="table" id="printContent">
                <thead >
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Đơn vị</th>
                    <th scope="col">Số lượng tham gia</th>
                    <th scope="col">Giải nhất</th>
                    <th scope="col">Giải nhì</th>
                    <th scope="col">Giải ba</th>
                    <th scope="col">Tiếp sức</th>
                    <th scope="col">Tổng điểm</th>
                    <th scope="col">Xếp hạng</th>
                  </tr>
                </thead>
                <tbody>
                  {wholeGroups.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td style={{textAlign: 'left'}}>{item.donvi}</td>
                      <td>{item.nguoithamgia}</td>
                      <td>{item.giainhat}</td>
                      <td>{item.giainhi}</td>
                      <td>{item.giaiba}</td>
                      <td>{item.tiepsuc}</td>
                      <td>{item.tongdiem}</td>
                      <td>{item.xephang}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default WholeGroup;