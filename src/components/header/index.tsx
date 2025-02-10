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
      <img className={styles.avatar} src="./avatar.png" alt="Avatar" />
      <div className={styles.name}>Stebin Ben</div>
    </div>
  </div>
);

export default Index;
