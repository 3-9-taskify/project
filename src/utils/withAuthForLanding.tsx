import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";
import { axiosInstance } from "@/api/axiosInstance";

const withAuthForLanding = (WrappedComponent: React.ComponentType) => {
  const AuthenticatedComponent: React.FC = () => {
    const router = useRouter();
    const { accessToken } = useAuth();

    useEffect(() => {
      const checkAuth = async () => {
        try {
          if (accessToken) {
            const response = await axiosInstance.get("dashboards", {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
            const firstDashboardId = response.data.dashboards[0].id;
            router.push(`dashboard/${firstDashboardId}`);
          }
        } catch (error) {
          console.log(error);
        }
      };

      checkAuth();
    }, [accessToken]);

    return <WrappedComponent />;
  };

  return AuthenticatedComponent;
};

export default withAuthForLanding;
