import { LogOut } from "react-feather";
import Button from "../Button/Button";

export default function Logout() {
  return (
    <Button icon={<LogOut />} reverse={true}>
      USER_NAME
    </Button>
  );
}
