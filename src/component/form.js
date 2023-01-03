import MemeData from "./memedata";
import { useState } from "react";

const Form = () => {
  const [memeImage, setMemeImage] = useState("");
  const getMemeImage = () => {
    const memesArray = MemeData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomIndex].url);
    console.log(setMemeImage)
  };
  return (
    <main>
      <section className="form">
        <div className="inputDiv">
          <input type="text" placeholder="Top text" className="form--input" />
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
          />
        </div>
        <div>
          <button className="form--button" onClick={getMemeImage}>
            Get a new meme image 🖼
          </button>
        </div>
        <div className="image">
          <img src={memeImage} alt=" memeimage" className="meme--Image"/>
        </div>
      </section>
    </main>
  );
};
export default Form;
