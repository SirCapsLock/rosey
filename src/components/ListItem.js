import React from "react";

export default class ListItem extends React.Component {
  render() {
    return (
      <div className="bg-blue-100 my-2 pl-2">
        <div className="flex flex-row items-center px-2 py-4 space-x-4">
          <div>
            <input type="checkbox"></input>
          </div>
          <p>Cotton Candy</p>
        </div>
      </div>
    );
  }
}
