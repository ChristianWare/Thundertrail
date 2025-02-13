import CategoryCard from "../CategoryCard/CategoryCard";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./CategoryList.module.css";
import Img1 from "../../../public/images/img1.jpg";
import Img2 from "../../../public/images/img2.jpg";
import Img3 from "../../../public/images/img3.jpg";
import Img4 from "../../../public/images/img4.jpg";
import Img5 from "../../../public/images/img5.jpg";
import Img6 from "../../../public/images/img6.jpg";
import Img7 from "../../../public/images/img7.jpg";

const data = [
  {
    id: 7,
    src: Img7,
  },
  {
    id: 1,
    src: Img1,
  },
  {
    id: 2,
    src: Img2,
  },
  {
    id: 3,
    src: Img3,
  },
  {
    id: 4,
    src: Img4,
  },
  {
    id: 5,
    src: Img5,
  },
  {
    id: 6,
    src: Img6,
  },
];

export default function CategoryList() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Explore</h2>
        </div>
        <div className={styles.contentTop}>
          {data.slice(0, 4).map((x) => (
            <CategoryCard key={x.id} src={x.src} />
          ))}
        </div>
        <div className={styles.contentBottom}>
          {data.slice(4, data.length).map((x) => (
            <CategoryCard key={x.id} src={x.src} />
          ))}
        </div>
        <div className={styles.content}></div>
      </LayoutWrapper>
    </section>
  );
}
