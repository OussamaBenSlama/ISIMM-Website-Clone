import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { animated, useSpring } from 'react-spring';

const AnimatedCard = animated(Card);

const Events = () => {
  const cardData = [
    {
      id: 1,
      image: 'https://placekitten.com/300/200', // Replace with your event image URL
      description: 'Short description for Event 1',
    },
    {
      id: 2,
      image: 'https://placekitten.com/300/200', // Replace with your event image URL
      description: 'Short description for Event 2',
    },
    // Add more events as needed
  ];

  const [showMore, setShowMore] = React.useState(false);

  // Animation spring for card opacity
  const cardAnimation = useSpring({
    opacity: showMore ? 1 : 0,
  });

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Faculty Events</h2>
      <Row>
        {cardData.slice(0, showMore ? cardData.length : 2).map((event) => (
          <Col key={event.id} xs={12} md={6} className="mb-4">
            <AnimatedCard style={cardAnimation} className="h-100">
              <Card.Img variant="top" src={event.image} alt={`Event ${event.id}`} />
              <Card.Body>
                <Card.Text>{event.description}</Card.Text>
              </Card.Body>
            </AnimatedCard>
          </Col>
        ))}
      </Row>
      <div className="text-center">
        <Button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less Events' : 'Show More Events'}
        </Button>
      </div>
    </Container>
  );
};

export default Events;
