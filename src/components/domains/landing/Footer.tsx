import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import { facebookIcon, instagramIcon, msgIcon } from "./Footer-assets/index";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx("container")}>
      <p>©codeit - 2023</p>
      <div className={cx("info-section")}>
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className={cx("icon-container")}>
        <div className={cx("icon-item")}>
          <Image src={msgIcon} fill alt="message-icon" />
        </div>
        <div className={cx("icon-item")}>
          <Image src={facebookIcon} fill alt="facebook-icon" />
        </div>
        <div className={cx("icon-item")}>
          <Image src={instagramIcon} fill alt="instagram-icon" />
        </div>
      </div>
    </footer>
  );
}
