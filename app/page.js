"use client";
import styles from "./page.module.css";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [month, setMonth] = useState("jan");
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [file, setFile] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "Spotify_Clone_Pics");
    if (image) {
      const { secure_url } = await fetch(
        "https://api.cloudinary.com/v1_1/dfw9gsnzx/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((res) => res.json());
      console.log(secure_url);
      setImageURL(secure_url);
    }
    const data = {
      title: title,
      artist: artist,
      album: album,
      year: year,
      genre: genre,
      month: month,
      image: imageURL,
      file: file,
    };
    axios
      .post("/api/song", JSON.stringify(data))
      .then((res) => {
        console.log(res);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  };

  return (
    <div className={styles.addSongForm}>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.songDetails}>
          <div className={styles.left}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
              />
            </label>
            <label>
              Artist:
              <input
                type="text"
                name="artist"
                onChange={(e) => {
                  setArtist(e.target.value);
                }}
              />
            </label>
            <label>
              Album:
              <input
                type="text"
                name="album"
                onChange={(e) => {
                  setAlbum(e.target.value);
                }}
                value={album}
              />
            </label>
            <label>
              Year:
              <input
                type="text"
                name="year"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
                value={year}
              />
            </label>
          </div>
          <div className={styles.right}>
            <label>
              Month:
              <select
                name="month"
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
                value={month}
              >
                <option value="jan">January</option>
                <option value="feb">February</option>
                <option value="mar">March</option>
                <option value="apr">April</option>
                <option value="may">May</option>
                <option value="jun">June</option>
                <option value="jul">July</option>
                <option value="aug">August</option>
                <option value="sep">September</option>
                <option value="oct">October</option>
                <option value="nov">November</option>
                <option value="dec">December</option>
              </select>
            </label>
            <label>
              Genre:
              <input
                type="text"
                name="genre"
                value={genre}
                onChange={(e) => {
                  setGenre(e.target.value);
                }}
              />
            </label>
            <label>
              Audio file:
              <input
                type="text"
                name="file"
                value={file}
                onChange={(e) => {
                  setFile(e.target.value);
                }}
                placeholder="paste the link of the audio file"
              />
            </label>
            <div className={styles.imageInput}>
              <label>
                Image:
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </label>
              {image != null && (
                <img src={URL.createObjectURL(image)} alt="song image" />
              )}
            </div>
          </div>
        </div>
        <button type="submit" className={styles.submit}>
          submit
        </button>
      </form>
    </div>
  );
}
