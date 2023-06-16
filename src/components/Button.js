import className from "classnames";

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = className(
        rest.className,
        "flex items-center px-3 py-1.5 mx-1.5 my-1 border",
        {
            "border-blue-400": primary,
            "border-gray-800": secondary,
            "border-green-400": success,
            "border-yellow-400": warning,
            "border-red-400": danger,
            "rounded-full": rounded,
            "bg-white": outline,
            "bg-white text-blue-400": outline && primary,
            "bg-white text-gray-400": outline && secondary,
            "bg-white text-green-400": outline && success,
            "bg-white text-yellow-400": outline && warning,
            "bg-white text-red-400": outline && danger,
            "bg-blue-400 text-white": !outline && primary,
            "bg-gray-800 text-white": !outline && secondary,
            "bg-green-400 text-white": !outline && success,
            "bg-yellow-400 text-white": !outline && warning,
            "bg-red-400 text-white": !outline && danger,
        }
    );

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
}

Button.propTypes = {
    checkVariationValue: (props) => {
        const checkSum =
            +Number(!!props.primary) +
            Number(!!props.secondary) +
            Number(!!props.success) +
            Number(!!props.warning) +
            Number(!!props.danger);
        if (checkSum > 1) {
            return new Error("Only one shaping value can be true!");
        }
    },
};

export default Button;
