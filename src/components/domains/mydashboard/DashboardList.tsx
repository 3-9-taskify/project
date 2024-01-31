import { useState } from "react";

import styles from "./DashboardList.module.scss";
import classNames from "classnames/bind";

import { MixButton } from "@/components/commons/Buttons/MixButton";
import DashboardButton from "./ui/DashboardButton";
import PageChangeButton from "../../commons/Buttons/PageChangeButton";

import { dashboardListData } from "./mock/dashboard-list";

const cx = classNames.bind(styles);

export default function DashboardList() {
  const [currentPage, setCurrentPage] = useState(1);
  const dashboards = dashboardListData.dashboards; // Dashboards Data
  const isExistDashboard = dashboards.length === 0 ? false : true;
  const totalPageCount = Math.ceil(dashboardListData.totalCount / 6);

  const PAGE_SIZE = 5;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentData = dashboards.slice(startIndex, endIndex);

  function handleBackwardPageClick() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }
  function handleForwardPageClick() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  return (
    <article>
      <div className={cx("dashboard-btn-collection")}>
        <div className={cx("dashboard-btn-container")}>
          <MixButton>새로운 대시보드</MixButton>
        </div>
        {currentData.map(({ id, title, color, createdByMe }) => (
          <div className={cx("dashboard-btn-container")} key={id}>
            <DashboardButton id={id} color={color} isHost={createdByMe}>
              {title}
            </DashboardButton>
          </div>
        ))}
      </div>
      {isExistDashboard && (
        <div className={cx("page-change")}>
          <span className={cx("page-change-text")}>{`${totalPageCount} 페이지 중${currentPage}`}</span>
          <span className={cx("page-change-btn")}>
            <PageChangeButton isForward={false} onClick={handleBackwardPageClick} disabled={currentPage === 1} />
            <PageChangeButton onClick={handleForwardPageClick} disabled={endIndex >= dashboards.length} />
          </span>
        </div>
      )}
    </article>
  );
}
