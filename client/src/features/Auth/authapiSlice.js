import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userRegister = createAsyncThunk(
  "auth/createRegister",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:9000/api/v1/register/`,
        data
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  }
);

export const userLogin = createAsyncThunk("auth/createLogin", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:9000/api/v1/login/`,
      data,
      { withCredentials: true }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.response.data.message);
    throw new Error(error.response.data.message);
  }
});

export const userLogout = createAsyncThunk(
  "auth/createLogout",
  async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/v1/logout/`,

        { withCredentials: true }
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  }
);

export const userMe = createAsyncThunk("auth/userMe", async (data) => {
  try {
    const response = await axios.get("http://localhost:9000/api/v1/me", {
      withCredentials: true,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.response.data.message);

    throw new Error(error.response.data.message);
  }
});
