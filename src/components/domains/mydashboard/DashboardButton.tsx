import styles from "./DashboardButton.module.scss";
import classNames from "classnames/bind";

import Dashboard, { DashboardProp } from "@/components/commons/Dashboard/Dashboard";
import Image from "next/image";

const cx = classNames.bind(styles);

function DashboardButton({ ...prop }: DashboardProp) {
  return (
    <button className={cx("dashboard-btn")} type="button">
      <Dashboard {...prop} />
      <Image src="/assets/icon/ic-arrow-forward.svg" alt="왼쪽 화살표 아이콘" width={18} height={18} />
    </button>
  );
}

export default DashboardButton;
