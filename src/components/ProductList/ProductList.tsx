import Link from "next/link";
import LayoutWrapper from "../LayoutWrapper";
import ProductPreview from "../ProductPreview/ProductPreview";
import styles from "./ProductList.module.css";

export default function ProductList() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            New <br /> Arrivals
          </h2>
          <Link href='/shop' className={styles.shopAll}>
            Shop all
          </Link>
        </div>
        <div className={styles.content}>
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
        </div>
      </LayoutWrapper>
    </section>
  );
}
