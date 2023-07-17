import { FlexDiv, DiscoverDiv, AIBoastDiv, DiscoverAIBoostDiv , DiscoverDescriptionDiv, TrolleyImg, CoinsImg, AITags, AITagsDiv, FireImg, ViewProductBtn, ViewProduct, AIBoastImg} from "../styles";
import { DISCOVER, AI_BOOST, AI_APP_DESCRIPTION, ANALYTICS, AUTOMATION, VIEW_PRODUCT } from "../constants/text";

const DiscoverAiApp = () => {
    return(
        <FlexDiv style={{justifyContent:'space-between'}}>
        <DiscoverAIBoostDiv>
        <DiscoverDiv>{DISCOVER}</DiscoverDiv>
        <AIBoastDiv>{AI_BOOST}</AIBoastDiv>
        <DiscoverDescriptionDiv>{AI_APP_DESCRIPTION}</DiscoverDescriptionDiv>
        <FlexDiv>
            <TrolleyImg alt="" src="/trolley.svg"/>
            <CoinsImg alt="" src="/coins.svg"/>
            <AITagsDiv>
            <AITags>{ANALYTICS}</AITags>
            <AITags>{AUTOMATION}</AITags>
            </AITagsDiv>
        </FlexDiv>
        <FlexDiv>
            <FireImg alt="" src="/fire.svg"/>
            <ViewProductBtn><ViewProduct>{VIEW_PRODUCT}</ViewProduct></ViewProductBtn>
        </FlexDiv>
        </DiscoverAIBoostDiv>   
        <AIBoastImg />
        </FlexDiv>         
    );
};
export default DiscoverAiApp;

