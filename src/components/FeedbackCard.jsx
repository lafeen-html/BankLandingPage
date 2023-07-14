import { quotes } from '../assets';
import PropTypes from 'prop-types';

const FeedbackCard = ({ content, name, title, img }) => (
  <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>

    <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px] object-contain" />

    <p className="text-[18px] leading-[32px] my-10 italic">{content}</p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[50px] h-[50px] rounded-full" />

      <div className="flex flex-col ml-4">
        <h4 className="font-semibold text-[20px] leading-[32px]">{name}</h4>
        <p className="text-[16px] leading-[24px] text-dimWhite">{title}</p>
      </div>
    </div>

  </div>
)

FeedbackCard.propTypes = {
  content: PropTypes.node,
  name: PropTypes.node,
  title: PropTypes.node,
  img: PropTypes.node,
};

export default FeedbackCard