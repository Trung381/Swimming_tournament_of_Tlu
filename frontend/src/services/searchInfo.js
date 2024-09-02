import { useState } from "react";
import axios from "axios";

export const useSearch = () => {
  const [isSearchByNameAndPhone, setIsSearchByNameAndPhone] = useState(false);
  const [formData, setFormData] = useState(null);
  const [searchInput, setSearchInput] = useState({
    sobaodanh: '',
    hovaten: '',
    sodienthoai: ''
  });

  const changeSearchWay = (e) => {
    e.preventDefault();
    setIsSearchByNameAndPhone(!isSearchByNameAndPhone);
    setSearchInput({
      sobaodanh: '',
      hovaten: '',
      sodienthoai: ''
    })
    setFormData(null);
  };

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    if (type === "checkbox") {
      let newCategories;
      if (checked) {
        newCategories = [...formData.mahangmuc, value];
      } else {
        newCategories = formData.mahangmuc.filter(item => item !== value);
      }

      setFormData({
        ...formData,
        mahangmuc: newCategories
      })
    }
    else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const transformData = (datas) => {
    const newData = datas.map((data) => (
      data.mahangmuc
    ));
    return newData;
  };

  const search = async (setOldCategories, id = null) => {
    try {
      const requestBody = id
        ? {sobaodanh: id, hovaten: null, sodienthoai: null}
        : {
          sobaodanh: searchInput.sobaodanh.trim() === '' ? 0 : searchInput.sobaodanh.trim(),
          hovaten: searchInput.hovaten.trim() === '' ? null : searchInput.hovaten.trim(),
          sodienthoai: searchInput.sodienthoai.trim() === '' ? null : searchInput.sodienthoai.trim()
        };

      const response = await axios.post(`https://api.thanglele08.id.vn/Sport/timkiemtheduthi`, requestBody);
  
      const categories = transformData(response.data.mahangmuc);
      setFormData({
        ...response.data,
        mahangmuc: categories
      });
      setOldCategories(categories);
    }
    catch (error) {
      if (error.response.status === 404) {
        alert("Không tìm thấy thí sinh hợp lệ!");
        setFormData(null);
      }
      else {
        alert("Đã có lỗi xảy ra!");
      }
    }
  };

  return {
    formData,
    searchInput, setSearchInput,
    isSearchByNameAndPhone,
    changeSearchWay,
    handleChange,
    search
  };
};
