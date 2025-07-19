import Accordion from "./components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "1",
      label: "React",
      content:
        "You can learn React,You can learn React,You can learn React,You can learn React,You can learn React,You can learn React",
    },
    {
      id: "2",
      label: "Javascript",
      content:
        "You can learn JS,You can learn JS,You can learn JS,You can learn JS,You can learn JS,You can learn JS",
    },
    {
      id: "3",
      label: "CSS",
      content:
        "You can learn CSS,You can learn CSS,You can learn CSS,You can learn CSS,You can learn CSS,You can learn CSS",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
