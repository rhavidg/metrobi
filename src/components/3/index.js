import {
  Container,
  ExtraContent,
  Footer,
  Header,
  Hero,
  LeftColumn,
  LeftColumnBig,
  MainContent,
  RelatedImages,
  RelatedPosts,
  RightColumn,
  RightColumnBig,
  SideBar,
} from "./styles";

export default function TaskThree() {
  return (
    <>
      <Header>Header</Header>
      <Container>
        <LeftColumn>
          <Hero>Hero</Hero>
          <SideBar>SideBar</SideBar>
        </LeftColumn>
        <RightColumn>
          <MainContent>Main Content</MainContent>
          <ExtraContent>Extra Content</ExtraContent>
        </RightColumn>
      </Container>
      <Container>
        <LeftColumnBig>
          <RelatedImages>Related Images</RelatedImages>
        </LeftColumnBig>
        <RightColumnBig>
          <RelatedPosts>Related Posts</RelatedPosts>
        </RightColumnBig>
      </Container>
      <Footer>Footer</Footer>
    </>
  );
}
