import { stats } from '../constans';
import styles from '../style';
import { ball } from '../assets';




const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, index) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <img 
        src={ball}  
        alt="ball"
        className={`w-[1rem] h-[1rem] mr-3`}
         />
        <h4 className="font-semibold xs:text[40px] text-[30px] xs:leading-[53px] leading-[43px]">
          {stat.value}
        </h4>
        <p className="xs:text[20px] text-[18px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
        
      </div>
    ))}
  </section>
)

export default Stats