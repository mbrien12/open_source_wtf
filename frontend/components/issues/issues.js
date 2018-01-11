import "./issues.css";

const issueList = document.getElementById("issues");
const url =
  "https://api.github.com/search/issues?q=label:beginner+language:html+state:open&sort=created";

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.items.forEach(issue => {
      const issueTitle = issue.title;
      const dateOpened = issue.created_at;
      issueList.innerHTML += `<li>Title = ${issueTitle}</li>`;
      issueList.innerHTML += `Opened on ${dateOpened}`;
    });
  });
