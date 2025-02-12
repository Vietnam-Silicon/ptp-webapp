import Listing from './listing';
import styles from './styles.module.css';
import Summarize from './summarize';

const Index = () => {
  return (
    <>
      <div className={styles.container}>
        <Summarize
          title="Total Tracing"
          value="4,42,236"
          percent={59.3}
          isIncrease
          extra="35,000"
        />
        <Summarize
          title="Total Tracking"
          value="78,250"
          percent={70.5}
          isIncrease
          extra="8,900"
        />
        <Summarize
          title="Total Order"
          value="18,800"
          percent={27.4}
          isIncrease={false}
          extra="1,943"
        />
        <Summarize
          title="Total Scan"
          value="35,078"
          percent={27.4}
          isIncrease={false}
          extra="20,395"
        />
      </div>
      <Listing />
    </>
  );
};

export default Index;
