import "./Footer.css";

function Footer() {
  const fLink = [
    { linkText: "Services", id: 1 },
    { linkText: "Courses", id: 2 },
    { linkText: "About us", id: 3 },
  ];

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-col-box">
          <div className="footer-first">
            <a href="#">
              <img
                src="image/logo1.png"
                alt="irnode logo"
                className="footer-logo"
              />
            </a>
            <div>
              <p className="copyright">
                Copyright &copy; <span class="year">2022</span> by Irnode, Inc.
                All rights reserved.
              </p>
            </div>
          </div>

          <div className="col">
            <p className="footer-heading">Contact us</p>
            <address className="address-box">
              <p className="address-text">
                Green Akshay Plaza, 1st Floor, Satmasjid Road 146/G , 59 (New,
                Dhaka 1209)
              </p>

              <p>
                <a href="tell:415-201-6370" className="footer-link">
                  415-201-6370
                </a>
              </p>
              <br />
              <p>
                <a href="mailto:" className="footer-link">
                  irnode@gmail.com
                </a>
              </p>
            </address>
          </div>

          <div className="col">
            <p className="footer-heading">Company</p>
            <ul className="col-list">
              {fLink.map((link) => (
                <li className="av-list-item " key={link.id}>
                  <a href="#" className="footer-link-c ">
                    {link.linkText}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
