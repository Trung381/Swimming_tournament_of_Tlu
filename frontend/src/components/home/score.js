// function Score() {
//     return (
//         <div className="container mt-5">
//             <h4 className="text-center">Kết quả thi đấu</h4>
//             <form className="mb-4">
//                 <div className="form-row">
//                     <div className="col-md-3">
//                         <label htmlFor="year">Năm</label>
//                         <select id="year" className="form-select">
//                             <option selected>Chọn năm...</option>
//                             {/* Add options here */}
//                         </select>
//                     </div>
//                     <div className="col-md-3">
//                         <label htmlFor="ageGroup">Hạng tuổi</label>
//                         <select id="ageGroup" className="form-select">
//                             <option selected>Chọn hạng tuổi...</option>
//                             {/* Add options here */}
//                         </select>
//                     </div>
//                     <div className="col-md-3">
//                         <label htmlFor="competition">Giải đấu</label>
//                         <select id="competition" className="form-select">
//                             <option selected>Chọn giải đấu...</option>
//                             {/* Add options here */}
//                         </select>
//                     </div>
//                     <div className="col-md-3">
//                         <label htmlFor="category">Hạng mục</label>
//                         <select id="category" className="form-select">
//                             <option selected>Chọn hạng mục...</option>
//                             {/* Add options here */}
//                         </select>
//                     </div>
//                     <div className="col-md-3">
//                         <label htmlFor="Id">mã hay j đó</label>
//                         <input type="text" id="Id" class="form-control" placeholder="mã j đó đi"></input>
//                     </div>
//                 </div>
//                 <div className="form-row mt-3">
//                     <div className="col-md-12 text-right">
//                         <button type="submit" className="btn btn-primary">Tra cứu</button>
//                     </div>
//                 </div>
//             </form>
//             <div className="card">
//                 <div className="card-header">
//                     Danh sách thí sinh tham gia giải
//                 </div>
//                 <div className="card-body">
//                     <table className="table table-hover">
//                         <thead>
//                             <tr>
//                                 <th scope="col">#</th>
//                                 <th scope="col">Tên thí sinh</th>
//                                 <th scope="col">Phút</th>
//                                 <th scope="col">Giây</th>
//                                 <th scope="col">% Giây</th>
//                                 <th scope="col">Thứ hạng</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <th scope="row">1</th>
//                                 <td>Thí sinh 1</td>
//                                 <td>02</td>
//                                 <td>45</td>
//                                 <td>30%</td>
//                                 <td>1</td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">2</th>
//                                 <td>Thí sinh 2</td>
//                                 <td>03</td>
//                                 <td>15</td>
//                                 <td>50%</td>
//                                 <td>2</td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">2</th>
//                                 <td>Thí sinh 2</td>
//                                 <td>03</td>
//                                 <td>15</td>
//                                 <td>50%</td>
//                                 <td>2</td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">2</th>
//                                 <td>Thí sinh 2</td>
//                                 <td>03</td>
//                                 <td>15</td>
//                                 <td>50%</td>
//                                 <td>2</td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">2</th>
//                                 <td>Thí sinh 2</td>
//                                 <td>03</td>
//                                 <td>15</td>
//                                 <td>50%</td>
//                                 <td>2</td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">2</th>
//                                 <td>Thí sinh 2</td>
//                                 <td>03</td>
//                                 <td>15</td>
//                                 <td>50%</td>
//                                 <td>2</td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">2</th>
//                                 <td>Thí sinh 2</td>
//                                 <td>03</td>
//                                 <td>15</td>
//                                 <td>50%</td>
//                                 <td>2</td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">2</th>
//                                 <td>Thí sinh 2</td>
//                                 <td>03</td>
//                                 <td>15</td>
//                                 <td>50%</td>
//                                 <td>2</td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">2</th>
//                                 <td>Thí sinh 2</td>
//                                 <td>03</td>
//                                 <td>15</td>
//                                 <td>50%</td>
//                                 <td>2</td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">2</th>
//                                 <td>Thí sinh 2</td>
//                                 <td>03</td>
//                                 <td>15</td>
//                                 <td>50%</td>
//                                 <td>2</td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">2</th>
//                                 <td>Thí sinh 2</td>
//                                 <td>03</td>
//                                 <td>15</td>
//                                 <td>50%</td>
//                                 <td>2</td>
//                             </tr>
//                             {/* Repeat rows as needed */}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             <footer className="mt-5 text-center">
//                 <p>© 2024 Đoàn thanh niên, Trường Đại học Thủy lợi</p>
//             </footer>
//         </div>




