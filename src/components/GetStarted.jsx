import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-green-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full bg-primary`}>

      <p className="font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Попробуйте</span>
      </p>

      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">сейчас</span>
        </p>
        <img
          src={arrowUp}
          alt="arrowUp"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>

    </div>
  </div>
)

export default GetStarted