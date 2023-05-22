import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice ({
    name: "user",
    initialState: {
        name: "Duy Anh",
        age: "20",
        about: "I'm software engineer",
        avaUrl: "https://i.pinimg.com/originals/7f/d1/bb/7fd1bb9ebf2d6fccd09a9a3a9a3765f0.jpg",
        themeColor: "#ff9051" ,
        pending: false, //truoc update - dang cho
        error: false, //that bai - co loi hay khong
    },
    reducers: {
        updateStart: (state)=> {
            state.pending = true;
        },
        updateError: (state)=>{
            state.pending = false; //dang cho
            state.error = true;
        },
        updateSuccess: (state, action)=> {
            state.pending = false;
            state.error= false;
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
            state.themeColor = action.payload.themeColor;
        }
    }
})

export const {updateStart, updateError, updateSuccess} = userSlice.actions;
export default userSlice.reducer;