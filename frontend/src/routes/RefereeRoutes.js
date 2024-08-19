import React from 'react';
import { useNavigate } from 'react-router-dom';

const RefereeRoutes = (props) => {
  const navigate = useNavigate();

  const goToPage = (e, page) => {
    e.preventDefault();
    navigate(page);
  }

  return(
    <>
      <div className="header">
        <button onClick={(e) => goToPage(e, '/home')}>Trang chủ</button>
        <button onClick={(e) => goToPage(e, '/score')}>Kết quả</button>
      </div>
      <div className="home" style={{height: "300px", backgroundColor: 'lightgreen'}}>
        <h2 style={{width: '70%', margin: '100px auto'}}>Đây là trang chủ của GIÁM KHẢO</h2>
      </div>
    </>
  );
}

export default RefereeRoutes;