import styled from 'styled-components';

export const StyledFeedbackButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
`;

export const StyledFeedbackButton = styled.button`
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    background-color: rgba(52, 35, 92, 0.316);
    border: none;
    border-radius: 5px;
    :hover {
        background-color: #1b5bd3eb;
        color: white;
        scale: 1.2;
    }
`