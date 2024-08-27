import axios from "axios";
import { useEffect, useState } from "react";

const AccountModal = (props) => {
  const [role, setRole] = useState('');
  const [accountName, setAccountName] = useState('');

  const roles = {
    '': 'Chọn vai trò',
    'admin': 'Admin',
    'trongtai': 'Trọng tài',
    'thuky': 'Thư ký',
    'giamsat': 'Giám sát'
  }

  useEffect(() => {
    setAccountName(props.formData.accountName);
    setRole(props.formData.role);
  }, [props.formData]);

  const handleSelectOneOfRoles = (role) => {
    setRole(role);
  }

  const handleChangeAccountName = (value) => {
    setAccountName(value);
  };

  const resetForm = () => {
    setAccountName('');
    setRole('');
  }

  // Tao tai khoan moi
  const handleCreateNewAccount = async (e) => {
    e.preventDefault();
    try {
      const today = new Date();
      const res = await axios.post('http://localhost:3001/accounts', {
        accountName: accountName,
        token: '',
        password: '*****',
        role: roles[role],
        createdAt: today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear()
      })
      props.fetchAccounts();
      resetForm();
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal fade" id="accountModal" tabIndex="-1" aria-labelledby="accountModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
              <h5 className="modal-title" id="accountModalLabel">Thông tin tài khoản</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="accountName" className="form-label">Tài khoản</label>
                <input type="text" className="form-control" id="accountName" name="accountName"
                  value={accountName}
                  onChange={(e) => handleChangeAccountName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="role" className="form-label">Vai trò</label>
                <select className="form-select" id="role" value={role} onChange={(e) => handleSelectOneOfRoles(e.target.value)}>
                  <option value="">Chọn vai trò</option>
                  <option value="admin">Admin</option>
                  <option value="thuky">Thư ký</option>
                  <option value="trongtai">Trọng tài</option>
                  <option value="giamsat">Giám sát</option>
                </select>
              </div>
              <button type="button" className="btn btn-primary" onClick={e => handleCreateNewAccount(e)}>Button</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountModal;