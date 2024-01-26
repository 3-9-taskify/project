import MydashboardLayout from "@/components/domains/mydashboard/MydashboardLayout";
import DashboardList from "@/components/domains/mydashboard/DashboardsList";
import InvitedDashboardList from "@/components/domains/mydashboard/InvitedDashboardsList";

export default function MydashboardPage() {
  return (
    // <Layout>
    <MydashboardLayout dashboardList={<DashboardList />} invitedDashboardList={<InvitedDashboardList />} />
    // </Layout>
  );
}
