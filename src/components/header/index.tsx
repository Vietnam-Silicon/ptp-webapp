import Drawer from './drawer';
import Logo from './logo';
import "./styles.css";

const Index = () => {
  return (
    <div className="container">
      <div className="left">
        <Drawer />
        <Logo />
      </div>
      <div className="right">
        <img className="avatar" src="./avatar.png" alt="Avatar" />
        <div className="name">Stebin Ben</div>
      </div>
    </div>
  );
};

export default Index;
