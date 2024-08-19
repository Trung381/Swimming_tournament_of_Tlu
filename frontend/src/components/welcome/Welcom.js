import { useNavigate } from 'react-router-dom';

const Welcom = (props) => {
  let navigate = useNavigate();
  const goToLoginPage = (e) => {
    e.preventDefault();
    navigate('/login');
  };
  return (
    <div style={{margin: '50px 120px'}}>
      <h2>NGƯỜI DÙNG CHƯA ĐĂNG NHẬP</h2>
      <button onClick={goToLoginPage}>Đi đến trang đăng nhập</button>
    </div>
  );
}

export default Welcom;