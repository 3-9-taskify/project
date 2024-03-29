import { useAuth } from "@/contexts/AuthContext";
import styles from "./UserDropdownMenu.module.scss";
import classNames from "classnames/bind";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

export default function UserDropdownMenu() {
  const router = useRouter();
  const { logout } = useAuth();

  function handleLogOut() {
    logout();
    router.push("/");
  }

  return (
    <div
      className={cx("dropdown-menu")}
      onClick={e => {
        e.stopPropagation();
      }}>
      <button onClick={handleLogOut}>
        <span className={cx("text")}>로그아웃</span>
      </button>
      <button
        onClick={() => {
          router.push("/mypage");
        }}>
        <span className={cx("text")}>내 정보</span>
      </button>
      <button
        onClick={() => {
          router.push("/mydashboard");
        }}>
        <span className={cx("text")}>내 대시보드</span>
      </button>
    </div>
  );
}
