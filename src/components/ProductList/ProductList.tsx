import LayoutWrapper from "../LayoutWrapper";
import styles from "./ProductList.module.css";

export default function ProductList() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            New <br /> Arrivals
          </h2>
        </div>
      </LayoutWrapper>
    </section>
  );
}
