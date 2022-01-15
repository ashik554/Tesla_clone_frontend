import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Container = styled.div`
  height: 100vh;
`;
const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order Online for Touchless Delivery and Enjoy"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exciting Inventory"
      />
      <Section
        title="Model X"
        desc="Order Online for Touchless Delivery and Enjoy"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exciting Inventory"
      />

      <Section
        title="Model Y"
        desc="Order Online for Touchless Delivery and Enjoy"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exciting Inventory"
      />
      <Section
        title="Model 3"
        desc="Order Online for Touchless Delivery and Enjoy"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exciting Inventory"
      />
      <Section
        title="Lowest cost Solar Panel in Germany"
        desc="Complete refundable"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        desc=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
      />
    </Container>
  );
};

export default Home;
