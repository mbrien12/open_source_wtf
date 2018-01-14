import "./issues.css";

const issueContainer = document.getElementById("issues");
const GitUrlParse = require("git-url-parse"); // https://www.npmjs.com/package/git-url-parse
const moment = require("moment");

const url =
  "https://api.github.com/search/issues?q=label:beginner+no:assignee+language:html+state:open&sort=created";

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.items.forEach(issue => {
      const repoName = GitUrlParse(`${issue.html_url}`).name.split("/issues");
      const dateSplit = `"${issue.created_at}"`.split("T");
      const date = moment(`${dateSplit}`).format("DD/MM/YYYY");
      issueContainer.innerHTML += `<div class="card">
                                    <a href="${
                                      issue.html_url
                                    }" target="_blank"></a>
                                    <p class="card-title">${issue.title}</p>
                                    <div class="card-content">
                                      <div class="card-repo-name">
                                        <i class="fa fa-github" aria-hidden="true"></i>
                                        <p>${repoName[0]}</p>
                                      </div>
                                        <div class="card-bottom-banner">
                                          <p>${date}</p>
                                            <div class="card-comments">
                                              <i class="fa fa-comments" aria-hidden="true"></i>
                                              <p>${issue.comments}</p>
                                            </div>
                                        </div>
                                     </div>
                                   </div>`;
    });
  });
