import "./issues.css";

const issueContainer = document.getElementById("issues");
const url =
  "https://api.github.com/search/issues?q=label:beginner+language:html+state:open&sort=created";

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.items.forEach(issue => {
      issueContainer.innerHTML += `<h3>${issue.title}</h3>
                                   <p>Github repo</p>
                                   <p>${issue.created_at}
                                   <p>${issue.comments}</p>`;
    });
  });
