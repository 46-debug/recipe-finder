import React from "react";

const Card = ({ name, img, showInfo }) => {

    return (
        <>
            <div className="card_main">
                <img className="card_img"
                    src={img}
                    alt="food image"
                />
                <div className="button_main">
                    <div className="name_div"> {name} </div>
                    <button className="btn" onClick={showInfo}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="15"
                            viewBox="0 0 10 15"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.88899 6.43076C9.16989 6.71201 9.32767 7.09325 9.32767 7.49076C9.32767 7.88826 9.16989 8.26951 8.88899 8.55076L3.23299 14.2088C2.9516 14.49 2.57 14.648 2.17214 14.6479C1.77428 14.6478 1.39275 14.4897 1.11149 14.2083C0.830229 13.9269 0.67227 13.5453 0.672363 13.1474C0.672457 12.7495 0.830596 12.368 1.11199 12.0868L5.70799 7.49076L1.11199 2.89476C0.838617 2.61198 0.687245 2.23315 0.690476 1.83985C0.693706 1.44655 0.851282 1.07026 1.12926 0.792013C1.40725 0.513768 1.78339 0.355838 2.17669 0.352236C2.56998 0.348634 2.94896 0.499649 3.23199 0.772756L8.88999 6.42976L8.88899 6.43076Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Card;

