import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
// import Image from "next/image";
// import Img1 from "../../../public/images/hero.jpg";
import ProductPreview from "../ProductPreview/ProductPreview";

export default function Hero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          {/* <Image src={Img1} alt='' title='' fill className={styles.img} /> */}
          <div className={styles.imgOverlay}></div>
          <div className={styles.contentChildren}>
            <div className={styles.left}>
              <h1 className={styles.heading} lang='en'>
                RISE WITH <br /> THE RIDING.
              </h1>
              <p className={styles.copy}>
                Your shop for bicycles <br /> and e-bikes in SWitzerland.
              </p>
            </div>
            <div className={styles.right}>
              <ProductPreview />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}

