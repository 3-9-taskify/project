import classNames from "classnames/bind";
import styles from "./CardDetailHeader.module.scss";

import Image from "next/image";
import CardDetailDropdownMenu from "./CardDetailDropdownMenu";

const cx = classNames.bind(styles);

interface CardDetailHeaderProp {
  title: string;
  cardId: number;
  columnId: number;
  assigneeUserId: number;
  onClick: () => void;
}

export default function CardDetailHeader({ title, onClick, ...props }: CardDetailHeaderProp) {
  return (
    <header className={cx("header")}>
      <h1 className={cx("header-title")}>{title}</h1>
      <span className={cx("header-buttons")}>
        <CardDetailDropdownMenu onClick={onClick} {...props} />
        <button className={cx("header-close")} onClick={onClick}>
          <Image fill src="/assets/icons/ic-close.svg" alt="할 일 카드 모달 닫기 버튼" />
        </button>
      </span>
    </header>
  );
}
