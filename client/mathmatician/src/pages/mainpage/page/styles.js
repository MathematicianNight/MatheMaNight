import styled from '@emotion/styled';
import { Colors, Images } from '../../../utils/style';

export const MainpageContainer = styled.section`
  width: 100%;
  height: ${window.innerHeight}px;
  margin: 0 auto;
  background-image: linear-gradient(180deg, #0F0019 0%, #140065 48.26%, #987FFF 100%);
  color: #FFFFFF;
  text-align: center;
  overflow: auto scroll;
  scroll-snap-type: y mandatory;

  .child {
    height: 100%;
    font-size: 2rem;
    line-height: ${window.innerHeight}px;
    scroll-snap-align: start;
  }
`;
