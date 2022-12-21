import css from '../Section/Section.module.css';
import propTypes from 'prop-types';

export const Section = ({title}) => {
    return (
        <section>
            <div>
                <h2>{title}</h2>
            </div>
        </section>
    );
}