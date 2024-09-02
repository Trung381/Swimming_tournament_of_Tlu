const SearchByNameAndPhone = (props) => {
  const { changeSearchInput, changeSearchWay, search, searchInput } = props;
  return (
    <>
      <div className="row justify-content-center mt-2">
        <input
          type="text"
          className="form-control"
          name="hovaten"
          placeholder="Nhập họ tên cần tìm..."
          style={{ borderColor: 'black', borderRadius: '8px', width: '36%', marginRight: '5px' }}
          value={searchInput.hovaten}
          onChange={(e) => changeSearchInput(e)}
        />
        <input
          type="text"
          className="form-control"
          name="sodienthoai"
          placeholder="Nhập số điện thoại cần tìm..."
          style={{ borderColor: 'black', borderRadius: '8px', width: '36%', marginLeft: '5px' }}
          value={searchInput.sodienthoai}
          onChange={(e) => changeSearchInput(e)}
        />
      </div>
      <div className="row justify-content-center mt-2">
        <button
          className="btn btn-primary"
          style={{ borderRadius: '8px', width: '100px', marginTop: '5px' }}
          onClick={() => search()}
        >Tra cứu</button>
      </div>
      <p className="text-center mt-2" style={{ marginBottom: '0', paddingBottom: '0' }}>Hoặc <a href="" onClick={(e) => changeSearchWay(e)}><b>Tìm theo số báo danh</b></a></p>
    </>
  )
};

export default SearchByNameAndPhone;