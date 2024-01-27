import Image from "next/image";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import Dashboard from "../Dashboard/Dashboard";

const cx = classNames.bind(styles);

//mock 데이터를 사용했으니 실제 데이터로 변경해 주세요.
const dashboardData = [
  {
    title: "프로젝트 관리",
    color: "#7AC555",
  },
  {
    title: "취업 관리",
    color: "#760DDE",
  },
  {
    title: "과제 관리",
    color: "#FFA500",
  },
  {
    title: "식단 관리",
    color: "#76A5EA",
  },
  {
    title: "아무거나 관리",
    color: "#E876EA",
  },
];

export default function Sidebar() {
  return (
    <div className={cx("sidebar")}>
      <div className={cx("logo")}>
        <Image fill src="/assets/images/logo-all.png" alt="로고" />
      </div>
      <div className={cx("dash-boards")}>
        <div className={cx("header")}>
          <span className={cx("title")}>Dash Boards</span>
          <button className={cx("create-btn")}>
            <Image fill src="/assets/icons/ic-plus-box.svg" alt="대시보드 생성" />
          </button>
        </div>

        <div className={cx("contents")}>
          {dashboardData.map(data => (
            <div className={cx("board-list")}>
              <Dashboard color={data.color} isHost={true} isSidebar={true}>
                {data.title}
              </Dashboard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
