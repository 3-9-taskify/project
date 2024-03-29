import styles from "./Invitation.module.scss";
import classNames from "classnames/bind";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ResponseBtn from "@/components/commons/Buttons/ResponseButton";
import postReceivedDashboardInvitation from "@/api/postReceivedDashboardInvitationRespond";
import { motion } from "framer-motion";

const cx = classNames.bind(styles);

interface InvitationProp {
  title: string;
  inviter: string;
  path: number;
}

export default function Invitation({ title, inviter, path }: InvitationProp) {
  const queryClient = useQueryClient();

  const ReceivedDashboardInvitationMutation = useMutation({
    mutationFn: (data: { isAccepted: boolean; path?: number }) =>
      postReceivedDashboardInvitation(data.isAccepted, data.path),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboardList"] });
      queryClient.invalidateQueries({ queryKey: ["getReceivedDashboardInvitations"] });
      queryClient.invalidateQueries({ queryKey: ["sideBarDashboardList"] });
    },
  });

  return (
    <motion.div
      className={cx("invitation")}
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <span className={cx("invitation-title")}>
        <h1>이름</h1>
        <p>{title}</p>
      </span>
      <span className={cx("invitation-inviter")}>
        <h1>초대자</h1>
        <p>{inviter}</p>
      </span>
      <span className={cx("invitation-btn")}>
        <ResponseBtn
          state="accept"
          ph={0.7}
          onClick={() => {
            ReceivedDashboardInvitationMutation.mutate({ isAccepted: true, path });
          }}
        >
          수락
        </ResponseBtn>
        <ResponseBtn
          state="cancel"
          ph={0.7}
          onClick={() => {
            ReceivedDashboardInvitationMutation.mutate({ isAccepted: false, path });
          }}
        >
          거절
        </ResponseBtn>
      </span>
    </motion.div>
  );
}
