import { axiosInstance } from "./axiosInstance";

export default async function getReceivedDashboardInvitations(accessToken: string | null) {
  try {
    const res = await axiosInstance.get(`invitations`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        size: 10,
      },
    });

    return res.data;
  } catch (e) {
    throw new Error(`${e}`);
  }
}
