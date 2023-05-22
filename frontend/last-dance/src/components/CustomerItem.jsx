import { Card, Button } from "react-bootstrap";

export const CustomerItem = () => {
  return (
    <Card className="text-center">
      <Card.Header>New-Client-Card</Card.Header>
      <Card.Body>
        <Card.Title>Please Welcome our newest client</Card.Title>
        <Card.Text>Welcome!</Card.Text>
        <Button variant="primary">Add new customer</Button>
      </Card.Body>
      {/* <Card.Footer className="text-muted"></Card.Footer> */}
    </Card>
  );
};
