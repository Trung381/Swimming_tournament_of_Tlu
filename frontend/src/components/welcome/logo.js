//navbar component
// import logo_tlu from "../../public/image/logo.png"
// import '../App.css';

function Logo() {
  return (
    <div className="m-2 d-flex justify-content-between align-items-center">
      <div>
        <img src="/image/65.png" className="mx-2" width="100px"/>
        <img src="/image/ten_truong.png" className="mx-2" heigh="38px" />
        {/* <img src="/image/dtn.png" className="mx-2" width="45px"/>
        <img src="/image/hsv.png" className="mx-2" width="45px"/> */}
      </div>
      <div>
        <div>
          <img src="/image/dtn.png" className="mx-2" width="58px" />
          <img src="/image/hsv.png" className="mx-2" width="58px" />
        </div>
        {/* <div>  
          <img src="/image/hsv.png" className="mx-2" width="45px" />
        </div> */}
      </div>
    </div>
  );
}

export default Logo;