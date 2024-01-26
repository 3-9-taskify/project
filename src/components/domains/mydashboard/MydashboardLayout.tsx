import { ReactNode } from "react";

type MydashboardLayoutProps = {
  dashboardList: ReactNode;
  invitedDashboardList: ReactNode;
};

function MydashboardLayout({ dashboardList, invitedDashboardList }: MydashboardLayoutProps) {
  return (
    <div>
      {dashboardList}
      {invitedDashboardList}
    </div>
  );
}

export default MydashboardLayout;
