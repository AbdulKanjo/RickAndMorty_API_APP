import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { getNextPage, page } = this.props;
    return (
      <footer className="footer">
        <div className="footerBtnContainer">
          <button className="Btn" onClick={() => getNextPage(page)}>
            Next
          </button>
        </div>
      </footer>
    );
  }
}

export default Footer;

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footerBtnContainer">
//         <button className="Btn">Next</button>
//       </div>
//     </footer>
//   );
// };
// export default Footer;
