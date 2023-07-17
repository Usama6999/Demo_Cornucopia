import { NavBarDiv, CornucopiaIcon, FlexDiv, HomeBtn, ProductBtn, ContactBtn, LoginBtn, JoinTheVenture, JoinTheVentureBtn, JoinTheVentureBtnChild, VectorIcon } from '../styles';
import { NAVBAR_CONTACT, NAVBAR_HOME, NAVBAR_LOGIN, NAVBAR_PRODUCT, JOIN_VENTURE } from '../constants/text';
import { useMediaQuery } from 'react-responsive'

const NavBar = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 900 })
    return (
      <NavBarDiv>
          <CornucopiaIcon
            alt=""
            src="/cornucopia_landing_icon.png"
          />
          {isDesktopOrLaptop ?  
          <FlexDiv>
            <HomeBtn href="#home">{NAVBAR_HOME}</HomeBtn>
            <ProductBtn href="#product">{NAVBAR_PRODUCT}</ProductBtn>
            <ContactBtn href="#contact">{NAVBAR_CONTACT}</ContactBtn>
            <LoginBtn>{NAVBAR_LOGIN}</LoginBtn>
            <JoinTheVentureBtn>
              <JoinTheVentureBtnChild >
                <VectorIcon alt="" src="/dollar.svg" />
                <JoinTheVenture>{JOIN_VENTURE}</JoinTheVenture>
              </JoinTheVentureBtnChild>
            </JoinTheVentureBtn>
          </FlexDiv> :
          <div></div>
          }
      </NavBarDiv>
    );
  }
  
  export default NavBar;
  