import React from "react";
import CandidateInforForm from "./candidateInforForm.js";

function Register(props) {
  return (
    <>
      <div className='container border' id={props.id} style={{ padding: '20px 0 1px 0', margin: '0 auto'}}>
        {/* <h4 style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}><span style={{minWidth: '289px'}}>GIẢI BƠI TRUYỀN THỐNG</span><span style={{minWidth: '315px'}}> TRƯỜNG ĐẠI HỌC THỦY LỢI </span></h4>
        <h4>TRƯỜNG ĐẠI HỌC THỦY LỢI</h4> */}
        <h4 className="text-center" style={{ marginBottom: '10px' }}>GIẢI BƠI TRUYỀN THỐNG TRƯỜNG ĐẠI HỌC THỦY LỢI</h4>
        <h4 className="text-center" style={{ marginBottom: '0'}}>PHIẾU ĐĂNG KÝ</h4>
        <CandidateInforForm />
        <div className="row justify-content-end mt-3" style={{ margin: '0 28px 25px 0' }}>
          <div className="col-auto">
            <button className="btn btn-danger" style={{marginRight: '7px'}}>Hủy</button>
            <button className="btn btn-primary">Đăng ký</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;