import { useContext } from "react"
import styled from "styled-components"
import { MyContext } from "../../context/MyContext"


const StyledDiv = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(7, 7, 7, 0.3);
    position: absolute;
    z-index: 1;
`

export const Overlay = ({ children, closeModal }) => {
    const { handleCloseModal } = useContext(MyContext);
    return (
        <StyledDiv onClick={handleCloseModal} closeModal={closeModal}>
           {children}
        </StyledDiv>
    )
}