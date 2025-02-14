import { BarChart, Box, PieChart } from 'components';
import List from './list';
import styles from './styles.module.css';
import Summarize from './summarize';
import { barData, pieData, totalExportWeightData, totalRejectedData, totalShipmentData } from './fakeData';
import SummarizeChart from './summarizeChart';

const Index = () => {
  return (
    <>
      <div className={styles.container}>
        <Summarize
          title="Total shipment"
          value="300,000"
          percent={4}
          isIncrease
        >
          <SummarizeChart data={totalShipmentData} />
        </Summarize>

        <Summarize
          title="Total rejected cases"
          value="200"
          percent={10}
          isIncrease={false}
        >
          <SummarizeChart data={totalRejectedData} />
        </Summarize>

        <Summarize
          title="Total export weight (tons)"
          value="259,000"
          percent={15}
          isIncrease
        >
          <SummarizeChart data={totalExportWeightData} />
        </Summarize>
      </div>

      <Box className={styles.chartsContainer}>
        <Box className={styles.chartContainer}>
          <p className={styles.chartTitle}>Rejected cases by reasons at Thai Customs</p>
          <BarChart height={420} showGrid={false} data={barData} />
        </Box>
        <Box className={styles.chartContainer}>
          <p className={styles.chartTitle}>Exporting proportion of Durian Varieties</p>
          <PieChart height={420} data={pieData} />
        </Box>
      </Box>

      <List />
    </>
  );
};

export default Index;
