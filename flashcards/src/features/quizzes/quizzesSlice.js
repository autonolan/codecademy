import {createSlice, createAsyncthunk} from '@reduxjs/toolkit';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {quizzes: {}},
    reducers: {
        addQuiz: (state, action) => {
            console.log(action);
            state.quizzes[action.payload.id] = action.payload;
        }
    }
});

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export const quizzesSliceReducer = quizzesSlice.reducer;