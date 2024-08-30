//navbar component
// import logo_tlu from "../../public/image/logo.png"
// import '../App.css';

function Logo() {
  return (
    <div className="logo-container m-2 d-flex justify-content-between align-items-center">
      <div>
        <img src="/image/65.png" className="mx-2" width="100px" alt="Đại học Thủy lợi - 65 năm"/>
        <img src="/image/ten_truong.png" className="school-name mx-2" heigh="38px" alt=""/>
      </div>
      <div>
        <div>
          <img src="/image/dtn.png" className="mx-2" width="58px" alt="Đoàn TNCS HCM"/>
          <img src="/image/hsv.png" className="mx-2" width="58px" alt="Hội sinh viên"/>
        </div>
      </div>
    </div>
  );
}

export default Logo;