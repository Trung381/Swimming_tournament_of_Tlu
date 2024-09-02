import React, { useState } from "react";
import CandidateInforForm from "../welcome/candidateInforForm";
import SearchByRegistrationNumber from "../searches/SearchByRegistrationNumber";
import SearchByNameAndPhone from '../searches/SearchByNameAndPhone';
import { modify } from "../../services/modifyInfo";
import { useSearch } from "../../services/searchInfo";

const LookUpInforModal = () => {
  const [isModify, setIsModify] = useState(false);
  const [oldCategories, setOldCategories] = useState([]);
  const { search, formData, searchInput, isSearchByNameAndPhone, setSearchInput, handleChange, changeSearchWay } = useSearch();

  const handleChangeSearchInput = (e) => {
    setSearchInput({
      ...searchInput,
      [e.target.name]: e.target.value
    })
  }

  const handleSearch = async () => {
    search(setOldCategories);
  };

  const handleModify = () => {
    modify({ formData, oldCategories, setIsModify })
  };

  return (
    <>
      <div className="modal fade" id="lookUpInfoModal" tabIndex="-1" aria-labelledby="lookUpInfoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="lookUpInfoModalLabel">Tra cứu thông tin</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='container border' id='search' style={{ padding: '20px 0 1px 0', margin: '0 auto' }}>
                <h4 className="text-center" style={{ marginBottom: '30px' }}>THÔNG TIN DỰ THI CỦA THÍ SINH</h4>
                <div className="search-group" style={{margin: '0 auto'}}>
                  {!isSearchByNameAndPhone
                    && <SearchByRegistrationNumber searchInput={searchInput} changeSearchInput={handleChangeSearchInput} changeSearchWay={changeSearchWay} search={handleSearch} />}
                  {isSearchByNameAndPhone
                    && <SearchByNameAndPhone searchInput={searchInput} changeSearchInput={handleChangeSearchInput} changeSearchWay={changeSearchWay} search={handleSearch} />}
                </div>
                <p className="text-center mt-2">*Chưa có thông tin, nhấn <a href="#registerModal" data-bs-toggle="modal" data-bs-target="#registerModal"><b>Đăng ký</b></a></p>
                {formData && (
                  <div>
                    {isModify && <p style={{ color: 'red' }}>*Bạn đã thay đổi thông tin trước đó và không thể thay đổi tiếp. Nếu cần, hãy liên hệ BTC!</p>}
                    <h6 style={{ paddingLeft: '12px', margin: 0 }}><strong>Số báo danh: {formData.sobaodanh}</strong></h6>
                    <CandidateInforForm formData={formData} handleChange={handleChange} />
                  </div>
                )}
                {(formData && !isModify) && (
                  <div className="row justify-content-end mt-3" style={{ margin: '0 28px 25px 0' }}>
                    <div className="col-auto">
                      <button className="btn btn-primary" onClick={() => handleModify()}>Yêu cầu thay đổi thông tin</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LookUpInforModal;