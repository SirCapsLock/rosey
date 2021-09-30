import React from "react";
import CategoryHeader from "./CategoryHeader";
import ListItem from "./ListItem";

export default class ShoppingList extends React.Component {
  render() {
    return (
      <div>
        <div>
          <CategoryHeader />
        </div>
        <div>
          <ListItem />
        </div>
        <div>
          <ListItem />
        </div>
        <div>
          <ListItem />
        </div>
        <div>
          <CategoryHeader />
        </div>
        <div>
          <ListItem />
        </div>
        <div>
          <ListItem />
        </div>
        <div>
          <ListItem />
        </div>
      </div>
    );
  }
}
