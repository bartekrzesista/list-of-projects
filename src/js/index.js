import '../scss/index.scss';

fetch('https://api.github.com/users/bartekrzesista/repos?sort=created')
.then(resp => resp.json())
.then(resp => {
    const container = document.querySelector(".menu__content-grid--js");
    for(let repo of resp) {
        const {name, language, created_at, html_url} = repo;
        const date = created_at.slice(0, 10);
        
        const template = `<article class="repo">
        <ul class="repo__list">
          <li class="repo__list-item">
            <span class="repo-left-span">Name:</span
            ><span class="repo-right-span">${name}</span>
          </li>
          <li class="repo__list-item">
            <span class="repo-left-span">Language:</span
            ><span class="repo-right-span">${language}</span>
          </li>
          <li class="repo__list-item">
            <span class="repo-left-span">Creation date:</span
            ><span class="repo-right-span">${date}</span>
          </li>
          <li class="repo__list-item">
            <span class="repo-left-span">Github:</span
            ><span class="repo-right-span"><a href="${html_url}" title="${name} - repository">LINK</a></span>
          </li>
        </ul>
      </article>`;
      container.innerHTML += template;
    }
})
.catch(e => {
    console.log('Failed to fetch');
})