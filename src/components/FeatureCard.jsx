import PropTypes from 'prop-types';
import { features } from '../constans';
import styles from '../style';

const FeatureCard = ({ icon, title, content, index, ...props }) => (
  <div {...props} className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[1rem] h-[1rem] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-semibold text-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="text-dimWhite text-[16px] leading-[24px]">{content}</p>
    </div>
  </div>
)

FeatureCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.node,
  content: PropTypes.node,
  index: PropTypes.node,
};

export default FeatureCard