//     );
// }

// export default Score;






import React from 'react';

function Score() {
    return (
        <div className="container mt-5">
            <h4 className="text-center">Kết quả thi đấu</h4>
            <form className="mb-4">
                <div className="row">
                    <div className="col-md-5">
                        <label htmlFor="year">Năm</label>
                        <select id="year" className="form-select">
                            <option defaultValue>Chọn năm...</option>
                            {/* Add options here */}
                        </select>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="ageGroup">Hạng tuổi</label>
                        <select id="ageGroup" className="form-select">
                            <option defaultValue>Chọn hạng tuổi...</option>
                            {/* Add options here */}
                        </select>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="competition">Giải đấu</label>
                        <select id="competition" className="form-select">
                            <option defaultValue>Chọn giải đấu...</option>
                            {/* Add options here */}
                        </select>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="category">Hạng mục</label>
                        <select id="category" className="form-select">
                            <option defaultValue>Chọn hạng mục...</option>
                            {/* Add options here */}
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="Id">Mã hay j đó</label>
                        <input type="text" id="Id" className="form-control" placeholder="Mã j đó đi"></input>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12 text-end">
                        <button type="submit" className="btn btn-primary">Tra cứu</button>
                    </div>
                </div>
            </form>
            <div className="card">
                <div className="card-header">
                    Danh sách thí sinh tham gia giải
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{overflowX: 'auto', maxHeight: '200px'}}>
                        <table className="table table-hover m-0">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên thí sinh</th>
                                    <th scope="col">Phút</th>
                                    <th scope="col">Giây</th>
                                    <th scope="col">% Giây</th>
                                    <th scope="col">Thứ hạng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Thí sinh 1</td>
                                    <td>02</td>
                                    <td>45</td>
                                    <td>30%</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Thí sinh 2</td>
                                    <td>03</td>
                                    <td>15</td>
                                    <td>50%</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Thí sinh 2</td>
                                    <td>03</td>
                                    <td>15</td>
                                    <td>50%</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Thí sinh 2</td>
                                    <td>03</td>
                                    <td>15</td>
                                    <td>50%</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Thí sinh 2</td>
                                    <td>03</td>
                                    <td>15</td>
                                    <td>50%</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Thí sinh 2</td>
                                    <td>03</td>
                                    <td>15</td>
                                    <td>50%</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Thí sinh 2</td>
                                    <td>03</td>
                                    <td>15</td>
                                    <td>50%</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Thí sinh 2</td>
                                    <td>03</td>
                                    <td>15</td>
                                    <td>50%</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Thí sinh 2</td>
                                    <td>03</td>
                                    <td>15</td>
                                    <td>50%</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Thí sinh 2</td>
                                    <td>03rwgedg  wgssgsdfsgdfdbfgbfnn</td>
                                    <td>1   cvsdfgvdfbgdbdgbfgbnfgnfhnfhnfhn</td>
                                    <td>50 agfdxvsfbdfbgdbdgbsfbsfb dbdb</td>
                                    <td>2 sgrdvdfbdgbdgbdgbdsfbdfbdbdgb</td>
                                </tr>
                                {/* Repeat rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <footer className="mt-5 text-center">
                <p>© 2024 Đoàn thanh niên, Trường Đại học Thủy lợi</p>
            </footer>
        </div>
    );
}

export default Score;
