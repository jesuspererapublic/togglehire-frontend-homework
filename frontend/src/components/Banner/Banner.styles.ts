import styled from 'styled-components';

interface BannerStylesProps {
    ok: boolean;
}

export const BannerContainer = styled.div<BannerStylesProps>`
  align-items: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 33%;
  padding: 8px;
  background-color: ${props => props.ok ? "lightgreen" : "lightsalmon"};
`;

export const BannerMessage = styled.span`
  font-size: 16px;
`;

export const BannerUL = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  list-style: disc;
`;

export const BannerLI = styled.li`
  font-size: 12px;
`;
