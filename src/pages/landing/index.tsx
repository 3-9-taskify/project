import classNames from "classnames/bind";
import React from "react";
import styles from "@/pages/landing/index.module.scss";
import Navbar from "@/components/domains/landing/Navbar";

const cx = classNames.bind(styles);

export default function index() {
  return (
    <div className={cx("container")}>
      <Navbar />
    </div>
  );
}
