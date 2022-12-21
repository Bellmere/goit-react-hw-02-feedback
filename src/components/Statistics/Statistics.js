import css from '../Statistics/Statistics.module.css';
import propTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    <ul className={css.statiscticsList}>
        <li className={css.statiscticsItem}>
            <span className={css.statiscticsItemText}>Good: {good}</span>
        </li>
        <li className={css.statiscticsItem}>
            <span className={css.statiscticsItemText}>Neutral: {neutral}</span>
        </li>
        <li className={css.statiscticsItem}>
            <span className={css.statiscticsItemText}>Bad: {bad}</span>
        </li>
        <li className={css.statiscticsItem}>
            <span className={css.statiscticsItemText}>Total: {total}</span>
        </li>
        <li className={css.statiscticsItem}>
            <span className={css.statiscticsItemText}>Positive Feedback: {positivePercentage} %</span>
        </li>
    </ul>
};