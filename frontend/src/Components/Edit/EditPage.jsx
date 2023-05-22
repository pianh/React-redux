import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {update} from "../../redux/userSlice";
import Input from "../InputFields/Input";
import "./edit.css"
const EditPage = (props) => {
    const { setEdit } = props;
    const avaUrl = [
        "https://i.pinimg.com/originals/7f/d1/bb/7fd1bb9ebf2d6fccd09a9a3a9a3765f0.jpg",
        "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/01/anh-naruto-chibi.jpg?resize\u003d800%2C506\u0026ssl\u003d1",
        "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
        "https://img2.thuthuatphanmem.vn/uploads/2018/12/12/anh-naruto-chibi-danh-nhau_104804655.jpg",
        "https://thuthuatnhanh.com/wp-content/uploads/2020/03/hinh-anh-chibi-naruto.png",
        "https://www.kindpng.com/picc/m/154-1543096_naruto-uzumaki-chibi-png-png-download-hnh-nn.png",
        "https://e7.pngegg.com/pngimages/303/593/png-clipart-sakura-haruno-naruto-uzumaki-hinata-hyuga-chibi-mangaka-chibi-naruto-child-chibi.png",
        "https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-Naruto-chibi-cute-de-thuong-dep-nhat.jpg",
    ];
    const user = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    const [name, setName] = useState(user.name);
    const [age,setAge] = useState(user.age);
    const [about,setAbout] = useState(user.about);
    const [theme,setTheme] = useState("#ff9051");
    const [url,setUrl] = useState(user.avaUrl);
    const handleSubmit = (e) => {
        e.preventDefault();
        setEdit(false);
        const updatedUser = {
            name: name,
            age: age,
            about:about,
            avaUrl:url,
            themeColor: theme,
        };
        dispatch(update(updatedUser));
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <section className="edit-container">
                    <button className="close"> SAVE </button>
                
                    <div className="edit-profile">Edit Profile</div>
                    <div className="input-container">
                        <Input label="Display name" data={user.name} setData={setName} />
                        <Input label="Age" data={user.age} setData={setAge} />
                        <Input inputType="textarea" classStyle="input-about" label="About" data={user.about} setData={setAbout} />
                        <label> Profile Picture </label>
                        <div className="input-image-container">
                            {avaUrl.map((url)=> {
                                return (
                                    <>
                                    <img onClick={(e)=>setUrl(e.target.src)} src={url} className="input-image" alt=""/>
                                    </>
                                )
                            })}
                        </div>
                        <div className="theme-container">
                            <label> Theme </label>
                            <input type="color" className="theme-color" onChange={(e)=>setTheme(e.target.value)} ></input>
                        </div>
                    </div>
                </section>
            </form>
        </>
    );
}
export default EditPage
    
