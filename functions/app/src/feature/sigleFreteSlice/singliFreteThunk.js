import customFetch from "../../utils/axios";

export const getSingleFreteThunk = async ({ _id }, thunkAPI) => {
  try {
    const response = await customFetch.get(`/api/v1/fretes/single/${_id}`);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
};

export const getFreteClientShowCaseThunk = async (userWhoCreate, thunkAPI) => {
  const { page } = thunkAPI.getState().singleFrete;

  try {
    console.log(userWhoCreate);
    const { data } = await customFetch.get(
      `/api/v1/fretes/client_showcase/${userWhoCreate.createdBy}/frete-user?page=${page}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
