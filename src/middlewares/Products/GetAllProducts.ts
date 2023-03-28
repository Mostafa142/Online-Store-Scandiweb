import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICategories } from "../../models/interfaces/categories";
import { client } from "../../graphql/client";
import { ALL_CATEGORIES } from "../../utils/category";
interface FetchError {
  errorMessage: string | undefined;
}

export const GetAllProducts = createAsyncThunk<
  ICategories,
  undefined,
  { rejectValue: FetchError }
>("products/getAllProducts", async (params, { rejectWithValue }) => {
  try {
    const response = await client.query({ query: ALL_CATEGORIES });
    const data: any = await response;
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message as FetchError);
  }
});
