import { useForm } from "react-hook-form";
import Input from "../../input/Input";
import styles from "./ColumnModal.module.scss";
import classNames from "classnames/bind";
import ResponseBtn from "../../button/ResponseButton";

const cx = classNames.bind(styles);

interface Props {
  isEdit: boolean;
  isOpen?: () => void;
}

export default function ColumnModal({ isEdit, isOpen }: Props) {
  const { control, handleSubmit } = useForm({ mode: "onChange" });

  function handleOnSubmit(data: any) {
    console.log(data);
  }
  return (
    <>
      <h2 className={cx("title")}>{isEdit ? "칼럼 관리" : "칼럼 생성"}</h2>
      <form className={cx("form")} onSubmit={handleSubmit(handleOnSubmit)}>
        <Input type="text" name="columnName" labelName="이름" placeholder="새로운 프로젝트" control={control} />
        <div className={cx("btn-line")}>
          <ResponseBtn state="cancel" ph={1.4} fs={1.6}>
            취소
          </ResponseBtn>
          <ResponseBtn state="accept" ph={1.4} fs={1.6}>
            {isEdit ? "변경" : "생성"}
          </ResponseBtn>
        </div>
      </form>
      {isEdit && <button className={cx("delete-column-btn")}>삭제하기</button>}
    </>
  );
}
