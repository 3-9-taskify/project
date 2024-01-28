import React from "react";
import classNames from "classnames/bind";
import styles from "@/components/commons/Button/ResponseButton.module.scss";

interface Props {
  children: React.ReactNode;
  state?: string | number;
  type?: "button" | "submit" | "reset" | undefined;
  ph?: number;
  fs?: number;
}

const cx = classNames.bind(styles);

export default function ResponseBtn({ children, state, type = "button", ph, fs }: Props) {
  return (
    <button className={cx(`${state}`)} type={type} style={{ padding: `${ph}rem 0`, fontSize: `${fs}rem` }}>
      {children}
    </button>
  );
}
