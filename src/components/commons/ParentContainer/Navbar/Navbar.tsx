import Image from "next/image";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import { membersMockData } from "./navbarMembersMockData";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);
const MAX_DISPLAY_PC = 4;
const MAX_DISPLAY_TABLET = 2;

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1199);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const displayedMembers = membersMockData.members.slice(0, isTablet ? MAX_DISPLAY_TABLET : MAX_DISPLAY_PC);
  const remainingMembersCount = membersMockData.totalCount - displayedMembers.length;

  function handleDropDownMenu() {
    setIsDropdownOpen(!isDropdownOpen);
  }
  function extractInitial(nickname: string) {
    return nickname[0].toUpperCase();
  }

  return (
    <div className={cx("navbar")}>
      <div className={cx("navbar-title")}>비브리지</div>
      <div className={cx("navbar-utils")}>
        <div className={cx("navbar-action-btns")}>
          <button className={cx("manage")}>
            <Image className={cx("img")} width={20} height={20} src="/assets/icons/ic-gear.svg" alt="관리 아이콘" />
            <span className={cx("text")}>관리</span>
          </button>
          <button className={cx("invite")}>
            <Image className={cx("img")} width={20} height={20} src="/assets/icons/ic-plus-box.svg" alt="초대 아이콘" />
            <span className={cx("text")}>초대하기</span>
          </button>
        </div>

        <div className={cx("navbar-member")}>
          {displayedMembers.map((member, index) =>
            member.profileImageUrl ? (
              <div
                className={cx("navbar-member-list")}
                style={{ position: "relative", right: `${index}rem`, backgroundColor: "white" }}>
                <Image fill src={member.profileImageUrl} className={cx("navbar-member-list-img")} alt="멤버 이미지" />
              </div>
            ) : (
              <div className={cx("navbar-member-list")} style={{ position: "relative", right: `${index}rem` }}>
                <span className={cx("navbar-member-list-nickname")}>{extractInitial(member.nickname)}</span>
              </div>
            ),
          )}
          {membersMockData.totalCount > displayedMembers.length && (
            <div
              className={cx("navbar-member-list")}
              style={{ position: "relative", right: `${displayedMembers.length}rem` }}>
              <span className={cx("navbar-member-list-count")}>+{remainingMembersCount}</span>
            </div>
          )}
        </div>

        <div className={cx("navbar-user")} onClick={handleDropDownMenu}>
          <div className={cx("navbar-user-circle")}>
            <span className={cx("navbar-user-circle-nickname")}>B</span>
          </div>
          <div className={cx("navbar-user-name")}>배유철</div>

          {isDropdownOpen && (
            <div className={cx("navbar-user-dropdown-menu")}>
              <button>
                <span className={cx("text")}>로그아웃</span>
              </button>
              <button>
                <span className={cx("text")}>내 정보</span>
              </button>
              <button>
                <span className={cx("text")}>내 대시보드</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
