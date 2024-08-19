import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SecretaryRoutes = (props) => {
  const navigate = useNavigate();

  const goToPage = (e, page) => {
    e.preventDefault();
    navigate(page);
  }

  return(
    <>
      <div className="header">
        <Link to='/contestant'>Thi sinh</Link>
        <button onClick={(e) => goToPage(e, '/home')}>Trang chủ</button>
        <button onClick={(e) => goToPage(e, '/contestant')}>Thông tin thí sinh</button>
        <button onClick={(e) => goToPage(e, '/table')}>Bảng đấu</button>
        <button onClick={(e) => goToPage(e, '/score')}>Kết quả</button>
        <button onClick={(e) => goToPage(e, '/reward')}>Khen thưởng</button>
      </div>
      <div className="home" style={{height: "300px", backgroundColor: 'lightgreen'}}>
        <h2 style={{width: '70%', margin: '100px auto'}}>Đây là trang chủ của THƯ KÝ</h2>
      </div>
    </>
  );
}

export default SecretaryRoutes;