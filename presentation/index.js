import React from "react";
import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Quote,
  Slide,
  Text
} from "spectacle";
const images = {
  formidagon: require("../assets/formidable-logo.svg"),
  goodWork: require("../assets/good-work.gif")
};
import createTheme from "spectacle/lib/themes/default";
const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        autoplay={true}
        autoplayDuration={3000}
        autoplayLoop={true}
        theme={theme}
        transition={["zoom", "slide"]}
        transitionDuration={500}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" fit bold textColor="tertiary">
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.formidagon} width={800} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} caps textColor="primary">
            Typography
          </Heading>
          <Heading size={1} textColor="primary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard Text
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps textColor="secondary">
            Standard List
          </Heading>
          <List>
            <Appear>
              <ListItem>Item 1</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 2</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 3</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 4</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom", "slide"]}>
          <Image src={images.goodWork} width={500} />
        </Slide>
        <Slide>
          <Anim
            transitionDuration={500}
            fromStyle={{
              opacity: 0,
              transform: "translate3d(0px, -100px, 0px)  scale(1) rotate(0deg)"
            }}
            toStyle={[
              {
                opacity: 1,
                transform: "translate3d(0px, 0px, 0px)  scale(1) rotate(0deg)"
              },
              {
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale(1.6) rotate(-15deg)"
              },
              {
                opacity: 1,
                transform: "translate3d(0px, 0px, 0px)  scale(0.8) rotate(0deg)"
              },
              {
                opacity: 1,
                transform:
                  "translate3d(0px, -200px, 0px)  scale(0.8) rotate(0deg)"
              }
            ]}
            easing={"bounceOut"}
            onAnim={(forwards, animIndex) => {
              console.log("forwards ", forwards);
              console.log("animIndex ", animIndex);
            }}
          >
            <div>
              <Heading caps size={6}>
                Flexible
                <br />
                animations
              </Heading>
            </div>
          </Anim>
        </Slide>
      </Deck>
    );
  }
}
