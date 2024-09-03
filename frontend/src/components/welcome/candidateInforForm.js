// import React from 'react';

// function CandidateInforForm() {
//   return (
//     // <div className="container border p-3 mt-3" style={{ maxWidth: 900, borderColor: '#2b80ff' }}>
//     <div className="container mt-3" style={{ maxWidth: 900 }}>
//       <form className="mt-4" >
//         <div className='row' >
//           <div className='col-md-4'>
//             <h5>I. Thông tin cá nhân</h5>
//           </div>
//         </div>
//         <div className='row' style={{display: 'flex', justifyContent: 'space-evenly'}}>
//           <div className="form-group">
//             <label htmlFor="formName"><h6>1. Họ tên thí sinh</h6></label>
//             <input type="text" className="form-control" id="formName" style={{borderColor: 'black'}}/>
//           </div>
//           <div className="form-group">
//             <label htmlFor="formIdNumber"><h6>2. Số định danh</h6></label>
//             <input type="text" className="form-control" id="formIdNumber" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="formEmail"><h6>3. Email</h6></label>
//             <input type="email" className="form-control" id="formEmail" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="formBirthYear"><h6>4. Năm sinh</h6></label>
//             <select className="form-select" id="formBirthYear">
//             <option selected>Chọn năm sinh</option>
//               <option>2005</option>
//               <option>2006</option>
//               <option>2007</option>
//             </select>
//           </div>
//           <div className='form-group'>
//             <label htmlFor="formGender"><h6>5. Giới tính</h6></label>
//             <div>
//               <div className="form-check form-check-inline">
//                 <input className="form-check-input" type="radio" name="gender" id="male" />
//                 <label className="form-check-label" htmlFor="male">Nam</label>
//               </div>
//               <div className="form-check form-check-inline">
//                 <input className="form-check-input" type="radio" name="gender" id="female" />
//                 <label className="form-check-label" htmlFor="female">Nữ</label>
//               </div>
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="formParentName"><h6>6. Họ tên phụ huynh</h6></label>
//             <input type="text" className="form-control" id="formParentName" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="formUnit"><h6>7. Đơn vị</h6></label>
//             <select className="form-select" id="formUnit">
//             <option selected>Chọn đơn vị</option>
//               <option>Khoa CNTT</option>
//               <option>TT Đào tạo quốc tế</option>
//               <option>Khoa KT và QL</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="formClass"><h6>8. Lớp</h6></label>
//             <select className="form-select" id="formClass">
//               <option selected>Chọn lớp</option>
//               <option>64CNTT</option>
//               <option>64CNTT</option>
//               <option>64CNTT</option>
//             </select>
//           </div>
//         </div>

//         <div className='row'>
//           <div className='col-md-4'>
//             <h5>II. Nội dung thi đấu</h5>
//           </div>
//         </div>
//         <div className='row' style={{display: 'flex', justifyContent: 'space-evenly'}}>
//           <div className="form-group">
//             <label><h6>1. Hạng mục</h6></label>
//             <div>
//               <div className="form-check">
//                 <input className="form-check-input" type="checkbox" id="category1" />
//                 <label className="form-check-label" htmlFor="category1">Hạng mục 1</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="checkbox" id="category2" />
//                 <label className="form-check-label" htmlFor="category2">Hạng mục 2</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="checkbox" id="category3" />
//                 <label className="form-check-label" htmlFor="category3">Hạng mục 3</label>
//               </div>
//             </div>
//           </div>
//           <div className="form-group">
//             <label><h6>2. Hạng tuổi</h6></label>
//             <div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="ageGroup" id="ageGroup1" />
//                 <label className="form-check-label" htmlFor="ageGroup1">0 - 8 tuổi</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="ageGroup" id="ageGroup2" />
//                 <label className="form-check-label" htmlFor="ageGroup2">9 - 12 tuổi</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="ageGroup" id="ageGroup3" />
//                 <label className="form-check-label" htmlFor="ageGroup3">13 - 15 tuổi</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="ageGroup" id="ageGroup4" />
//                 <label className="form-check-label" htmlFor="ageGroup4">16 - 18 tuổi</label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CandidateInforForm;



//--------------------------------------------------------- just add 

// import React from 'react';

