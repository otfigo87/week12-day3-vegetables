const React = require("react");

function Show({ vegetable }) {
  console.log(vegetable);
  return (
    <div>
      <h1>Hello Show Page</h1>
      <p>
        The {vegetable.name} is {vegetable.color}{" "}
        {vegetable.readyToEat
          ? "Its is ready to eat"
          : "It is not ready to eat... Cant touch this"}
      </p>
    </div>
  );
}

module.exports = Show;
