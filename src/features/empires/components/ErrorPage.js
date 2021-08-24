import PropTypes from 'prop-types';

const styles = {
  wrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  headingWrap: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '2px solid #c31212',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '1.6rem',
    marginLeft: '10px',
    color: '#c31212',
  },
  svg: {
    width: '24px',
    height: '24px',
  },
  message: {
    fontSize: '1.4rem',
    margin: '15px 0 0',
  },
};

export default function ErrorPage({ message }) {
  return (
    <div className="body-fill" style={styles.wrap}>
      <div>
        <div style={styles.headingWrap}>
          <svg style={styles.svg} viewBox="0 0 24 24">
            <path fill="#c31212" d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" />
          </svg>
          <div style={styles.heading}>ERROR</div>
        </div>
        <p style={styles.message}>{message}</p>
      </div>
    </div>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string,
};

ErrorPage.defaultProps = {
  message: 'An Error occurred while loading page!',
};
