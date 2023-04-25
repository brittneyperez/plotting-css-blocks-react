import styled from "styled-components";

export const Main = styled.main`
    background: salmon;
    /* padding: 40px 0; */
    padding: 1em;
    border: 2px solid indianred;
    display: grid;
    
    .subcontents {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        height: 300px;
        gap: 1em;
    }
    
    @media(max-width: ${({theme}) => theme.mobile}) {
        .subcontents {
            grid-template-columns: none;
        }
    }
`