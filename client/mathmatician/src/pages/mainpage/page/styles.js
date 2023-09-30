import styled from '@emotion/styled';
import { Images, Colors } from '../../../utils/style';

export const MainpageContainer = styled.section`
  border: 5px solid aqua;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  background-image: linear-gradient(180deg, #0F0019 0%, #140065 48.26%, #987FFF 100%);
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  overflow: auto scroll;
  scroll-snap-type: y mandatory;
  color: ${Colors.white};
  text-align: center;

  .child {
    border: 5px solid red;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
  }
`;