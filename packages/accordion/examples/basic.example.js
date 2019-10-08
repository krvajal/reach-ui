import React from "react";
import "../styles.css";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel
} from "../src";
import ExampleForm from "./ExampleForm";

export const name = "Basic";

export const Example = () => (
  <Accordion className="animated">
    <AccordionItem>
      <AccordionHeader>You can toggle me</AccordionHeader>
      <AccordionPanel>
        Ante rhoncus facilisis iaculis nostra faucibus vehicula ac consectetur
        pretium, lacus nunc consequat id viverra facilisi ligula eleifend,
        congue gravida malesuada proin scelerisque luctus est convallis.
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem disabled>
      <AccordionHeader>You can't toggle me</AccordionHeader>
      <AccordionPanel>
        Ante rhoncus facilisis iaculis nostra faucibus vehicula ac consectetur
        pretium, lacus nunc consequat id viverra facilisi ligula eleifend,
        congue gravida malesuada proin scelerisque luctus est convallis.
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>You can also toggle me</AccordionHeader>
      <AccordionPanel>
        <ExampleForm />
        Ante rhoncus facilisis iaculis nostra faucibus vehicula ac consectetur
        pretium, lacus nunc consequat id viverra facilisi ligula eleifend,
        congue gravida malesuada proin scelerisque luctus est convallis.
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);
