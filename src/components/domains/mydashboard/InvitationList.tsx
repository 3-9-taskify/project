import styles from "./InvitationList.module.scss";
import classNames from "classnames/bind";

import EmptyInvitation from "./ui/EmptyInvitation";
import IvitationTable from "./ui/InvitationTable";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import getReceivedDashboardInvitations from "@/api/getReceivedDashboardInvitations";

const cx = classNames.bind(styles);

export default function InvitedDashboardList() {
  const { data } = useQuery({
    queryKey: ["receivedDashboardInvitationsList"],
    queryFn: () => getReceivedDashboardInvitations(),
  });

  const invitations = data?.invitations || "";
  const isExistDashboard = invitations.length === 0 ? false : true;

  return (
    <article className={cx("invitation")}>
      <h1 className={cx("invitation-title")}>초대받은 대시보드</h1>
      {isExistDashboard ? <IvitationTable invitations={invitations} /> : <EmptyInvitation />}
    </article>
  );
}
