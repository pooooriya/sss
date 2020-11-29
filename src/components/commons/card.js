import React from "react";
import { Card, Image, Container } from "./cardstyle";
import { Row, Col } from "react-bootstrap";
const StoreCard = () => {
  return (
    <>
      {/* <Card>
        <Image src="https://images.punkapi.com/v2/2.png" />
      </Card> */}
      <Container>
        <Card>
          <Image src="https://images.punkapi.com/v2/2.png" />
        </Card>{" "}
      </Container>
    </>
  );
};

export default StoreCard;
