import React from "react";

const Info = ({ Instructions, Ingredient1, Ingredient2, Ingredient3, Ingredient4, Ingredient5, Ingredient6, Ingredient7, Ingredient8, Ingredient9, Ingredient10, Ingredient11, Measure1, Measure2, Measure3, Measure4, Measure5, Measure6, Measure7, Measure8, Measure9, Measure10, Measure11, close }) => {

    return (
        <>
            <div className="info_main" contentEditable="false">
                <div className="info_video">
                    <button className="btn_c" onClick={close}><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 26 26" fill="none">
                        <path d="M22.1924 3.80762C17.1238 -1.26092 8.87615 -1.26092 3.80761 3.80762C-1.26093 8.87616 -1.26093 17.1239 3.80761 22.1924C8.87615
                         27.2609 17.1238 27.2609 22.1924 22.1924C27.2609 17.1239 27.2609 8.87616 22.1924 3.80762ZM20.7782 5.22184C25.0823 9.52599 25.0823 
                         16.474 20.7782 20.7782C16.474 25.0823 9.52598 25.0823 5.22183 20.7782C0.917667 16.474 0.917667 9.52599 5.22183 5.22184C9.52598 0.917677
                          16.474 0.917677 20.7782 5.22184ZM17.0206 7.96117L8.9801 7.96187H7.96186L7.96186 8.98011L7.96257 17.022L9.97358 17.0447L9.97358 
                          11.3878L17.2426 18.6569L18.6569 17.2427L11.3878 9.97359L17.0447 9.97359L17.0206 7.96117Z" fill="white" />
                    </svg> </button>



                </div>

                <h3>Ingredients</h3>
                <div className="textarea">

                    <p>{Ingredient1}-{Measure1}</p>
                    <p>{Ingredient2} -{Measure2}</p>
                    <p>{Ingredient3} -{Measure3}</p>
                    <p>{Ingredient4}- {Measure4}</p>
                    <p>{Ingredient5} -{Measure5}</p>
                    <p>{Ingredient6} -{Measure6}</p>
                    <p>{Ingredient7} -{Measure7}</p>
                    <p>{Ingredient8} -{Measure8}</p>
                    <p>{Ingredient9} -{Measure9}</p>
                    <p>{Ingredient10}- {Measure10}</p>
                    <p>{Ingredient11}- {Measure11}</p>

                </div>

                <h3>Instructions</h3>
                <div className="inst">{Instructions}</div>
            </div>


        </>
    )
};
export default Info;