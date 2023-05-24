import { Card, Button } from "react-bootstrap";

export const CustomerItem = ({ post, onDeleteClick }) => {
  const { title, text, image, id } = post;

  return (
    <Card className="text-center">
      <Card.Header>
        <h1>{title}</h1>
      </Card.Header>
      <Card.Body>
        <Card.Title>{text}</Card.Title>
        <Card.Title>{image}</Card.Title>
        <Button onClick={() => onDeleteClick(id)} variant="primary">
          Delete
        </Button>
      </Card.Body>
      {/* <Card.Footer className="text-muted"></Card.Footer> */}
    </Card>
  );
};
