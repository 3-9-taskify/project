import React from "react";
import classNames from "classnames/bind";
import styles from "@/components/commons/Button/ResponseButton.module.scss";

interface Props {
  children: React.ReactNode;
  state?: string | number;
<<<<<<< HEAD
  type?: "button" | "submit" | "reset" | undefined;
=======
  pw?: number;
>>>>>>> 7caf33342503c9df5cd9f1eb3878e79d133f6a3e
  ph?: number;
  fs?: number;
}

const cx = classNames.bind(styles);

<<<<<<< HEAD
export default function ResponseBtn({ children, state, type = "button", ph, fs }: Props) {
  return (
    <button className={cx(`${state}`)} type={type} style={{ padding: `${ph}rem 0`, fontSize: `${fs}rem` }}>
=======
export default function ResponseBtn({ children, state, ph, pw, fs }: Props) {
  return (
    <button className={cx(`${state}`)} type="button" style={{ padding: `${ph}rem ${pw}rem`, fontSize: `${fs}rem` }}>
>>>>>>> 7caf33342503c9df5cd9f1eb3878e79d133f6a3e
      {children}
    </button>
  );
}
