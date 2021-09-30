/* For Cricket */
import React from "react";
import AppHeader from "./components/AppHeader";
import ShoppingList from "./components/ShoppingList";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <AppHeader />
        </div>
        <div>
          <ShoppingList />
        </div>
      </div>
    );
  }
}
