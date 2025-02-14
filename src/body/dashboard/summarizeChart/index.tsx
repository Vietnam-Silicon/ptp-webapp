import { AreaChart } from 'components';
import { FC } from 'react';

import styles from './styles.module.css';


type Props = {
  data: { name: string; value: number }[];
}

const SummarizeChart: FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <AreaChart
        width={200}
        height={70}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        data={data}
        showGrid={false}
        showXAxis={false}
        showYAxis={false}
        showTooltip={false}
      />
    </div>
  )
}

export default SummarizeChart