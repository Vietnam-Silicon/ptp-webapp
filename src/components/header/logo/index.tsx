import Image from 'next/image';
import styles from './styles.module.css';

const Index = () => (
  <div className={styles.container}>
    <Image
      width={24}
      height={24}
      src="/logo.png"
      alt="BKS"
    />
    <span className={styles.brand}>
      BKS
    </span>
  </div>
);

export default Index;
