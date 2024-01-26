import Image from "next/image";
import React, { useEffect } from "react";
import HeaderImg from "./Header-assets/section.png";
import ResponseBtn from "@/components/commons/button/ResponseButton";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import AnimText from "./AnimText";

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
            <h2>새로운 일정 관리</h2>
            <h2>Taskify</h2>
            {/* Montserrat 폰트사용 개인파일사용 / 전역사용 ? */}
          </div>
          <div className={cx("text-animation-container")}>
            <AnimText delay={1} />
            <motion.div
              className={cx("typing-line")}
              animate={{ opacity: [1, 0] }}
              transition={{ ease: "linear", repeat: Infinity, duration: 1 }}
            />
          </div>
        </div>
        <ResponseBtn state="accept" ph={1.5} pw={14} fs={1.8}>
          로그인하기
        </ResponseBtn>
      </div>
    </header>
  );
}
