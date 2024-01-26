import Image from "next/image";
import React from "react";
import classNames from "classnames/bind";
import styles from "@/components/domains/landing/Navbar.module.scss";
import icon from "./Navbar-assets/logo-icon.svg";
import logoText from "./Navbar-assets/logo-text.svg";

const cx = classNames.bind(styles);

export default function Navbar() {
  return (
    <nav className={cx("container")}>
      <div>
        <Image src={icon} width={29} height={33} alt="logo" />
        <Image src={logoText} width={88} height={22} alt="logo" />
      </div>
      <div className={cx("right-content")}>
        <p>로그인</p>
        <p>회원가입</p>
      </div>
    </nav>
  );
}
