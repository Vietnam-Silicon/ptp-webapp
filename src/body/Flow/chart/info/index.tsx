import styles from './styles.module.css';

const Index = ({ node, onClose }: { node: any, onClose: any }) => (
  <div className={styles.container}>
    <button
      onClick={onClose}
      className={styles.close}
    >
      ✕
    </button>
    <h3 className={styles.label}>{node.data.label}</h3>
    <p className={styles.desc}>{node.data.description}</p>
    {node.data.bindSupplier && (
      <p className={styles.supplier}>
        <strong>Supplier:</strong> {node.data.bindSupplier.name}
      </p>
    )}
    {node.data.bindProduct && (
      <p className={styles.brand}>
        <strong>Product:</strong> {node.data.bindProduct.brandName}
      </p>
    )}
    <p className={styles.create}>
      <strong>Created:</strong> {new Date(node.data.dateCreated).toLocaleDateString()}
    </p>
  </div>
);

export default Index;
