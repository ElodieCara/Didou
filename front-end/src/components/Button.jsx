import PropTypes from "prop-types";

const Button = ({
  children,
  onClick,
  className,
  type = "button",
  ...props
}) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
