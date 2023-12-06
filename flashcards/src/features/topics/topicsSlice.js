import {createSlice, createAsyncthunk} from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {topics: {}},
    reducers: {
        addTopic: (state, action) => {
            let payload = action.payload
            state.topics[action.payload.id] = {...payload, quizIds: []};
        }
    }
});

export const selectTopics = state => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export const topicsSliceReducer = topicsSlice.reducer;