import { ReactNode } from "react";
import styles from "./ProgressTag.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ProgressTag({ children }: { children: ReactNode }) {
  return (
    <div className={cx("progress-tag")}>
      <span className={cx("circle")}></span>
      <span className={cx("text")}>{children}</span>
    </div>
  );
}

export default ProgressTag;
