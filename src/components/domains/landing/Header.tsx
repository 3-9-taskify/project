import Image from "next/image";
import React from "react";
import HeaderImg from "./Header-assets/section.png";
import ResponseBtn from "@/components/commons/button/ResponseButton";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx("container")}>
      <div className={cx("img-container")}>
        <Image src={HeaderImg} fill alt="SectionImg" />
      </div>
      <div className={cx("bottom-content-container")}>
        <div className={cx("text-container")}>
          <div className={cx("text-h2-container")}>
            <h2>새로운 일정 관리&nbsp;</h2>
            <h2>Taskify</h2>
            {/* Montserrat 폰트사용 개인파일사용 / 전역사용 ? */}
          </div>
          <p>나만의 자유로운 일정관리 Taskify</p>
        </div>
        <ResponseBtn state="accept" ph={1.5} pw={14}>
          로그인하기
        </ResponseBtn>
      </div>
    </header>
  );
}
