const React = require("react");

function Index({vegetables}) {
  return (
    <div>
      <nav>
        <a href="/vegetables/new">Create a New vegetable</a>
      </nav>
      <h1>vegetables Index Page</h1>
      <ul>
        {vegetables.map((vegetable) => {
          return (
            <li key={vegetable._id}>
              The <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is{" "}
              {vegetable.color} <br></br>
              {vegetable.readyToEat
                ? `It is ready to eat`
                : `It is not ready to eat`}
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;
