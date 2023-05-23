import { Card, Button } from "react-bootstrap";

export const CustomerItem = () => {
  const handleOnClick = () => {
    alert("you have clicked!");
  };

  return (
    <Card className="text-center">
      <Card.Header>Customer</Card.Header>
      <Card.Body>
        <Card.Title>Phone number</Card.Title>
        <Card.Text>Name Surname</Card.Text>
        <Button onClick={handleOnClick} variant="primary">
          Delete
        </Button>
      </Card.Body>
      {/* <Card.Footer className="text-muted"></Card.Footer> */}
    </Card>
  );
};
