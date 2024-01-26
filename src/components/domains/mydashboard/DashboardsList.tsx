import styles from "./DashboardsList.module.scss";
import classNames from "classnames/bind";

import { MixButton } from "@/components/commons/button/MixButton";
import DashboardButton from "./DashboardButton";

import { dashboardsListData } from "./mock";

const cx = classNames.bind(styles);

function DashboardList() {
  //mock 데이터를 사용했으니 실제 데이터로 변경해 주세요.
  const dashboards = dashboardsListData.dashboards;
  const isExistDashboard = dashboards === [] ? false : true;

  return (
    <>
      {isExistDashboard &&
        dashboards.map(({ id, title, color, createdByMe }) => (
          <div className={cx("dashboard-btn-container")} key={id}>
            <DashboardButton color={color} isHost={createdByMe}>
              {title}
            </DashboardButton>
          </div>
        ))}
      <div className={cx("dashboard-btn-container")}>
        <MixButton>새로운 대시보드</MixButton>
      </div>
    </>
  );
}

export default DashboardList;
