import Navbar from "../BaseConatiner/Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./ParentContainer.module.scss";
import classNames from "classnames/bind";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

const cx = classNames.bind(styles);
const NoSSR = dynamic(() => import("../BaseConatiner/Navbar/Navbar"), { ssr: false });

export default function ParentContainer({ children }: { children: ReactNode }) {
  return (
    <div className={cx("container")}>
      <Sidebar />
      <div className={cx("contents")}>
        <NoSSR />
        {children}
      </div>
    </div>
  );
}
