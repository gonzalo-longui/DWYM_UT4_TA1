import PropTypes from 'prop-types';
import styles from './card.module.css';

export function Card({title, description, assignedTo, startDate, endDate}) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><img src="./src/assets/usericon.png" alt="icono de persona" className={styles.usericon}></img>{assignedTo}</p>
      <p>{startDate} to {endDate}</p>
    </div>
  );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    assignedTo: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
}