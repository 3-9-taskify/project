import ResponseBtn from "@/components/commons/Buttons/ResponseButton";
import styles from "./DashboradEditMemberBox.module.scss";
import classNames from "classnames/bind";
import PageChangeButton from "@/components/commons/Buttons/PageChangeButton";
import Image from "next/image";
import { useModal } from "@ebay/nice-modal-react";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getDashBoardMembers,
  getDashBoardMembersQueryKey,
  getDashboardInvitations,
  getDashboardInvitationsQueryKey,
} from "@/api/getEditData";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { deleteInvitations, deleteMembers } from "../../../api/deleteDashBoradData";
import InviteModal from "@/components/commons/Modals/InviteModal/InviteModal";
import extractInitial from "@/utils/extractInitial";
import getUsersMe from "@/api/getUsersMe";

const cx = classNames.bind(styles);

interface Props {
  title: string;
  isMemberEdit: boolean;
}

interface Members {
  nickname: string;
  email: string;
  id: number;
  profileImageUrl: string;
  isOwner: boolean;
  invitee?: {
    email: string;
  };
}

interface Invitation {
  id: number;
  invitee: {
    email: string;
  };
}

export default function DashboradEditMemberBox({ title, isMemberEdit }: Props) {
  const modal = useModal(InviteModal);
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const [isownerId, setIsOwnerId] = useState(0);

  const { dashboardid } = useParams();

  const { data: userMeData } = useQuery({
    queryKey: ["userMe"],
    queryFn: () => getUsersMe(),
  });

  const { data: invitationsData } = useQuery({
    queryKey: getDashboardInvitationsQueryKey(dashboardid, page),
    queryFn: () => getDashboardInvitations(dashboardid, page),
    enabled: !isMemberEdit,
    placeholderData: keepPreviousData,
    staleTime: 5000 * 10000,
  });

  const { data: memberData } = useQuery({
    queryKey: getDashBoardMembersQueryKey(dashboardid, page),
    queryFn: () => getDashBoardMembers(dashboardid, page),
    placeholderData: keepPreviousData,
    staleTime: 5000 * 10000,
  });
  const members = memberData?.members;
  const invitedMembers = invitationsData?.invitations.map((invitation: Invitation) => ({
    id: invitation.id,
    invitee: invitation.invitee,
  }));
  const memberList = isMemberEdit ? members : invitedMembers;

  let totalPage = Math.ceil(isMemberEdit ? memberData?.totalCount / 5 : invitationsData?.totalCount / 5);
  if (isNaN(totalPage)) totalPage = 1;

  useEffect(() => {
    const nextPage = page + 1;
    queryClient.prefetchQuery({
      queryKey: getDashBoardMembersQueryKey(dashboardid, nextPage),
      queryFn: () => getDashBoardMembers(dashboardid, nextPage),
    });
  }, [memberData]);

  useEffect(() => {
    const nextPage = page + 1;
    queryClient.prefetchQuery({
      queryKey: getDashboardInvitationsQueryKey(dashboardid, nextPage),
      queryFn: () => getDashboardInvitations(dashboardid, nextPage),
    });
  }, [invitedMembers]);

  const deleteMemberMutation = useMutation({
    mutationFn: (membersId: number) => deleteMembers(membersId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getDashBoardMembersQueryKey(dashboardid, page) });
    },
  });

  const deleteInvitationMutation = useMutation({
    mutationFn: (invitationsId: number) => deleteInvitations(dashboardid, invitationsId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getDashboardInvitationsQueryKey(dashboardid, page) });
    },
  });

  const handelDelteMember = (id: number, name?: string) => {
    const myId = userMeData?.id;
    const ownerId = members?.find((member: any) => member.isOwner)?.userId;
    
    if (myId !== ownerId) return alert("구성원 변경권한이 없습니다");

    if (isMemberEdit) {
      confirm(`${name} 님을 삭제하시겠습니까?`) ? deleteMemberMutation.mutate(id) : false;
    } else {
      confirm(`${name} 님 초대를 취소하시겠습니까?`) ? deleteInvitationMutation.mutate(id) : false;
    }
  };

  return (
    <article className={cx("dashborad-edit-box", { email: !isMemberEdit })}>
      <section className={cx("title-line")}>
        <h2 className={cx("title")}>{title}</h2>
        <div className={cx("title-right-contents")}>
          <p>
            {totalPage} 페이지 중 {page}
          </p>
          <PageChangeButton
            isForward={false}
            disabled={page === 1}
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
          ></PageChangeButton>
          <PageChangeButton
            isForward={true}
            disabled={page >= totalPage}
            onClick={() => {
              setPage((old) => old + 1);
            }}
          ></PageChangeButton>

          {!isMemberEdit && (
            <div className={cx("invite-btn")}>
              <ResponseBtn onClick={modal.show} state="accept" ph={0.7} fs={1.2}>
                <Image src="/assets/icons/ic-plus-box.svg" width={16} height={16} alt="sd" />
                초대 하기
              </ResponseBtn>
            </div>
          )}
        </div>
      </section>
      <h3 className={cx("little-title")}>{isMemberEdit ? "이름" : "이메일"}</h3>

      <ul className={cx("list")}>
        {memberList?.map((member: Members, index: number) => (
          <li className={cx("list-item")} key={`${member.id}_${index}`}>
            {isMemberEdit ? (
              <div className={cx("member-name")}>
                {member.profileImageUrl ? (
                  <Image
                    className={cx("profileImg")}
                    width={38}
                    height={38}
                    alt="프로필 이미지"
                    src={member.profileImageUrl}
                  />
                ) : (
                  <div className={cx("profileImg-none")}>{extractInitial(member.nickname)}</div>
                )}
                {member.nickname}
              </div>
            ) : (
              <>{member.invitee?.email}</>
            )}
            {!member.isOwner && (
              <ResponseBtn
                onClick={() => handelDelteMember(member.id, member.nickname || member.invitee?.email)}
                state="reject"
              >
                {isMemberEdit ? "삭제" : "취소"}
              </ResponseBtn>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
