import Link from 'next/link';

import './styles.css';

const Index = () => (
  <div className="logo-container">
    <img className="logo" src="./logo.png" alt="BKS" />
    <Link className="brand-name" href="/">BKS</Link>
    {/* <span className="brand-name">
      BKS
    </span> */}
  </div>
);

export default Index;