// function CandidateInforForm({ formData, handleChange }) {
//   return (
//     <div className="container mt-3" style={{ maxWidth: 900 }}>
//       <div className="mt-4">
//         <div className='row'>
//           <div className='col-md-4'>
//             <h5>I. Thông tin cá nhân</h5>
//           </div>
//         </div>
//         <div className='row' style={{display: 'flex', justifyContent: 'space-evenly'}}>
//           <div className="form-group">
//             <label htmlFor="formName"><h6>1. Họ tên thí sinh</h6></label>
//             <input type="text" className="form-control" id="formName" name="name" value={formData.name} onChange={handleChange} style={{borderColor: 'black'}}/>
//           </div>
//           <div className="form-group">
//             <label htmlFor="formIdNumber"><h6>2. Số định danh</h6></label>
//             <input type="text" className="form-control" id="formIdNumber" name="idNumber" value={formData.idNumber} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="formEmail"><h6>3. Email</h6></label>
//             <input type="email" className="form-control" id="formEmail" name="email" value={formData.email} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="formBirthYear"><h6>4. Năm sinh</h6></label>
//             <select className="form-select" id="formBirthYear" name="birthYear" value={formData.birthYear} onChange={handleChange}>
//               <option selected>Chọn năm sinh</option>
//               <option value="2005">2005</option>
//               <option value="2006">2006</option>
//               <option value="2007">2007</option>
//             </select>
//           </div>
//           <div className='form-group'>
//             <label htmlFor="formGender"><h6>5. Giới tính</h6></label>
//             <div>
//               <div className="form-check form-check-inline">
//                 <input className="form-check-input" type="radio" name="gender" id="male" value="Nam" checked={formData.gender === "Nam"} onChange={handleChange}/>
//                 <label className="form-check-label" htmlFor="male">Nam</label>
//               </div>
//               <div className="form-check form-check-inline">
//                 <input className="form-check-input" type="radio" name="gender" id="female" value="Nữ" checked={formData.gender === "Nữ"} onChange={handleChange}/>
//                 <label className="form-check-label" htmlFor="female">Nữ</label>
//               </div>
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="formParentName"><h6>6. Họ tên phụ huynh</h6></label>
//             <input type="text" className="form-control" id="formParentName" name="parentName" value={formData.parentName} onChange={handleChange}/>
//           </div>
//           <div className="form-group">
//             <label htmlFor="formUnit"><h6>7. Đơn vị</h6></label>
//             <select className="form-select" id="formUnit" name="unit" value={formData.unit} onChange={handleChange}>
//               <option selected>Chọn đơn vị</option>
//               <option value="Khoa CNTT">Khoa CNTT</option>
//               <option value="TT Đào tạo quốc tế">TT Đào tạo quốc tế</option>
//               <option value="Khoa KT và QL">Khoa KT và QL</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="formClass"><h6>8. Lớp</h6></label>
//             <select className="form-select" id="formClass" name="class" value={formData.class} onChange={handleChange}>
//               <option selected>Chọn lớp</option>
//               <option value="64CNTT">64CNTT</option>
//               <option value="64CNTT">64CNTT</option>
//               <option value="64CNTT">64CNTT</option>
//             </select>
//           </div>
//         </div>

//         <div className='row'>
//           <div className='col-md-4'>
//             <h5>II. Nội dung thi đấu</h5>
//           </div>
//         </div>
//         <div className='row' style={{display: 'flex', justifyContent: 'space-evenly'}}>
//           <div className="form-group">
//             <label><h6>1. Hạng mục</h6></label>
//             <div>
//               <div className="form-check">
//                 <input className="form-check-input" type="checkbox" id="category1" name="categories" value="Hạng mục 1" onChange={handleChange}/>
//                 <label className="form-check-label" htmlFor="category1">Hạng mục 1</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="checkbox" id="category2" name="categories" value="Hạng mục 2" onChange={handleChange}/>
//                 <label className="form-check-label" htmlFor="category2">Hạng mục 2</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="checkbox" id="category3" name="categories" value="Hạng mục 3" onChange={handleChange}/>
//                 <label className="form-check-label" htmlFor="category3">Hạng mục 3</label>
//               </div>
//             </div>
//           </div>
//           <div className="form-group">
//             <label><h6>2. Hạng tuổi</h6></label>
//             <div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="ageGroup" id="ageGroup1" value="0 - 8 tuổi" checked={formData.ageGroup === "0 - 8 tuổi"} onChange={handleChange}/>
//                 <label className="form-check-label" htmlFor="ageGroup1">0 - 8 tuổi</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="ageGroup" id="ageGroup2" value="9 - 12 tuổi" checked={formData.ageGroup === "9 - 12 tuổi"} onChange={handleChange}/>
//                 <label className="form-check-label" htmlFor="ageGroup2">9 - 12 tuổi</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="ageGroup" id="ageGroup3" value="13 - 15 tuổi" checked={formData.ageGroup === "13 - 15 tuổi"} onChange={handleChange}/>
//                 <label className="form-check-label" htmlFor="ageGroup3">13 - 15 tuổi</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="ageGroup" id="ageGroup4" value="16 - 18 tuổi" checked={formData.ageGroup === "16 - 18 tuổi"} onChange={handleChange}/>
//                 <label className="form-check-label" htmlFor="ageGroup4">16 - 18 tuổi</label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CandidateInforForm;










