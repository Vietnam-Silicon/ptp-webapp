import { FC } from 'react';
import styles from './styles.module.css';

interface SummarizeProps {
  title: string;
  value: number | string;
  extra: number | string;
};

const Index: FC<SummarizeProps> = ({ title, value, extra }) => (
  <div className={styles.info}>
    <p className={styles.title}>{title}</p>
    <h4>{value}</h4>
    <p>{`You've made extra ${extra} this year.`}</p>
  </div>
);

export default Index;
