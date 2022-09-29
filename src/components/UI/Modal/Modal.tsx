import React, { useEffect } from "react";
import { IconCloseX } from "../Icons";
import "./Modal.scss";

interface IProps {
    isShow: boolean;
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    title?: string;
}

const Modal: React.FC<IProps> = ({ title, children, isShow, setIsShow }) => {
    useEffect(() => {
        document.body.style.overflow = isShow ? "hidden" : "visible"
    }, [isShow])

    return (
        <>
            {isShow
                ? <div className={`modalContainer ${isShow ? "active" : ""}`}>
                    <div className={"modalContent"}>
                        {title && <div className={"modalTitle"}>{title}</div>}

                        <div className={"close"} onClick={() => setIsShow(false)}>
                            <IconCloseX color={"default"} size={25} />
                        </div>

                        <div className={"modalBody"}>
                            {children}
                        </div>
                    </div>
                </div>
                : <></>
            }
        </>
    );
};

export default Modal;