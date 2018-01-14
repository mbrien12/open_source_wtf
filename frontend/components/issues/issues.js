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

      issueContainer.innerHTML += `<div class="card">
                                    <p class="card-title">${issue.title}</p>
                                    <div class="card-content">
                                      <div class="card-repo-name">
                                        <i class="fa fa-github" aria-hidden="true"></i>
                                        <p>${repoName[0]}</p>
                                      </div>
                                        <div class="card-bottom-banner">
                                          <p>${dateSplit[0].substr(1)}</p>
                                            <div class="card-comments">
                                              <i class="fa fa-comments" aria-hidden="true"></i>
                                              <p>${issue.comments}</p>
                                            </div>
                                        </div>
                                     </div>
                                   </div>`;
    });
  });
