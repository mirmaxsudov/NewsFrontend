import {JSX} from "react";
import {Link} from "react-router-dom";

type NewsButtonProps = {
    bgColor: string;
    textColor: string;
    onClick: () => void;
    isTargetBlank: boolean;
    isDisabled: boolean;
    isLink: boolean;
    link: string;
    children: JSX.Element;
    className: string
}

const NewsButton = ({
                        children,
                        bgColor,
                        textColor,
                        onClick,
                        isTargetBlank = false,
                        isDisabled = false,
                        isLink = false,
                        link,
                        className
                    }: Partial<NewsButtonProps>) => {

    const baseStyles = "flex gap-2 items-center px-[15px] py-[10px] rounded-[12px]";

    if (isLink) {
        return (
            <Link onClick={onClick} target={isTargetBlank ? "_blank" : "_self"}
                  className={`${bgColor} ${textColor} ${baseStyles} ${className}`}
                  to={link ? link : "/"}>
                {children}
            </Link>
        )
    }

    return (
        <button onClick={onClick} disabled={isDisabled}
                className={`${bgColor} ${textColor} ${baseStyles} ${className}`}>
            {children}
        </button>
    )
}

export default NewsButton