import PropTypes from 'prop-types';
import styles from '../styles/Info.module.scss';

const Info = ({ icon, feedback, color }) => {
    return (
        <div className={styles.info} style={{ backgroundColor: color }}>
            <i className={icon}></i>
            <p>{feedback}</p>
        </div>
    );
};

Info.propTypes = {
    icon: PropTypes.string,
    feedback: PropTypes.string,
    color: PropTypes.string,
};

export default Info;
