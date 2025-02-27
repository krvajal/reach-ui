import React from "react";
import "../styles.css";
import { action } from "@storybook/addon-actions";
import { Menu, MenuList, MenuButton, MenuItem } from "../src/index";

export let name = "Basic";

export let Example = () => (
  <Menu>
    <MenuButton id="example-button">
      Actions <span aria-hidden="true">▾</span>
    </MenuButton>
    <MenuList>
      <MenuItem onSelect={action("Download")}>Download</MenuItem>
      <MenuItem onSelect={action("Copy")}>Create a Copy</MenuItem>
      <MenuItem onSelect={action("Mark as Draft")}>Mark as Draft</MenuItem>
      <MenuItem onSelect={action("Delete")}>Delete</MenuItem>
    </MenuList>
  </Menu>
);
