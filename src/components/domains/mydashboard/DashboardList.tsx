import { useEffect, useState } from "react";

import styles from "./DashboardList.module.scss";
import classNames from "classnames/bind";

import { MixButton } from "@/components/commons/Buttons/MixButton";
import DashboardButton from "./ui/DashboardButton";
import PageChangeButton from "../../commons/Buttons/PageChangeButton";

import { dashboardListData } from "./mock/dashboard-list";
import axios from "axios";
import NiceModal from "@ebay/nice-modal-react";
import Modal from "@/components/commons/Modals/DashboardCreationModal/DashboardCreationModal";

const cx = classNames.bind(styles);

export default function DashboardList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [user, setUser] = useState(null);
  const dashboards = dashboardListData.dashboards; // Dashboards Data
  const isExistDashboard = dashboards.length === 0 ? false : true;
  const totalPageCount = Math.ceil(dashboardListData.totalCount / 6);

  const PAGE_SIZE = 5;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentData = dashboards.slice(startIndex, endIndex);

  async function getMe() {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Njg5LCJ0ZWFtSWQiOiIyLTkiLCJpYXQiOjE3MDY2NzgwMzEsImlzcyI6InNwLXRhc2tpZnkifQ.xTJzppjh39utbp7V6-yYsFFXYzDmDT4jFUxabGtVZlY";

    try {
      const res = await axios.get("https://sp-taskify-api.vercel.app/2-9/users/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const nextUser = res.data;
      setUser(nextUser);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getMe();
  }, []);

  function handleBackwardPageClick() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }
  function handleForwardPageClick() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  const showModal = () => {
    NiceModal.show(Modal);
  };

  return (
    <article>
      <div className={cx("dashboard-btn-collection")}>
        <div className={cx("dashboard-btn-container")}>
          <MixButton onClick={showModal}>새로운 대시보드</MixButton>
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
