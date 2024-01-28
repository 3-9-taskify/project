import React from "react";
import ModalBackground from "./ModalBackground";
import classNames from "classnames/bind";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import styles from "./DashboardCreationModal.module.scss";
import ColorList from "@/components/commons/colorList";
import ResponseBtn from "@/components/commons/button/ResponseButton";
import Input from "@/components/commons/Input";

const cx = classNames.bind(styles);

export default function DashboardCreationModal() {
  const { control, handleSubmit } = useForm({ mode: "onChange" });
  // control , handleSubmit필수, { mode: 'onChange' } - onChange 시 error 나옴,

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data); // error 면 submit 안됨 ,SubmitHandler<FieldValues> handleSubmit 안에 들어가는 type 입니다
  };

  return (
    <ModalBackground>
      <div className={cx("container")}>
        <h2>새로운 대시보드</h2>

        <form className={cx("form-container")} onSubmit={handleSubmit(onSubmit)}>
          <div className={cx("error-handle-container")}>
            <Input
              control={control}
              labelName="대시보드 이름"
              name="dashboardTitle"
              placeholder="텍스트를 입력해주세요"
              type="text"
              rules={{
                required: "텍스트를 입력해주세요",
              }}
            />
          </div>
          <ColorList />
          <div className={cx("button-container")}>
            <div className={cx("button-item-container")}>
              <ResponseBtn state="accept" ph={1.4} type="submit">
                생성
              </ResponseBtn>
            </div>
            <div className={cx("button-item-container")}>
              <ResponseBtn state="cancel" ph={1.4}>
                취소
              </ResponseBtn>
            </div>
          </div>
        </form>
      </div>
    </ModalBackground>
  );
}
