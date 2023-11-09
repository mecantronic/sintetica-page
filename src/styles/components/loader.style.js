import styled from "styled-components";

export const LoaderContainer = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  animation: spin 2s linear infinite;
  height: 14px;
  width: 14px;
  margin: 5px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
