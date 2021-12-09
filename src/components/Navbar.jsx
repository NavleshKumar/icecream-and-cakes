import React from 'react'


function NavBar(props) {
    return (
        <React.Fragment>
            <div className="navBar">
                <div className="navBar-brand"><span>Icecreams & Cakes</span></div>
                <div className="navBar-links">
                    <button onClick={() => props.setCakeForm(true)}><span>Add cake</span></button>
                    <button onClick={() => props.setIceCreamForm(true)}><span>Add icecream</span></button>
                </div>
            </div>
            <style jsx="true">{`
                .navBar{
                    display: flex;
                    justify-content: space-between;
                    padding: 1rem;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
                    background-color: #fff;
                    font-size: 1.2rem;
                }

                .navBar a{
                    text-decoration: none !important;
                }

                .navBar-brand span{
                    color: #610094;
                    cursor: pointer;
                }

                .navBar-brand span:hover{
                    color: #610094;
                    color: #B608DC;
                }

                .navBar-links span{
                    margin-right: 1rem;
                    cursor: pointer;
                    color: #610094;
                }

                .navBar-links span:hover{
                    color: #B608DC;
                }

            `}</style>
        </React.Fragment>
    )
}

export default NavBar
