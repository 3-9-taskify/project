import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../../Input/Input";
import styles from "./ColumnModal.module.scss";
import classNames from "classnames/bind";
import ResponseBtn from "../../Buttons/ResponseButton";
import { useState } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import ModalBackground from "../ModalBackground";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getColumnList, deleteColumn } from "@/components/domains/dashboardid/api/queries";
import { getColumnListQueryKey } from "@/components/domains/dashboardid/api/queryKeys";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

interface Props {
  isEdit?: boolean;
  onCancel: () => void;
  columnId: number;
}

export default NiceModal.create(({ isEdit = false, columnId }: Props) => {
  const modal = useModal();

  return <ColumnModal isEdit={isEdit} onCancel={modal.remove} columnId={columnId} />;
});

function ColumnModal({ isEdit, onCancel, columnId }: Props) {
  const router = useRouter();
  const dashboardId = router.query.dashboardid;
  const queryClient = useQueryClient();
  const [isSureDelete, setIsSureDelete] = useState(false);
  const { control, handleSubmit, formState } = useForm<any>({
    mode: "onChange",
    defaultValues: { columnName: "" },
  });
  // const columnName = watch("columnName");
  console.log(columnId);
  const { data: columnListData } = useQuery({
    queryKey: getColumnListQueryKey(dashboardId),
    queryFn: () => getColumnList(dashboardId),
    staleTime: 300 * 1000,
  });

  const deleteColumnMutation = useMutation({
    mutationFn: () => deleteColumn(columnId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getColumnListQueryKey(dashboardId) });
    },
  });

  function handleDeleteColumn() {
    deleteColumnMutation.mutate();
    onCancel();
  }

  function handelonClickDelete() {
    setIsSureDelete((prev) => !prev);
  }

  const handleOnSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return !isSureDelete ? (
    <>
      <article className={cx("modal-container")}>
        <h2 className={cx("title")}>{isEdit ? "칼럼 관리" : "칼럼 생성"}</h2>
        <form className={cx("form")} onSubmit={handleSubmit(handleOnSubmit)}>
          <Input
            isModal={true}
            type="text"
            name="columnName"
            labelName="이름"
            placeholder="새로운 프로젝트"
            control={control}
            rules={{ required: "프로젝트 이름을 입력해 주세요", validate: { alreadyExist: () => {} } }}
          />
          <div className={cx("btn-line")}>
            <ResponseBtn onClick={onCancel} state="cancel" ph={1.4} fs={1.6}>
              취소
            </ResponseBtn>
            <ResponseBtn type="submit" disabled={!formState.isValid} state="accept" ph={1.4} fs={1.6}>
              {isEdit ? "변경" : "생성"}
            </ResponseBtn>
          </div>
        </form>
        {isEdit && (
          <button type="button" onClick={handelonClickDelete} className={cx("delete-column-btn")}>
            삭제하기
          </button>
        )}
      </article>
      <ModalBackground onClick={onCancel} />
    </>
  ) : (
    <>
      <article className={cx("modal-container")}>
        <h2 className={cx("delete-message")}>칼럼의 모든 카드가 삭제됩니다</h2>
        <div className={cx("btn-line")}>
          <ResponseBtn onClick={handelonClickDelete} state="cancel" ph={1.4} fs={1.6}>
            취소
          </ResponseBtn>
          <ResponseBtn type="submit" state="accept" ph={1.4} fs={1.6} onClick={handleDeleteColumn}>
            삭제
          </ResponseBtn>
        </div>
      </article>
      <ModalBackground onClick={onCancel} />
    </>
  );
}
