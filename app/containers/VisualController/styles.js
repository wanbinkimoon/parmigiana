import styled from 'styled-components';
import colors from '../../utils/colors';

export const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  padding: 16px;
  flex-direction: column;
`

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

export const Cell = styled.div`
  width: 50%;
  height: calc(100% - 32px);
  margin: 16px;
  padding: 8px;
  display: flex;
  border: 1px solid ${colors.base.accent};
  flex-direction: column;
`
export const Title = styled.h2`
  margin: 0 0 16px 0;
  font-weight: 300;
  color: ${colors.base.accent};
  font-size: 12px;
  height: 16px;
  text-transform: uppercase;
`
export const ViewrWrap = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 32px);
`
