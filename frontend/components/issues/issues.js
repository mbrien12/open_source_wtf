import "./issues.css";

const issueContainer = document.getElementById("issues");
const GitUrlParse = require("git-url-parse"); // https://www.npmjs.com/package/git-url-parse

const url =
  "https://api.github.com/search/issues?q=label:beginner+no:assignee+language:html+state:open&sort=created";

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.items.forEach(issue => {
      const repoName = GitUrlParse(`${issue.html_url}`).name.split("/issues");
      const dateSplit = `"${issue.created_at}"`.split("T");

      issueContainer.innerHTML += `<h3>${issue.title}</h3>
                                   <p>${repoName[0]}</p>
                                   <p>${dateSplit[0].substr(1)}</p>
                                   <p>${issue.comments}</p>`;
    });
  });
