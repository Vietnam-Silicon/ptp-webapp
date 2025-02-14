import Image from 'controls/Image';
import Drawer from './Drawer';
import Logo from './Logo';
import styles from './styles.module.css';

const Index = () => (
  <div className={styles.container}>
    <div className={styles.left}>
      <Drawer />
      <Logo />
    </div>
    <div className={styles.right}>
      <Image
        internalAsset
        width={24}
        height={24}
        src="/avatar.png"
        alt="Avatar"
      />
      <div className={styles.name}>Stebin Ben</div>
    </div>
  </div>
);

export default Index;
