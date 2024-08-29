import styles from '../components/Header.module.css'
function Header() {
    

    return (
        <div className={styles.container}>
          <h1>Contact App</h1>
          <p>
            <a href="https://react.dev/">ReactJs </a>| Library
            
        </p>  
        </div>
    )
}
export default Header;