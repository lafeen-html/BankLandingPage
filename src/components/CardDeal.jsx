import { card } from '../assets';
import styles, { layout } from '../style';
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Подходящая карта <br className="sm:block hidden" /> за несколько шагов</h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Наша лучшие карты на каждый день. Особые условия при зачислении стипендии, зарплаты и пенсии. Бесплатное обслуживание при выполнении условий.
      </p>

      <Button type="button" styles="mt-10">
        Подобрать
      </Button>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="h-[100%] w-[100%]" />
    </div>

  </section>
)

export default CardDeal