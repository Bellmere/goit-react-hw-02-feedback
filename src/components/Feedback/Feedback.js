import React, {Component} from "react";
import css from '../Feedback/Feedback.module.css';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
      }
      

    handleFeedback = (e) => {
        const {name, value} = e.target;
        // console.log(name);

        this.setState(prevState => ({
            [name]: Number(value) + 1,
            
        }));
        this.countTotalFeedback();
    };

    countTotalFeedback = () => {
        const {good, neutral, bad, total} = this.state;
        this.setState(prevState => ({
            total: good + neutral + bad,
            
        }));
        // this.setState({total: good + neutral + bad});
        // console.log(total);
    };

    render() {
        const {good, neutral, bad, total,} = this.state;
        return (
            <div className={css.feedBack__container}>
                <h1 className={css.feedBackTitle}>Please leave feedback</h1>
                <ul className={css.feedBackList}>
                    <li className={css.feedBackItem}>
                        <button name='good' value={good} className={css.feedBackBtn} type="button" onClick={this.handleFeedback}>Good</button>
                    </li>
                    <li className={css.feedBackItem}>
                        <button name='neutral' value={neutral} className={css.feedBackBtn} type="button" onClick={this.handleFeedback}>Neutral</button>
                    </li>
                    <li className={css.feedBackItem}>
                        <button name='bad' value={bad} className={css.feedBackBtn} type="button" onClick={this.handleFeedback}>Bad</button>
                    </li>
                </ul>
                <h2 className={css.feedBackTitle}>Statistics</h2>
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
                </ul>
            </div>
        );
    }
}

export default Feedback;