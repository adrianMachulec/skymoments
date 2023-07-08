import styles from "./Homepage.module.scss";
import homepageImg1 from "./../../assets/images/homepage/img1.jpg";
import wikiImg1 from "./../../assets/images/wiki/wiki1.jpg";
import portImg1 from "./../../assets/images/homepage/img2.jpg";
import portImg2 from "./../../assets/images/homepage/img13.jpg";

export default function Homepage(props) {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepageHeader}>
        <div className={styles.homepageHeaderContainer}>
          <img
            src={homepageImg1}
            alt="zdjęcie"
            className={styles.homepageHeaderContainerImg}
          />
        </div>
        <p className={styles.homepageHeaderText}>
          Sky Moments powstało z myślą o emocjach o tym jak ważni są ludzie i
          wydarzenia w naszym życiu. Jako fotograf mogę się przyznać, że
          wielokrotnie mam łzy wzruszenia w momentach w ktorych dostrzegam waszą
          radość, miłość czy to jak po prostu jesteście szczęśliwi i doceniacie
          siebie nawzajem. Jest to po prostu coś niesamowitego i dziękuję Wam za
          to. Dzięki fotografii spełniam marzenia, rozwijam się oraz łączę pracę
          z pasją. Uwielbiam ulotność chwili, którą mogę zatrzymać w postaci
          zdjęcia. To dla mnie olbrzymi zaszczyt, kiedy wybieracie mnie na
          swojego fotografa i mogę z Wami przeżywać najważniejsze oraz
          najpiekniejsze momenty życia.
        </p>
      </div>

      <div className={styles.homepageAboutMe}>
        <img
          src={wikiImg1}
          alt="Zdjęcie Wiki"
          className={styles.homepageAboutMeImg}
        />
        <div className={styles.homepageAboutMeLine}></div>
        <p className={styles.homepageAboutMeText}>
          Nazywam się Wiktoria i chciałabym Was zaprosić do mojego świata
          fotografii, świata pięknych obrazów i magicznie niebiańskich momentów.
          Fotografia to moja pasja ale oprócz niej lubię wiele innych rzeczy.
          Jeżeli jesteście ciekawi jaką jestem osobą i chcecie dowiedzieć się
          czegoś na mój temat to zapraszam Was do przeczytania paru zdań ,które
          znajdują się w zakładce o mnie.
        </p>
      </div>

      <div className={styles.homepagePortfolio}>
        <h1>Moje portfolio</h1>
        <div className={styles.homepagePortfolioContainer}>
          <a
            href="/portfolio"
            className={styles.homepagePortfolioContainerElem}
          >
            <h2>Reportaże ślubne</h2>
            <img
              src={portImg1}
              alt="Zdjęcie portfolio"
              className={styles.homepagePortfolioContainerElemImg}
            />
          </a>
          <a
            href="/portfolio"
            className={styles.homepagePortfolioContainerElem}
          >
            <h2>Sesje okolicznościowe</h2>
            <img
              src={portImg2}
              alt="Zdjęcie portfolio"
              className={styles.homepagePortfolioContainerElemImg}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
