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
  const [oldCategories, setOldCategories] = useState([]);
  const [deleteList, setDeleteList] = useState([]);
  const [addList, setAddList] = useState([]);


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

  const setEmpty = () => {
    setAddList([]);
    setDeleteList([]);
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let newCategories;
      if (checked) { //tick
        if (!oldCategories.includes(value)) { //Ko co trong ds ban dau => them moi
          setAddList([...addList, value]);
        }
        else { //Co trong ds ban dau ma nhan tick => da co trong ds xoa => bo ra khoi ds xoa
          setDeleteList(deleteList.filter(item => item !== value));
        }
        newCategories = [...formData.mahangmuc, value];
      }
      else { //bo tick
        if (addList.includes(value)) { //Neu co trong ds them => ko co trong ds ban dau => loai kho ds them vao
          setAddList(addList.filter(item => item !== value))
        }
        else { //Neu ko co trong ds them => co trong ds ban dau => them vao ds xoa
          setDeleteList([...deleteList, value]);
        }
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

  const search = async (loading, id = null) => {
    if (loading){
      loading(true);
    }
    try {
      const requestBody = id
        ? { sobaodanh: id, hovaten: null, sodienthoai: null }
        : {
          sobaodanh: searchInput.sobaodanh.trim() === '' ? 0 : searchInput.sobaodanh.trim(),
          hovaten: searchInput.hovaten.trim() === '' ? null : searchInput.hovaten.trim(),
          sodienthoai: searchInput.sodienthoai.trim() === '' ? null : searchInput.sodienthoai.trim()
        };

      const response = await axios.post(`https://api.thanglele08.id.vn/Sport/timkiemtheduthi`, requestBody);

      const categories = transformData(response.data.hangmucthidau);
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
    finally {
      if (loading){
        loading(false);
      }
    }
  };

  const reset = () => {
    setFormData(null);
    setSearchInput({
      sobaodanh: '',
      hovaten: '',
      sodienthoai: ''
    });
  }

  return {
    formData, reset,
    addList, deleteList,
    setAddList, setDeleteList,
    searchInput, setSearchInput,
    isSearchByNameAndPhone,
    changeSearchWay,
    handleChange,
    search,
    setEmpty
  };
};
