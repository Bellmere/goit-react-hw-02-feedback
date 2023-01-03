import css from '../Section/Section.module.css';
import propTypes from 'prop-types';

export const Section = ({title, children}) => {
    return (
        <section>
            <div>
                <h2 className={css.title}>{title}</h2>
                {children}
            </div>
        </section>
    );
}

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
  };