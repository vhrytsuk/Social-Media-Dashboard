import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface SocialAccount {
  id: string;
  name: string;
  followers: number;
  engagementRate: number;
  recentPosts: {
    postId: number;
    content: string;
    likes: number;
    comments: number;
  }[];
}

interface AccountsState {
  socialAccounts: SocialAccount[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AccountsState = {
  socialAccounts: [],
  status: "idle",
  error: null,
};

export const fetchSocialAccounts = createAsyncThunk(
  "socialAccounts/fetchAccounts",
  async () => {
    const response = await axios.get(
      "http://localhost:3000/social-network-list"
    );

    return response.data;
  }
);

export const addSocialAccount = createAsyncThunk(
  "socialAccounts/addAccount",
  async (newAccount: SocialAccount) => {
    const response = await axios.post(
      "http://localhost:3000/social-network-list",
      newAccount
    );

    return response.data;
  }
);

const socialAccountSlice = createSlice({
  name: "socialAccounts",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSocialAccounts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSocialAccounts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.socialAccounts = action.payload;
      })
      .addCase(fetchSocialAccounts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch networks";
      })
      .addCase(addSocialAccount.fulfilled, (state, action) => {
        state.socialAccounts.push(action.payload); // Add new account to state
      });
  },
});

export default socialAccountSlice.reducer;
