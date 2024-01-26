import { ReactNode } from "react";

type MydashboardLayoutProps = {
  dashboardList: ReactNode;
  invitedDashboardList: ReactNode;
};

export default function MydashboardLayout({ dashboardList, invitedDashboardList }: MydashboardLayoutProps) {
  return (
    <div>
      {dashboardList}
      {invitedDashboardList}
    </div>
  );
}
