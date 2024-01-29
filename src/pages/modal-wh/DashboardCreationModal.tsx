import React, { useState } from "react";
import ModalBackground from "./ModalBackground";
import classNames from "classnames/bind";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import styles from "./DashboardCreationModal.module.scss";
import ColorList from "@/components/commons/colorList";
import ResponseBtn from "@/components/commons/button/ResponseButton";
import Input from "@/components/commons/Input";

const cx = classNames.bind(styles);

export default function DashboardCreationModal() {
  const [color, setColor] = useState("");

  const { control, handleSubmit } = useForm({ mode: "onBlur" });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data); // return 값으로 넘겨주기 (01/29 수정할것)
  };

  return (
    <ModalBackground>
      <div className={cx("container")}>
        <h2>새로운 대시보드</h2>
        <form className={cx("form-container")} onSubmit={handleSubmit(onSubmit)}>
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

          <ColorList setColor={setColor} />
          <div className={cx("button-container")}>
            <div className={cx("button-item-container")}>
              <ResponseBtn state="accept" ph={1.4} type="submit" disabled={Boolean(!color)}>
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
