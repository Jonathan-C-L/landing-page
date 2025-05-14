import styles from './Button.module.css'

function Button(){
    /* 
        can also create a style object to be inserted:
        - very static and not good for responsive design
            const styles ={
                borderRadius: '8px',
                border: '1px solid transparent',
                padding: '0.6em 1.2em',
                fontSize: '1em',
                fontWeight: '500',
                fontFamily: 'inherit',
                backgroundColor: '#1a1a1a',
                cursor: 'pointer',
                transition: 'border-color 0.25s',
            }
    */

    return(
        /* {} allows for dynamic insertion*/
        <button className={styles.button} type="button">Click Me!</button>
    );
}
export default Button