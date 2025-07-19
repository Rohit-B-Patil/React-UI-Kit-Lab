import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

import Button from "../components/Button";
function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-5">
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCloudDownload />
          Add to cart
        </Button>
      </div>
      <div>
        <Button warning>Buy here</Button>
      </div>
      <div>
        <Button danger rounded>
          <GoDatabase />
          Buy here
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          Buy here
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
