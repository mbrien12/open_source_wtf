import "./issues.css";

const issueList = document.getElementById("issues");
const url =
  "https://api.github.com/search/issues?q=label:beginner+language:html+state:open&sort=created";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const issueTitle = data.items[0].title;
    issueList.innerHTML = `<li>${issueTitle}</li>`;
  });
