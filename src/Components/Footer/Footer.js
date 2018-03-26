import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {
      getNextPage,
      getPrevPage,
      togglePickleRick,
      disablePrev
    } = this.props;
    return (
      <footer className="footer">
        <div className="pickleRickContainer">
          <img
            className="pickleRick"
            alt="Pickle Rick"
            onClick={togglePickleRick}
            src="https://pbs.twimg.com/media/C-T3j9EXkAIFBlT.png"
          />
        </div>
        <div className="footerBtnContainer">
          <button className="Btn" disabled={disablePrev} onClick={getPrevPage}>
            Prev
          </button>
        </div>
        <div className="footerBtnContainer">
          <button className="Btn" onClick={getNextPage}>
            Next
          </button>
        </div>
      </footer>
    );
  }
}

export default Footer;
