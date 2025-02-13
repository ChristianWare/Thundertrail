import styles from "./CategoryCard.module.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
}

export default function CategoryCard({ src }: Props) {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <Image src={src} alt='' title='' fill  className={styles.img} />
      </div>
    </article>
  );
}
