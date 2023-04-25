import styled from 'styled-components';

export const Container = styled.div`
    width: 1000px;
    max-width: 100%;
    padding: 20px;
    margin: 0 auto;
    background: whitesmoke;
    border: 2px solid silver;
    margin-top: 1rem;
    
    .body {
        display: grid;
        grid-template-columns: 20% auto;
        gap: 1em;
    }
    
    @media(max-width: ${({theme})=>theme.tablet}) {
        .body {
            grid-template-columns: none;
        }
    }
`