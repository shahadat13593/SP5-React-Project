import "./Header.css";
import { useState } from "react";
import Modal from "./Modal";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const navLists = [
    { listItem: "Services", id: 1 },
    { listItem: "Courses", id: 2 },
    { listItem: "Projects", id: 3 },
    { listItem: "Contact", id: 4 },
  ];

  console.log(showModal);

  const handleModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <header className="header ">
        <div>
          <img src="/image/logo1.png" alt="irnode-logo" className="logo-img" />
        </div>
        <div className="main-nav">
          <ul className="nav-list">
            {navLists.map((item) => (
              <li className="av-list-item " key={item.id}>
                <a href="#" className="nav-item-link">
                  {item.listItem}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="cta-btn-container">
          <button className="cta-btn" onClick={() => setShowModal(true)}>
            Sign Up
          </button>
        </div>
      </header>
      {showModal && (
        <Modal>
          <div className="modal-inside">
            <h2 className="modal-title">Sign Up</h2>

            <form className="form">
              <label>
                <span className="from-title">Email:</span>
                <input type="email" />
              </label>
              <label>
                <span className="from-title">Password:</span>
                <input type="password" />
              </label>

              <div className="btn-box">
                <button className="btn"> submit</button>
              </div>
            </form>

            <div className="btn-box">
              <button onClick={handleModal} className="btn">
                close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Header;
