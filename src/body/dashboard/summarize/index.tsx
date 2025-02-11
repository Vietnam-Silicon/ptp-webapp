import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

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
        {isIncrease ?
          <Image src='./increase-arrow.svg' alt='' className={styles.arrow} width={10} height={10} />
          : <Image src='./decrease-arrow.svg' alt='' className={styles.arrow} width={10} height={10} />
        }
        <p>{percent}%</p>
      </div>
    </div>

    <p className={styles.extra}>You&rsquo;ve made extra {<span className={isIncrease ? styles.extraIncrease : styles.extraDecrease}>{extra}</span>} this year.</p>
  </div>
);

export default Index;
