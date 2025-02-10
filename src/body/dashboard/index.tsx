import Summarize from './summarize';
import Listing from './listing';
import styles from './styles.module.css';

const Index = () => {
  return (
    <>
      <div className={styles.container}>
        <Summarize
          title="Total tracking"
          value="4,422,236"
          extra="35,000"
        />
        <Summarize
          title="Total tracking"
          value="4,422,236"
          extra="35,000"
        />
        <Summarize
          title="Total tracking"
          value="4,422,236"
          extra="35,000"
        />
        <Summarize
          title="Total tracking"
          value="4,422,236"
          extra="35,000"
        />
      </div>
      <Listing />
    </>
  );
};

export default Index;
