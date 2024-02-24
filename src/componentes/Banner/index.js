import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>
                    Rafael Fernandes Pereira
                </h1>

                <p className={styles.paragrafo}>
                    Desenvolvedor Full Stack Jr | Javascript | Node | React | PHP | SQL | React
                    Native
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=""/>

                <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do Rafa sorrindo"/>
            </div>

        </div>
    )
}