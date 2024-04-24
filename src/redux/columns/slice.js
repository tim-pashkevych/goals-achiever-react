// import { createSlice, isAnyOf } from '@reduxjs/toolkit';

// import {
//   createColumnThunk,
//   changeColumnThunk,
//   deleteColumnThunk,
// } from './operations';

// const initialState = {
//   isLoading: false,
//   columns: [],
// };

// const slice = createSlice({
//   name: 'columns',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(createColumnThunk.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
        
//       })
//       .addCase(
//         changeColumnThunk.fulfilled,
//         (state) => {
//           state.isLoading = false;
//         }
//       )
//       .addCase(deleteColumnThunk.fulfilled, (state) => {
//         state.isLoading = false;
//       })
//       .addMatcher(
//         isAnyOf(
//           createColumnThunk.pending,
//           changeColumnThunk.pending,
//           deleteColumnThunk.pending
//         ),
//         (state) => {
//           state.isLoading = true;
//         }
//       );
//   },
//   selectors: {
//     selectColumns: (state) => state.columns,
//   },
// });

// export const userReducer = slice.reducer;

// export const { selectColumns } = slice.selectors;
