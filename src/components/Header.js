import React from 'react';
import styled from 'styled-components';
const S = {};


S.Header = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export default ({children}) => {
    return (
        <S.Header>
            {children}
        </S.Header>
    )
}