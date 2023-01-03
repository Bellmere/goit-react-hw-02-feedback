import css from '../Notification/Notification.module.css';
import propTypes from 'prop-types';

export const Notification = ({ message }) => <p className={css.message}>{message}</p>;

Notification.propTypes = {
    message: propTypes.string.isRequired,
  };