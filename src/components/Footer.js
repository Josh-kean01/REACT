import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="d-flex justify-content-center pt-3">
        <a
          className="px-3"
          href="https://www.facebook.com/joshua.adekunle.31542"
        >
          <iconify-icon icon="ic:outline-facebook" width="50"></iconify-icon>
        </a>
        <a className="px-3" href="https://www.instagram.com/">
          <iconify-icon icon="mdi:instagram" width="50"></iconify-icon>
        </a>
        <a className="px-3" href="https://github.com/">
          <iconify-icon icon="mdi:github" width="50"></iconify-icon>
        </a>
        <a className="px-3" href="https://wa.me/+2349157284517">
          <iconify-icon icon="logos:whatsapp-icon" width="50"></iconify-icon>
        </a>
        <a className="px-3" href="https://twitter.com/">
          <iconify-icon icon="mdi:twitter" width="50"></iconify-icon>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
