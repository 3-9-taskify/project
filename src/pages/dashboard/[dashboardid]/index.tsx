import DashboardLayout from "@/components/domains/dashboardid/DashboardLayout";
import ColumnList from "@/components/domains/dashboardid/ColumnList";
import AddColumn from "@/components/domains/dashboardid/AddColumn";

export default function DashboardPage() {
  return (
    // <Layout>
    <DashboardLayout columnList={<ColumnList />} addColumn={<AddColumn />} />
    // </Layout>
  );
}
