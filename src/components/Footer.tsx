import styles from "../styles/Footer.module.css";

const Footer = () => {
  const dataAtual = new Date();

  return (
    <footer className={styles.footer}>
      <p>
        <span>PokeNext</span> &copy; {dataAtual.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
