import styled from '@emotion/styled';
import { Colors, Images } from '../../../utils/style';

export const MainpageContainer = styled.section`
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
  margin: 0 auto;
  background-image: linear-gradient(180deg, #0F0019 0%, #140065 48.26%, #987FFF 100%);
  color: #FFFFFF;

  overflow: auto scroll;
  scroll-snap-type: y mandatory;

  .parent {
    height: 4220px;
    text-align: center;
  }

  .child {
    height: ${window.innerHeight}px;
    font-size: 50px;
    line-height: ${window.innerHeight}px;
    scroll-snap-align: start;
  }

`;