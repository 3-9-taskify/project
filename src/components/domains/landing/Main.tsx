import React from "react";
import styles from "./Main.module.scss";
import classNames from "classnames/bind";
import { landing1, landing2, landing3, landing4, landing5 } from "./Main-assets/index";
import Image from "next/image";

const cx = classNames.bind(styles);

export default function Main() {
  return (
    <div className={cx("container")}>
      {/* section1 */}
      <section className={cx("large-box")}>
        <div className={cx("landing1-text-container")}>
          <p>Point 1</p>
          <h2>
            일의 우선순위를 <br />
            관리하세요
          </h2>
        </div>
        <div className={cx("landing1-img-container")}>
          <Image src={landing1} fill alt="dashboardImg" />
        </div>
      </section>

      {/* section2 */}
      <section className={cx("large-box")}>
        <div className={cx("landing2-container")}>
          <div className={cx("landing2-img-container")}>
            <Image src={landing2} fill alt="addToDoImg" />
          </div>
          <div className={cx("landing2-text-container")}>
            <p>Point 2</p>
            <h2>
              해야 할 일을 <br />
              등록하세요
            </h2>
          </div>
        </div>
      </section>

      {/* section3 */}
      <section className={cx("landing3-container")}>
        <h2>생산성을 높이는 다양한 설정 ⚡</h2>
        <div className={cx("small-box-container")}>
          {/* 1 */}
          <div className={cx("small-box")}>
            <div className={cx("small-box-img-container")}>
              <div className={cx("small-box-img-item1")}>
                <Image src={landing3} fill alt="dashboardSettingImg" />
              </div>
            </div>
            <div className={cx("small-box-text-container")}>
              <h2>대시보드 설정</h2>
              <p>대시보드 사진과 이름을 변경할 수 있어요.</p>
            </div>
          </div>
          {/* 2 */}
          <div className={cx("small-box")}>
            <div className={cx("small-box-img-container")}>
              <div className={cx("small-box-img-item2")}>
                {" "}
                <Image src={landing4} fill alt="inviteImg" />
              </div>
            </div>
            <div className={cx("small-box-text-container")}>
              <h2>초대</h2>
              <p>새로운 팀원을 초대할 수 있어요.</p>
            </div>
          </div>
          {/* 3 */}
          <div className={cx("small-box")}>
            <div className={cx("small-box-img-container")}>
              <div className={cx("small-box-img-item3")}>
                {" "}
                <Image src={landing5} fill alt="MemberListImg" />
              </div>
            </div>
            <div className={cx("small-box-text-container")}>
              <h2>구성원</h2>
              <p>구성원을 초대하고 내보낼 수 있어요.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
