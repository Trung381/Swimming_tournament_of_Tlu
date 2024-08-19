import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrganizingCommitteeRoutes = (props) => {
  const navigate = useNavigate();

  const goToPage = (e, page) => {
    e.preventDefault();
    navigate(page);
  }

  return(
    <>
      <div className="header">
        <button onClick={(e) => goToPage(e, '/home')}>Trang chủ</button>
        <button onClick={(e) => goToPage(e, '/contestant')}>Thông tin thí sinh</button>
        <button onClick={(e) => goToPage(e, '/account')}>Tài khoản</button>
        <button onClick={(e) => goToPage(e, '/score')}>Kết quả</button>
        <button onClick={(e) => goToPage(e, '/reward')}>Khen thưởng</button>
      </div>
      <div className="home" style={{height: "300px", backgroundColor: 'lightgreen'}}>
        <h2 style={{width: '70%', margin: '100px auto'}}>Đây là trang chủ của BTC</h2>
      </div>
    </>
  );
}

export default OrganizingCommitteeRoutes;