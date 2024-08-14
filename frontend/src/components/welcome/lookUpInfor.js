import React from "react";
import CandidateInforForm from "./candidateInforForm.js";

function LookUpInfor(props) {
  return (
    <>
      <div className='container border' id={props.id} style={{ padding: '20px 0 1px 0', margin: '0 auto'}}>
        <h4 className="text-center" style={{ marginBottom: '30px' }}>THÔNG TIN DỰ THI CỦA THÍ SINH</h4>
        <div className="row justify-content-center mt-2">
          <div className="col-auto" style={{ width: '48%', padding: 0 }}>
            <input type="text" className="form-control" placeholder="Nhập thông tin" style={{ borderColor: 'black', borderRadius: '8px 0 0 8px' }} />
          </div>
          <div className="col-auto" style={{ padding: 0 }}>
            <button className="btn btn-primary" style={{ borderRadius: '0 8px 8px 0', borderLeft: 'none' }}>Tra cứu</button>
          </div>
          <p className="text-center mt-2">
            *Chưa có thông tin, nhấn <a href="#"><b>Đăng ký</b></a>
          </p>
        </div>
        <CandidateInforForm />
        <div className="row justify-content-end mt-3" style={{ margin: '0 28px 25px 0' }}>
          <div className="col-auto">
            <button className="btn btn-primary">Yêu cầu thay đổi thông tin</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LookUpInfor;