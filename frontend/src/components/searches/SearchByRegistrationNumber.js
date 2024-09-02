const SearchByRegistrationNumber = (props) => {
  const {changeSearchInput, changeSearchWay, search, searchInput} = props;
  return (
    <>
      <div className="row justify-content-center mt-2">
        <div className="col-auto" style={{ width: '48%', padding: 0 }}>
          <input
            type="text"
            className="form-control mt-0"
            name="sobaodanh"
            placeholder="Nhập số báo danh cần tìm..."
            style={{ borderColor: 'black', borderRadius: '8px 0 0 8px' }}
            value={searchInput.sobaodanh}
            onChange={(e) => changeSearchInput(e)}
          />
        </div>
        <div className="col-auto" style={{ padding: 0 }}>
          <button
            className="btn btn-primary"
            style={{ borderRadius: '0 8px 8px 0', borderLeft: 'none' }}
            onClick={() => search()}
          >Tra cứu</button>
        </div>
        <p className="text-center mt-2" style={{ marginBottom: '0', paddingBottom: '0' }}>Hoặc <a href="" onClick={(e) => changeSearchWay(e)}><b>Tìm theo tên và số điện thoại</b></a></p>
      </div>
    </>
  )
};

export default SearchByRegistrationNumber;