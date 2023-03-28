import { FC } from 'react';
import Card, { CardVariant } from "../components/Card";
import EventsExample from "../components/EventsExample";

const ToolsPage: FC = () => {
	return (
    <div>
      <EventsExample />
      <Card
        onClick={(num) => console.log("HI", num)}
        variant={CardVariant.primary}
        width="150px"
        height="50px"
      >
        <button>Button</button>
      </Card>
    </div>
  );
};

export default ToolsPage;