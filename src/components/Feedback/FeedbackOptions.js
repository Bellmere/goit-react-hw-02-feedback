import css from '../Feedback/FeedbackOptions.module.css';
import propTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={css.feedBack__container}>
            <ul className={css.feedBackList}>
                {options.map(option => 
                    <li className={css.feedBackItem}>
                    <button 
                        name={option.name} 
                        value={option.value} 
                        className={css.feedBackBtn} 
                        type="button" 
                        onClick={onLeaveFeedback}>{option.tag}
                    </button>
                </li>
                ).join('')}
            </ul>
        </div>
    );
}