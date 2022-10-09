import css from './section.module.css'
export const Section = ({ title, children }) => {
    return (
        <section className={css.section}>
            <h2 className={css.title}>{title}</h2>
            <div className={css.text}>{children}</div>
        </section>
    )
}