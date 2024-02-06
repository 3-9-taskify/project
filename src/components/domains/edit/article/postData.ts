import { axiosCSRInstance } from "@/api/axiosCSRInstance";

export const postCard = async (data: unknown) => {
  const res = await axiosCSRInstance.post(`cards`, data, {
    headers: { "Content-Type": "application/json" },
  });
};

export const postUploadCardImg = async (columnId: number, Imgurl: unknown) => {
  const res = await axiosCSRInstance.post(
    `columns/${columnId}/card-image'`,
    { imageUrl: Imgurl },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return await res.data;
};
