import { $authHost } from "./index";

export const createBasket = async (device) => {
  const formData = Object.entries(device).reduce(
    (formData, [key, value]) => (
      formData.append(key, JSON.stringify(value)), formData
    ),
    new FormData()
  );
  const { data } = await $authHost.post("/api/basket", formData);
  return data;
};

export const fetchBasket = async (basketId) => {
  const { data } = await $authHost.get("/api/basket", {
    params: {
      basketId,
    },
  });
  return data;
};

export const updateBasket = async (device) => {
  const { data } = await $authHost.put("/api/basket", device);
  return data;
};

export const deleteBasket = async ({ id }) => {
  const { data } = await $authHost.delete("/api/basket", { params: { id } });
  return data;
};
