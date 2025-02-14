import { ReactNode, type FC } from 'react';

import { Image } from 'controls';

import styles from './styles.module.css';

interface SummarizeProps {
  title: string;
  value: number | string;
  percent: number;
  isIncrease?: boolean,
  children?: ReactNode
};

const Index: FC<SummarizeProps> = ({ title, value, percent, isIncrease = true, children }) => (
  <div className={styles.info}>
    <p className={styles.title}>{title}</p>

    <div className={styles.data}>
      <h4 className={styles.value} >{value}</h4>
      <div className={styles.percent}>
        <Image
          internalAsset
          src={isIncrease ? './increase-arrow.svg' : './decrease-arrow.svg'}
          alt={title}
          className={styles.arrow}
          width={10}
          height={10}
        />
        <p>{percent}%</p>
      </div>
    </div>

    <p className={styles.extra}>Compared to last month</p>
    {children}
  </div>
);

export default Index;
