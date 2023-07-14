import { features } from '../constans';
import styles, { layout } from '../style';
import Button from './Button';
import FeatureCard from './FeatureCard';

const Business = () => {
  return (
    <section className={layout.section} id="features">

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Вы делаете бизнес, <br className="sm:block hidden" /> мы занимаемся деньгами
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Имея правильную кредитную карту, вы можете улучшить свою финансовую жизнь,
          наращивая кредит, получая вознаграждения и экономя деньги. Но на рынке представлены сотни
          кредитных карт.
        </p>

        <Button type="button" styles="mt-10">
          Заказать
        </Button>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            index={index}
            {...feature}
          />
        ))}

      </div>

    </section>
  )
}

export default Business