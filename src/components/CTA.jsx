import styles from '../style';
import Button from './Button';

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} 
  sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>

    <div className="flex flex-1 flex-col">
      <h2 className={styles.heading2}>Попробуйте наши услуги прямо сейчас!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Все необходимое для приема платежей по картам и развития Вашего бизнеса в любой точке планеты.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button type='button'>
        Начать
      </Button>
    </div>

  </section>
)

export default CTA