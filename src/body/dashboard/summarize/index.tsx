import clsx from 'clsx';
import type { FC } from 'react';

import { Image } from 'controls';

import styles from './styles.module.css';

interface SummarizeProps {
  title: string;
  value: number | string;
  extra: number | string;
  percent: number;
  isIncrease?: boolean
};

const Index: FC<SummarizeProps> = ({ title, value, percent, isIncrease = true, extra }) => (
  <div className={styles.info}>
    <p className={styles.title}>{title}</p>

    <div className={styles.data}>
      <h4 className={styles.value} >{value}</h4>
      <div className={clsx(styles.percent, isIncrease ? styles.increasePercent : styles.decreasePercent)}>
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

    <p className={styles.extra}>You&rsquo;ve made extra {<span className={isIncrease ? styles.extraIncrease : styles.extraDecrease}>{extra}</span>} this year.</p>
  </div>
);

export default Index;
