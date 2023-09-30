import styled from '@emotion/styled';
import LaunchUserMapApp from '../mainpage/component/mapComponent/index';

const Container = styled.div`
  /* width: ${window.innerWidth}px; */
  width: 100%;
  height: ${window.innerHeight}px;
  background-image: linear-gradient(180deg, #0F0019 0%, #140065 48.26%, #987FFF 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: absolute;
  top: 0;
  left: 0;
  color: #FFFFFF;
`;

const Hellokitty = () => {
  return (
    <Container>
      <LaunchUserMapApp />
    </Container>
  );
};

export default Hellokitty;