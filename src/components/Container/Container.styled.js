import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  @media (min-width: 768px) {
    min-width: 768px;
    /* padding: 24px 32px 0; */
  }

  @media (min-width: 1280px) {
    min-width: 1280px;
    /* padding: 20px 16px 0; */
  }
`;
