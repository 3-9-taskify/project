import React from "react";
import classNames from "classnames/bind";
import styles from "@/components/commons/Button/ResponseButton.module.scss";

interface Props {
  children: React.ReactNode;
  state?: string | number;
  pw?: number;
  ph?: number;
  fs?: number;
}

const cx = classNames.bind(styles);

// 예정 ) pw 제거 , width 100% (외부컴포넌트로 조정)
export default function ResponseBtn({ children, state, ph, fs }: Props) {
  return (
    <button className={cx(`${state}`)} type="button" style={{ padding: `${ph}rem 0`, fontSize: `${fs}rem` }}>
      {children}
    </button>
  );
}
