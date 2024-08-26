import axios from "axios";
import { useEffect, useState } from "react";
import AccountModal from '../modals/account';

const Account = () => {

  const [accounts, setAccounts] = useState(null);
  const [formData, setFormData] = useState({
    accountName: '',
    token: '',
    password: '',
    role: '',
    createdAt: ''
  });

  const fetchAccounts = async () => {
    try {
      const result = await axios.get('http://localhost:3001/accounts');
      setAccounts(result.data);
    }
    catch (error) {
      console.log(error);
    }
  };

    useEffect(() => {
      fetchAccounts();
    }, []);

  return (
    <>
      <div className="container mt-5">
        <h3 className="text-center mb-4">Quản lý tài khoản</h3>
        <div className="d-flex justify-content-between mb-3">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Tìm kiếm" />
            <button className="btn btn-primary">Tra cứu</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong>Danh sách tài khoản</strong>
            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#accountModal">+</button>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tài khoản</th>
                  <th>Token</th>
                  <th>Mật khẩu</th>
                  <th>Vai trò</th>
                  <th>Ngày tạo</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {accounts && accounts.map((acc, index) => (
                  <tr key={acc.id}>
                    <td>{index + 1}</td>
                    <td>{acc.accountName}</td>
                    <td>{acc.token}</td>
                    <td>{acc.password}</td>
                    <td>{acc.role}</td>
                    <td>{acc.createdAt}</td>
                    <td><button className="btn btn-danger btn-sm">Xóa</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AccountModal formData={formData} setFormData={setFormData} fetchAccounts={fetchAccounts}/>
    </>
  );
}

export default Account;