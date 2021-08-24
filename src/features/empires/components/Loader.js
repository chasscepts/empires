import './Loader.css';

const styles = {
  wrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default function Loader() {
  return (
    <div className="body-fill" style={styles.wrap}>
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
}
