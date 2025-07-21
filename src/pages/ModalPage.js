import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is important agreement for you to accept</p>
    </Modal>
  );
  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at
        justo et mauris luctus efficitur sed vel dolor. Donec vel velit
        condimentum, dapibus quam id, tincidunt lorem. Etiam neque lectus,
        mattis et ante non, semper efficitur felis. Aliquam erat volutpat.
        Nullam ac nisi vel purus volutpat varius. In eu dignissim velit. Aliquam
        ultricies sem vitae tristique varius. Maecenas suscipit magna ac ipsum
        iaculis, et tincidunt risus ultrices. Integer mattis placerat sodales.
        Nulla porta vestibulum erat ullamcorper tincidunt. Praesent eleifend
        posuere ex. Cras mauris felis, ultrices a scelerisque quis, ultricies eu
        libero. Duis nisl nibh, convallis non sollicitudin sed, egestas sit amet
        orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at
        justo et mauris luctus efficitur sed vel dolor. Donec vel velit
        condimentum, dapibus quam id, tincidunt lorem. Etiam neque lectus,
        mattis et ante non, semper efficitur felis. Aliquam erat volutpat.
        Nullam ac nisi vel purus volutpat varius. In eu dignissim velit. Aliquam
        ultricies sem vitae tristique varius. Maecenas suscipit magna ac ipsum
        iaculis, et tincidunt risus ultrices. Integer mattis placerat sodales.
        Nulla porta vestibulum erat ullamcorper tincidunt. Praesent eleifend
        posuere ex. Cras mauris felis, ultrices a scelerisque quis, ultricies eu
        libero. Duis nisl nibh, convallis non sollicitudin sed, egestas sit amet
        orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at
        justo et mauris luctus efficitur sed vel dolor. Donec vel velit
        condimentum, dapibus quam id, tincidunt lorem. Etiam neque lectus,
        mattis et ante non, semper efficitur felis. Aliquam erat volutpat.
        Nullam ac nisi vel purus volutpat varius. In eu dignissim velit. Aliquam
        ultricies sem vitae tristique varius. Maecenas suscipit magna ac ipsum
        iaculis, et tincidunt risus ultrices. Integer mattis placerat sodales.
        Nulla porta vestibulum erat ullamcorper tincidunt. Praesent eleifend
        posuere ex. Cras mauris felis, ultrices a scelerisque quis, ultricies eu
        libero. Duis nisl nibh, convallis non sollicitudin sed, egestas sit amet
        orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at
        justo et mauris luctus efficitur sed vel dolor. Donec vel velit
        condimentum, dapibus quam id, tincidunt lorem. Etiam neque lectus,
        mattis et ante non, semper efficitur felis. Aliquam erat volutpat.
        Nullam ac nisi vel purus volutpat varius. In eu dignissim velit. Aliquam
        ultricies sem vitae tristique varius. Maecenas suscipit magna ac ipsum
        iaculis, et tincidunt risus ultrices. Integer mattis placerat sodales.
        Nulla porta vestibulum erat ullamcorper tincidunt. Praesent eleifend
        posuere ex. Cras mauris felis, ultrices a scelerisque quis, ultricies eu
        libero. Duis nisl nibh, convallis non sollicitudin sed, egestas sit amet
        orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at
        justo et mauris luctus efficitur sed vel dolor. Donec vel velit
        condimentum, dapibus quam id, tincidunt lorem. Etiam neque lectus,
        mattis et ante non, semper efficitur felis. Aliquam erat volutpat.
        Nullam ac nisi vel purus volutpat varius. In eu dignissim velit. Aliquam
        ultricies sem vitae tristique varius. Maecenas suscipit magna ac ipsum
        iaculis, et tincidunt risus ultrices. Integer mattis placerat sodales.
        Nulla porta vestibulum erat ullamcorper tincidunt. Praesent eleifend
        posuere ex. Cras mauris felis, ultrices a scelerisque quis, ultricies eu
        libero. Duis nisl nibh, convallis non sollicitudin sed, egestas sit amet
        orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at
        justo et mauris luctus efficitur sed vel dolor. Donec vel velit
        condimentum, dapibus quam id, tincidunt lorem. Etiam neque lectus,
        mattis et ante non, semper efficitur felis. Aliquam erat volutpat.
        Nullam ac nisi vel purus volutpat varius. In eu dignissim velit. Aliquam
        ultricies sem vitae tristique varius. Maecenas suscipit magna ac ipsum
        iaculis, et tincidunt risus ultrices. Integer mattis placerat sodales.
        Nulla porta vestibulum erat ullamcorper tincidunt. Praesent eleifend
        posuere ex. Cras mauris felis, ultrices a scelerisque quis, ultricies eu
        libero. Duis nisl nibh, convallis non sollicitudin sed, egestas sit amet
        orci.
      </p>
    </div>
  );
}

export default ModalPage;
