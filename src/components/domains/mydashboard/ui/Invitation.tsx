import styles from "./Invitation.module.scss";
import classNames from "classnames/bind";

import ResponseBtn from "@/components/commons/button/ResponseButton";

const cx = classNames.bind(styles);

interface InvitationProp {
  title: string;
  inviter: string;
}

export default function Invitation({ title, inviter }: InvitationProp) {
  return (
    <div className={cx("invitation")}>
      <span className={cx("invitation-title")}>{title}</span>
      <span className={cx("invitation-inviter")}>{inviter}</span>
      <span className={cx("invitation-btn")}>
        <ResponseBtn state="accept">수락</ResponseBtn>
        <ResponseBtn state="cancel">거절</ResponseBtn>
      </span>
    </div>
  );
}
