import React from 'react'
import styled from 'styled-components'
import { Modal } from '../modal/Modal'

const ContentWrapper = styled.div`
    height: 500px;
    width: 700px;
    background-color: #fff;
`
const content = styled.div`

`

export const Product = () => {
    return (
        <Modal>
            <ContentWrapper>
                <h1> Lozalize adione ou edite um produto</h1>
            </ContentWrapper>
        </Modal>
    )
}

