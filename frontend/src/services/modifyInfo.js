import axios from "axios";
import { useSearch } from "./searchInfo";

export const useModify = (props) => {
  const { setEmpty } = useSearch();

  const modifyPersonalInfo = async (formData) => {
    try {
      const response = await axios.post(`https://api.thanglele08.id.vn/Sport/dieuchinhthongtinthisinh`, {
        sobaodanh: formData.sobaodanh,
        hovatenthisinh: formData.hovatenthisinh,
        hovatenphuhuynh: formData.hovatenphuhuynh,
        donvi: formData.donvi,
        lop: formData.lop,
        sodienthoai: formData.sodienthoai,
        namsinh: formData.namsinh,
        gioitinh: formData.gioitinh,
        isModify: true,
        email: formData.email
      }, {
        headers: {
          Authorization: sessionStorage.getItem('token')
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const modifyCategory = async (registrationNumber, deleteList, addList) => {
    addList.forEach(async (item) => {
      try {
        const response = await axios.post('https://api.thanglele08.id.vn/Sport/dieuchinhhangmucthidau', {
          sobaodanh: registrationNumber,
          oldmahangmuc: null,
          newmahangmuc: item
        }, {
          headers: {
            Authorization: sessionStorage.getItem('token')
          }
        });
      } catch (error) {
        console.log(error);
      }
    });

    deleteList.forEach(async (item) => {
      try {
        const response = await axios.post('https://api.thanglele08.id.vn/Sport/dieuchinhhangmucthidau', {
          sobaodanh: registrationNumber,
          oldmahangmuc: item,
          newmahangmuc: null
        }, {
          headers: {
            Authorization: sessionStorage.getItem('token')
          }
        });
      } catch (error) {
        console.log(error);
      }
    });
  };

  const modify = async (props) => {
    const { formData, deleteList, addList, loading } = props;
    try {
      if (loading) {
        loading(true);
      }
      if (formData) {
        await modifyPersonalInfo(formData);
        await modifyCategory(formData.sobaodanh, deleteList, addList);
        setEmpty();
        // alert(result1 && result2 ? 'Chinh sua thanh cong' : 'Chinh sua that bai');
      }
    } catch (error) {
      console.log(error);
    } finally {
      if (loading) {
        loading(false);
      }
    }
    
  };

  return {
    modify
  }
}