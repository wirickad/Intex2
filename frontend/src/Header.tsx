//This file is the page header, it calls the Navbar component as well

import styles from "./Header.module.css";
import Navbar from "./Navbar";
function TopBanner(props: any) {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-2">
          <img className={styles.img} src="./mummyLogo.jpg" alt="logo" />
        </div>
        <div className="col-6 align-self-center text-start">
          <h1 className={styles.h1}>Intex 2: Rise of the Mummy</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
