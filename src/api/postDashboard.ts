import { axiosInstance } from "./axiosInstance";

export default async function postDashBoard(title: string, color: string, onCancel: () => void) {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Njg5LCJ0ZWFtSWQiOiIyLTkiLCJpYXQiOjE3MDY2ODU1ODcsImlzcyI6InNwLXRhc2tpZnkifQ.LpyKKnBYSkI29ifh2b3uZHhmjc07tGA7DOOnKKP4joI";
  try {
    await axiosInstance.post(
      "https://sp-taskify-api.vercel.app/2-9/dashboards",
      {
        title,
        color: color,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    onCancel();
  } catch (e) {
    throw new Error(`${e}`);
  }
}
