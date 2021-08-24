import PropTypes from 'prop-types';
import styles from './ErrorPage.module.css';

export default function ErrorPage({ message }) {
  return (
    <div className={styles.wrap}>
      <div>
        <div className={styles.headingWrap}>
          <svg className={styles.svg} viewBox="0 0 24 24">
            <path fill="#c31212" d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" />
          </svg>
          <div className={styles.heading}>ERROR</div>
        </div>
        <p className={styles.message}>{message}</p>
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
