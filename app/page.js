"use client";
import styles from "./page.module.css";

export default function Home() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.addSongForm}>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.songDetails}>
          <div className={styles.left}>
            <label>
              Title:
              <input type="text" name="title" />
            </label>
            <label>
              Artist:
              <input type="text" name="artist" />
            </label>
            <label>
              Album:
              <input type="text" name="album" />
            </label>
            <label>
              Year:
              <input type="text" name="year" />
            </label>
          </div>
          <div className={styles.right}>
            <label>
              Month:
              <select name="month">
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
              <input type="text" name="genre" />
            </label>
            <label>
              Image:
              <input type="file" name="image" />
            </label>
            <label>
              File:
              <input type="file" name="file" />
            </label>
          </div>
        </div>
        <button type="submit" className={styles.submit}>submit</button>
      </form>
    </div>
  );
}
