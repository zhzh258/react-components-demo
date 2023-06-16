import classNames from "classnames";

function Panel({ children, className, ...rest}) {
    const panelClassNames = classNames(
        "border rounded p-3 shadow bg-white w-full",
        className,
    );
    return(
        <div className={panelClassNames} {...rest}>
            {children}
        </div>
    )
}

export default Panel