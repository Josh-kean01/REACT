import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="d-flex justify-content-center pt-4">
        <a className="px-3" href="https://www.facebook.com/">
          <iconify-icon
            icon="akar-icons:facebook-fill"
            width="50"
          ></iconify-icon>
        </a>
        <a className="px-3" href="https://www.instagram.com/">
          <iconify-icon
            icon="akar-icons:instagram-fill"
            width="50"
          ></iconify-icon>
        </a>
        <a className="px-3" href="https://github.com/">
          <iconify-icon icon="akar-icons:github-fill" width="50"></iconify-icon>
        </a>
        <a className="px-3" href="https://www.linkedin.com/">
          <iconify-icon icon="logos:linkedin-icon" width="50"></iconify-icon>
        </a>
        <a className="px-3" href="https://twitter.com/">
          <iconify-icon icon="twitter-icon" width="50"></iconify-icon>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
