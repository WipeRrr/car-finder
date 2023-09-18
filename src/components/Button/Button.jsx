import css from "./Button.module.css"

export default function Button({ text, onClick }) {
    return (
        <button className={css.btn} type="button" onClick={onClick}>
            {text}
        </button>
    )
};
