import Image from "next/image";
import charizardIcon from "../../public/images/charizard.png";

import styles from "../../src/styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>SOBRE O PROJETO</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rerum
        delectus incidunt voluptate minus repellat, facere accusamus architecto
        aliquid animi eaque, iure voluptates autem, iusto eius. Dolores optio
        quos accusamus?
      </p>
      <Image src={charizardIcon} alt="Imagem do charizard" />
    </div>
  );
};

export default About;
