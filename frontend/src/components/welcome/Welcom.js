import Banner from './banner';

const Welcom = (props) => {
  return (
    <div style={{margin: '50px 120px'}}>
      <div>
        <Banner />
      </div>
      <h4>TRANG NÀY CỦA KHÁCH VÃNG LAI</h4>
      <p></p>
      <h4>Nếu là thí sinh dự thi, nhấn "<strong style={{textDecoration: 'underline'}}>Đăng ký dự thi</strong>" để đăng ký thi đấu, hoặc nhấn "<strong style={{textDecoration: 'underline'}}>Tra cứu thông tin dự thi</strong>" để xem lại thông tin đã đăng ký và chỉnh sửa thông tin tối đa 1 lần</h4>
      <p></p>
      <h4>Nếu là thành viên trong ban tổ chức cuộc thi như thư ký, trọng tài,... nhấn "<strong style={{textDecoration: 'underline'}}>Đăng nhập</strong>" bằng tài khoản được cung cấp để thực hiện các chức năng với vai trò của mình</h4>
    </div>
  );
}

export default Welcom;