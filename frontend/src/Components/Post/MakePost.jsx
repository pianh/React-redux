import { useState } from "react";
import Input from "../InputFields/Input"
import "./post.css"
const MakePost = (props) => {
    const {setOpen} = props;
    const [title, setTitle] = useState("Add a title");
    const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"] //Tao 5 button
    const handlePost = () => {
        setOpen(false);
    }
    const [desc, setDesc] = useState ("Add some descriptions");
    const [selectedIdx, setSelectIdx] = useState(0); //Khi nhan vao dua index se so sanh 
    return (    
        <section className="makepost-container">
            <div className="makepost-navigation">
                <div className="makepost-save" onClick={handlePost}>
                    POST
                </div>
            </div>
            <Input 
                data={title} 
                inputType="textarea" 
                setData={setTitle} 
                label="Title" 
                classStyle="makepost-title" 
            />
            <Input 
                data={desc} 
                inputType="textarea" 
                setData={setDesc} 
                label="Descriptions" 
                classStyle="makepost-desc" />
            <label>Tags</label>
            <div className="makepost-tags">
                {tags.map((tag, idx)=>{
                    return(
                        <button 
                            key={idx} 
                            className={`${
                                selectedIdx === idx  //Neu dung thay doi mau riêng cho cái index đó
                                ? `makepost-tags-selected`
                                : `makepost-tags-${tag}` 
                            }`}
                                onClick={()=> setSelectIdx(idx)} //Nhan vao 1 tag se cho biet idx so may
                            >
                                {tag}
                            
                        </button>
                    )
                })}
            </div>
        </section>
    )
}
export default MakePost;