import NavBar from "./components/Navbar";
import { LandingPageItem, InputFilter, InputFilterDiv, InputFilterButton, MagnifyGlassImg} from "./styles";
import DiscoverAiApp from "./components/DiscoverAiApp";

function App() {
  return (
    <>
      <LandingPageItem />
      <NavBar />
      <DiscoverAiApp />
      <InputFilterDiv>
        <InputFilter placeholder={"How can we help you?"}/>
        <InputFilterButton >
          <MagnifyGlassImg alt="" src="/magnifying_glass.svg" />
        </InputFilterButton>
      </InputFilterDiv>
    </>
  );
}

export default App;
