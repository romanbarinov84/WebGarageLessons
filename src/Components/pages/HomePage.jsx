import { ControlledForm } from "./ControlledForm";
import "./HomePage.css";
import { UnControlledForm } from "./UnControlledForm";


export default function HomePage() {
  return (
    <>
      <div className="content">
        <ControlledForm/>
        <UnControlledForm/>
        </div>;
    </>
  );
}
