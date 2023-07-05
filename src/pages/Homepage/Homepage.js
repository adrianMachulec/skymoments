import styles from "./Homepage.module.scss";
import homepageImg1 from "./../../assets/images/homepage/img1.jpg";

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
    </div>
  );
}
