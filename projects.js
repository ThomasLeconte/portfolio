import './projects.css'

const categories = {
  "categories": [
    {
      "name": "School projects",
      "icon": "fa fa-graduation-cap",
      "projects": [
        {
          "name": "ANTLR4 Calculator",
          "description": "A scientific calculator that uses ANTLR4 to parse the input and evaluate the expression.",
          "languages": ["Java", "antlr4"],
          "link": "https://github.com/ThomasLeconte/ANTLR4-Calculator"
        },
        {
          "name": "Todo List",
          "description": "A simple todo list application that uses Vue.js",
          "languages": ["JavaScript", "Vue.js"],
          "link": "https://github.com/ThomasLeconte/todo-app"
        }
      ]
    },
    {
      "name": "Internships",
      "icon": "fa fa-briefcase",
      "projects": [
        {
          "name": "Appli CET",
          "description": "Project which goal was to create a web application with interns tools to manage employees leaves saving.",
          "languages": ["PHP", "MySQL", "HTML", "CSS", "Twig"],
          "link": "https://github.com/ThomasLeconte/appliCET"
        }
      ]
    },
    {
      "name": "Personnal projects",
      "icon": "fa fa-cubes",
      "projects": [
        {
          "name": "Laminas-gen",
          "description": "PHP composer package for generates modules, controllers, forms and entities with Laminas Framework.",
          "languages": ["PHP"],
          "link": "https://github.com/ThomasLeconte/laminas-gen"
        },
        {
          "name": "DiscordBot-Starter",
          "description": "A Discord bot template written in TypeScript which supports Slash Commands, Context menu, and new Discord components feature !",
          "languages": ["TypeScript"],
          "link": "https://github.com/ThomasLeconte/DiscordBot-starter"
        },
        {
          "name": "MyConfig",
          "description": "ElectronJS application for set up his own computer configuration. All components are scraped from LDLC website (https://www.ldlc.com).",
          "languages": ["Javascript"],
          "link": "https://github.com/ThomasLeconte/MyConfig"
        },
        {
          "name": "MyTopVote",
          "description": "Minecraft plugin allowing ranking players by their votes in a server with vote system of Mineweb CMS.",
          "languages": ["Java"],
          "link": "https://github.com/ThomasLeconte/MyTopVote"
        },
        {
          "name": "LearnMoreTech",
          "description": "Discord Bot for be awared of last news in tech world !",
          "languages": ["Javascript"],
          "link": "https://github.com/ThomasLeconte/LearnMoreTech"
        }
      ]
    }
  ]
}

const categoriesElement = document.querySelectorAll('.categories')[0];

categories.categories.forEach(categorie => {
  const result = document.createElement('div');
  result.classList.add('categorie');
  const categorieTitle = document.createElement('h2');
  categorieTitle.innerHTML = categorie.name;
  result.appendChild(categorieTitle);

  const projects = document.createElement('div');
  projects.classList.add('projects');
  result.appendChild(projects);

  categorie.projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projects.appendChild(projectElement);

    const projectHeader = document.createElement('div');
    projectHeader.classList.add('header');
    projectElement.appendChild(projectHeader);

    const projectTitle = document.createElement('h3');
    projectTitle.innerHTML = project.name;
    projectHeader.appendChild(projectTitle);

    const projectContent = document.createElement('div');
    projectContent.classList.add('content');
    projectElement.appendChild(projectContent);

    const projectDescription = document.createElement('p');
    projectDescription.innerHTML = project.description;
    projectContent.appendChild(projectDescription);

    const projectLanguages = document.createElement('div');
    projectLanguages.classList.add('languages');
    projectContent.appendChild(projectLanguages);

    project.languages.forEach(language => {
      const languageElement = document.createElement('span');
      languageElement.classList.add('language');
      languageElement.innerHTML = language;
      projectLanguages.appendChild(languageElement);
    });

    const projectLink = document.createElement('a');
    projectLink.classList.add('button');
    projectLink.href = project.link;
    projectLink.setAttribute('target', '_blank');
    projectLink.setAttribute('rel', 'noopener noreferrer');
    projectLink.innerHTML = '<i class="fas fa-search"></i> View more';
    projectContent.appendChild(projectLink);
  });

  categoriesElement.appendChild(result);
});
