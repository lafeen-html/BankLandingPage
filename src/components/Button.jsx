import PropTypes from 'prop-types';

const Button = ({ styles, children, ...props }) => {
  return (
    <button
      {...props}
      className={`py-4 px-6 bg-green-gradient font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.node,
};

export default Button