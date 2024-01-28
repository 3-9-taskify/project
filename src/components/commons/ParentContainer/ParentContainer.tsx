import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./ParentContainer.module.scss";
import classNames from "classnames/bind";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

export default function ParentContainer({ children }: { children: ReactNode }) {
  return (
    <div className={cx("container")}>
      <Sidebar />
      <div className={cx("contents")}>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
