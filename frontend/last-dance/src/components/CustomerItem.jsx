import { Card, Button } from "react-bootstrap";

export const CustomerItem = ({ post }) => {
  const handleOnClick = () => {
    alert("you have clicked!");
  };

  const { title, text, image } = post;

  return (
    <Card className="text-center">
      <Card.Header>
        <h1>{title}</h1>
      </Card.Header>
      <Card.Body>
        <Card.Title>{text}</Card.Title>
        <Card.Title>{image}</Card.Title>
        <Button onClick={handleOnClick} variant="primary">
          Delete
        </Button>
      </Card.Body>
      {/* <Card.Footer className="text-muted"></Card.Footer> */}
    </Card>
  );
};
