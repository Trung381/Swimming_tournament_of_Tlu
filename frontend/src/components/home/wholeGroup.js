import axios from "axios";
import { useEffect, useState } from "react";

const WholeGroup = (props) => {
  const [wholeGroups, setWholeGroups] = useState([]);
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

  return (
    <>
      <div className="whole-group-container mt-3">
        <div className="table-responsive" style={{ overflowX: "auto", maxHeight: "1000px" }}>
          <table className="table">
            <thead>
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
                  <td>{item.donvi}</td>
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
    </>
  )
};

export default WholeGroup;