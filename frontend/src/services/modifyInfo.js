import axios from "axios";

const modifyPersonalInfo = async (formData) => {
  try {
    const [year, month, date] = formData.namsinh.split("-");
    const response = await axios.post(`https://api.thanglele08.id.vn/Sport/dieuchinhthongtinthisinh`, {
      sobaodanh: 22,
      hovatenthisinh: formData.hovatenthisinh,
      hovatenphuhuynh: formData.hovatenphuhuynh,
      donvi: formData.donvi,
      lop: formData.lop,
      sodienthoai: formData.sodienthoai,
      namsinh: {
        year: year,
        month: month,
        day: date,
        dayOfWeek: ""
      },
      gioitinh: formData.gioitinh,
      isModify: true,
      email: formData.email
    });
    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const modifyCategory = async (registrationNumber, oldCategories, newCategories) => {
  try {
    const response = await axios.post('https://api.thanglele08.id.vn/Sport/dieuchinhhangmucthidau', {
      sobaodanh: registrationNumber,
      oldmahangmuc: oldCategories,
      newmahangmuc: newCategories
    });
   
    return response.status === 200;
  } catch (error) {
    console.log(error);
  }
};

export const modify = (props) => {
  const {formData, oldCategories, setIsModify} = props;
  if (formData) {
    if (formData.isModify) {
      setIsModify(true);
      return;
    }

    modifyPersonalInfo(formData);
    modifyCategory(formData.sobaodanh, oldCategories, formData.mahangmuc);
  }
};