import MydashboardLayout from "@/components/domains/mydashboard/MydashboardLayout";
import DashboardList from "@/components/domains/mydashboard/DashboardsList";
import InvitedDashboardList from "@/components/domains/mydashboard/InvitedDashboardsList";

function Mydashboard() {
  return (
    // <Layout>
    <MydashboardLayout dashboardList={<DashboardList />} invitedDashboardList={<InvitedDashboardList />} />
    // </Layout>
  );
}

export default Mydashboard;
