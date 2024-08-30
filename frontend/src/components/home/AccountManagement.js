import axios from "axios";
import { useEffect, useState } from "react";
import AccountModal from '../modals/account';

const Account = () => {

  const [accounts, setAccounts] = useState(null);
  const [formData, setFormData] = useState({
    accountName: '',
    role: ''
  });
  const roles = {
    "Admin": "admin",
    "Thư ký": 'thuky',
    "Trọng tài": "trongtai",
    "Giám sát": "giamsat"
  }

  const resetFormData = () => {
    setFormData({
      accountName: '',
      role: ''
    })
  };

  const handleDeleteAccount = (id) => {
    let result = window.confirm('Are you sure you want to delete user with id = ' + id);
    if (result) {
      deleteAccount(id);
    }
  };

  const deleteAccount = async (id) => {
    try {
      let res = await axios.delete('http://localhost:3001/accounts/' + id);
      fetchAccounts();
      alert(res.status + ' ' + res.statusText);
    } catch (error) {
      console.log(error);
    }
  };

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

    const handleEditClick = (data) => {
      setFormData({
        accountName: data.accountName,
        role: roles[data.role]
      })
    }

  return (
    <>
      <div className="account-container mt-3">
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
            <button className="btn btn-success"
              data-bs-toggle="modal" data-bs-target="#accountModal"
              onClick={resetFormData}
            >+</button>
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
                    <td>
                      <button
                        className="btn btn-warning btn-sm"
                        style={{marginRight: '7px'}}
                        data-bs-toggle="modal" data-bs-target="#accountModal"
                        onClick={() => handleEditClick({accountName: acc.accountName, role: acc.role})}
                      >Sửa</button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteAccount(acc.id)}
                        >Xóa</button>
                    </td>
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