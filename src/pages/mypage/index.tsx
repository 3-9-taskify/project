import ParentContainer from "@/components/commons/ParentContainer/ParentContainer";
import Image from "next/image";
import Link from "next/link";
import styles from "./mypage.module.scss";
import classNames from "classnames/bind";
import Input from "@/components/commons/Input/index";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
const cx = classNames.bind(styles);

export default function Mypage() {
  const { control, handleSubmit } = useForm({ mode: "onChange" });
  // control , handleSubmit필수, { mode: 'onChange' } - onChange 시 error 나옴,

  const onSubmit: SubmitHandler<FieldValues> = data => {
    console.log(data); // error 면 submit 안됨 ,SubmitHandler<FieldValues> handleSubmit 안에 들어가는 type 입니다
  };
  return (
    <ParentContainer>
      <div className={cx("mypage-container")}>
        <div className={cx("mypage-container-go-back")}>
          <Image width={20} height={20} src="/assets/icons/ic-arrow-backward.svg" alt="뒤로가기" />
          <span>돌아가기</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={cx("mypage-container-profile")}>
            <div className={cx("title")}>프로필</div>
            <div className={cx("contents")}>
              <div className={cx("contents-upload-image")}>
                <Image width={30} height={30} src="/assets/icons/ic-plus.svg" alt="이미지 업로드" />
              </div>
              <div className={cx("contents-input-area")}>
                <div className={cx("contents-input-area-email")}>
                  <Input
                    name="email"
                    labelName="이메일"
                    type="email"
                    control={control}
                    placeholder="이메일을 입력해 주세요"
                    rules={{
                      required: "이메일을 입력해 주세요",
                      pattern: { value: /^\S+@\S+$/i, message: "이메일 형식이어야 합니다" },
                    }}
                  />
                </div>
                <div className={cx("contents-input-area-nickname")}>
                  <Input
                    name="nickname"
                    labelName="닉네임"
                    type="text"
                    control={control}
                    placeholder="닉네임을 입력해 주세요"
                  />
                </div>
              </div>
            </div>
            <button className={cx("btn")}>저장</button>
          </div>
          <div className={cx("mypage-container-change-password")}>
            <div className={cx("title")}>비밀번호 변경</div>
            <div className={cx("contents")}>
              <div className={cx("contents-input-area")}>
                <div className={cx("contents-input-area-password")}>
                  <Input
                    name="currentPassword"
                    type="password"
                    labelName="현재 비밀번호"
                    control={control}
                    placeholder="현재 비밀번호 입력"
                    rules={{ required: "비밀번호를 입력해 주세요" }}
                  />
                </div>
                <div className={cx("contents-input-area-password")}>
                  <Input
                    name="newPassword"
                    type="password"
                    labelName="새 비밀번호"
                    control={control}
                    placeholder="새 비밀번호 입력"
                    rules={{ required: "새 비밀번호를 입력해 주세요" }}
                  />
                </div>
                <div className={cx("contents-input-area-password")}>
                  <Input
                    name="password"
                    type="password"
                    labelName="새 비밀번호 확인"
                    control={control}
                    placeholder="새 비밀번호 확인"
                    rules={{ required: "비밀번호 확인을 위해 한번 더 입력해 주세요" }}
                  />
                </div>
              </div>
            </div>
            <button className={cx("btn")}>변경</button>
          </div>
        </form>
      </div>
    </ParentContainer>
  );
}