import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CandidateInforForm({ formData, handleChange }) {

  const [categories, setCategories] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://api.thanglele08.id.vn/Sport/hangmucthidau');
      setCategories(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [formData]);

  const isChecked = (id) => {
    const categoriesOfContestant = formData.mahangmuc;
    return categoriesOfContestant && categoriesOfContestant.includes(id);
  };

  return (
    <div className="container mt-3" style={{ maxWidth: 900 }}>
      <div className="mt-4">
        <div className='row'>
          <div className='col'>
            <label><b>I. Thông tin cá nhân</b></label>
          </div>
        </div>
        <div className='personal-info row d-flex justify-content-evenly'>
          <div className="form-group">
            <label htmlFor="formName">1. Họ tên thí sinh</label>
            <input 
              type="text" className="form-control" id="formName" name="hovatenthisinh" 
              value={formData.hovatenthisinh} 
              style={{borderColor: 'black'}}
              onChange={e => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formEmail">2. Email</label>
            <input 
              type="email" className="form-control" id="formEmail" name="email" 
              value={formData.email}
              onChange={e => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formPhone">3. Số điện thoại</label>
            <input
              type="phone" className="form-control" id="formPhone" name="sodienthoai" 
              value={formData.sodienthoai}
              onChange={e => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formBirthday">4. Ngày sinh</label>
            <input 
              type="date" className="form-control" id="formBirthday" name="namsinh" 
              value={formData.namsinh === undefined ? null : formData.namsinh}
              onChange={e => handleChange(e)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="formGender">5. Giới tính</label>
            <div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" type="radio" name="gioitinh" id="male" value="Nam" 
                  checked={formData.gioitinh.includes('Nam')} 
                  onChange={e => handleChange(e)}
                />
                <label className="form-check-label" htmlFor="male">Nam</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" type="radio" name="gioitinh" id="female" value="Nữ" 
                  checked={formData.gioitinh.includes('Nữ')}
                  onChange={e => handleChange(e)}
                />
                <label className="form-check-label" htmlFor="female">Nữ</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="formParentName">6. Họ tên phụ huynh</label>
            <input 
              type="text" className="form-control" id="formParentName" name="hovatenphuhuynh" 
              value={formData.hovatenphuhuynh} 
              onChange={e => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formUnit">7. Đơn vị</label>
            <input 
              type="text" className="form-control" id="formUnit" name="donvi" 
              value={formData.donvi} 
              onChange={e => handleChange(e)}
            />
            {/* <select className="form-select" id="formUnit" name="donvi" value={formData.donvi} onChange={handleChange}>
              <option value="" disabled>Chọn đơn vị</option>
              <option value="Khoa CNTT">Khoa CNTT</option>
              <option value="TT Đào tạo quốc tế">TT Đào tạo quốc tế</option>
              <option value="Khoa KT và QL">Khoa KT và QL</option>
            </select> */}
          </div>
          <div className="form-group">
            <label htmlFor="formClass">8. Lớp</label>
            <input 
              type="text" className="form-control" id="formClass" name="lop" 
              value={formData.lop} 
              onChange={e => handleChange(e)}
            />
            {/* <select className="form-select" id="formClass" name="lop" value={formData.lop} onChange={handleChange}>
              <option value="" disabled>Chọn lớp</option>
              <option value="64CNTT">64CNTT</option>
              <option value="64CNTT">64CNTT</option>
              <option value="64CNTT">64CNTT</option>
            </select> */}
          </div>
          <div className='form-group'></div>
        </div>

        <div className='row'>
          <div className='col'>
            <label><b>II. Nội dung thi đấu</b></label>
          </div>
        </div>
        <div className='row'>
          <div className="form-group">
            <label>1. Hạng mục</label>
            <div className='categories-container d-flex flex-wrap' >
              {categories && categories.map((category) => (
                  <div className="form-check" key={category.mahangmuc} style={{width: '30%', minWidth: '300px'}}>
                    <input
                      className="form-check-input" type="checkbox" id={category.mahangmuc} name="hangmuc"
                      value={category.mahangmuc} 
                      onChange={e => handleChange(e)}
                      checked={
                        isChecked(category.mahangmuc)
                      }
                    />
                    <label className="form-check-label" htmlFor={category.mahangmuc} >{category.tenhangmuc}{category.hangtuoi!=="" && <span> - {category.hangtuoi} tuổi</span>}</label>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateInforForm;
