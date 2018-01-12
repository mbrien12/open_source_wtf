import "./issues.css";

const issueContainer = document.getElementById("issues");
const GitUrlParse = require("git-url-parse"); // https://www.npmjs.com/package/git-url-parse

console.log(
  GitUrlParse("git@github.com:IonicaBizau/node-git-url-parse.git").name
);
const url =
  "https://api.github.com/search/issues?q=label:beginner+no:assignee+language:html+state:open&sort=created";

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.items.forEach(issue => {
      const repoName = GitUrlParse(`${issue.html_url}`).name;
      console.log(repoName);
      issueContainer.innerHTML += `<h3>${issue.title}</h3>
                                   <p>${repoName}</p>
                                   <p>${issue.created_at}
                                   <p>${issue.comments}</p>`;
    });
  });

// Regex cut at (\/issues)
