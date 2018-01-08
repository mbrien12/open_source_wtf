import "./issues.css";

// const ul = document.getElementById("issues");
const url =
  "https://api.github.com/search/issues?q=label:beginner+language:ruby+state:open&sort=created";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
