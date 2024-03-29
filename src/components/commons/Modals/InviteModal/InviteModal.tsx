import { useForm } from "react-hook-form";
import Input from "../../Input/Input";
import styles from "./InviteModal.module.scss";
import classNames from "classnames/bind";
import ResponseBtn from "../../Buttons/ResponseButton";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import ModalBackground from "../ModalBackground";
import postDashboardInvitations from "@/api/postDashboardInvitations";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";
import { getDashboardInvitationsQueryKey } from "@/api/getEditData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const cx = classNames.bind(styles);

interface Props {
  onCancel: () => void;
}

export default NiceModal.create(() => {
  const modal = useModal();

  return <InviteModal onCancel={modal.remove} />;
});

function InviteModal({ onCancel }: Props) {
  const { accessToken } = useAuth();
  const { control, handleSubmit, formState } = useForm({ mode: "onBlur" });
  const rotuer = useRouter();
  const dashboardId = rotuer.query.dashboardid;

  const queryClient = useQueryClient();

  const inviteMutation = useMutation({
    mutationFn: (data: any) => postDashboardInvitations(dashboardId, data, accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getDashboardInvitationsQueryKey(dashboardId, 1) });
      onCancel();
    },
  });

  function handleOnSubmit(data: any) {
    inviteMutation.mutate(data.columnName);
  }
  return (
    <>
      <article className={cx("modal-container")}>
        <h2 className={cx("title")}>초대하기</h2>
        <form className={cx("form")} onSubmit={handleSubmit(handleOnSubmit)}>
          <Input
            isModal={true}
            type="text"
            name="columnName"
            labelName="이메일"
            placeholder="초대받을 이메일을 입력하세요"
            maxLength={30}
            control={control}
            rules={{
              required: "이메일을 입력해 주세요",
              pattern: { value: /^\S+@\S+$/i, message: "이메일 형식이어야 합니다" },
            }}
          />
          <div className={cx("btn-line")}>
            <ResponseBtn onClick={onCancel} state="cancel" ph={1.4} fs={1.6}>
              취소
            </ResponseBtn>
            <ResponseBtn type="submit" disabled={!formState.isValid} state="accept" ph={1.4} fs={1.6}>
              초대
            </ResponseBtn>
          </div>
        </form>
      </article>
      <ModalBackground onClick={onCancel} />
    </>
  );
}
