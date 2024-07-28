import { $authHost, $host } from "./index";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const fetchType = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createDevice = async (device) => {
  const { data } = await $authHost.post("api/device", device);
  return data;
};

export const fetchDevice = async (typeId, page, limit = 9) => {
  const { data } = await $host.get("api/device", {
    params: {
      typeId,
      page,
      limit,
    },
  });
  return data;
};

export const oneFetchDevice = async (id) => {
  const { data } = await $host.get("api/device/" + id);
  return data;
};
