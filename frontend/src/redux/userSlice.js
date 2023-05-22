import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice ({
    name: "user",
    initialState: {
        name: "Duy Anh",
        age: "20",
        about: "I'm software engineer",
        avaUrl: "https://i.pinimg.com/originals/7f/d1/bb/7fd1bb9ebf2d6fccd09a9a3a9a3765f0.jpg",
        themeColor: "#ff9051" 
    },
    reducers: {
        update:(state, action)=> {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
            state.themeColor = action.payload.themeColor;
        },
    }
})

export const {update} = userSlice.actions;
export default userSlice.reducer;