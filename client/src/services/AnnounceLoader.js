import myAxios from "./myAxios";

export const announceLoader = async () => {
  try {
    const response = await myAxios.get(`/api/announce`);
    return response.data;
  } catch (error) {
    throw new Response("", { status: 405 });
  }
};

export const announceDetailLoader = async ({ params }) => {
  try {
    const response = await myAxios.get(`/api/announce/${params.id}`);
    return response.data;
  } catch (error) {
    throw new Response("", { status: 405 });
  }
};

export const announceIdLoader = async ({ params }) => {
  const reponse = await myAxios.get(`/api/announce/${params.id}`);
  return reponse.data;
};
