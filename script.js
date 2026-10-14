const roadmapData = [
  {
    id: "week-1",
    key: "W1",
    title: "C# Foundations",
    period: "Weeks 1-2",
    color: "#60a5fa",
    summary:
      "Core C# syntax, object-oriented design, collections, and the mindset behind writing clean, maintainable .NET code.",
    activities: [
      {
        type: "Article",
        name: "C# Tour of C#",
        url: "https://learn.microsoft.com/dotnet/csharp/tour-of-csharp/"
      },
      {
        type: "Challenge",
        name: "C# coding kata repository",
        url: "https://github.com/dotnet/try-dotnet"
      }
    ]
  },
  {
    id: "week-2",
    key: "W2",
    title: "ASP.NET Core Basics",
    period: "Weeks 3-4",
    color: "#34d399",
    summary:
      "HTTP fundamentals, MVC, API design, and practical patterns for building modern backend services and web experiences.",
    activities: [
      {
        type: "Article",
        name: "ASP.NET Core overview",
        url: "https://learn.microsoft.com/aspnet/core/"
      },
      {
        type: "Repo",
        name: "ASP.NET Core samples",
        url: "https://github.com/dotnet/aspnetcore"
      }
    ]
  },
  {
    id: "week-3",
    key: "W3",
    title: "Databases & EF Core",
    period: "Weeks 5-6",
    color: "#fbbf24",
    summary:
      "Entity Framework Core, relational modeling, migrations, and the trade-offs between performance, simplicity, and long-term maintainability.",
    activities: [
      {
        type: "Article",
        name: "EF Core fundamentals",
        url: "https://learn.microsoft.com/ef/core/"
      },
      {
        type: "Repo",
        name: "EF Core sample app",
        url: "https://github.com/dotnet/efcore"
      }
    ]
  },
  {
    id: "week-4",
    key: "W4",
    title: "Clean Architecture",
    period: "Weeks 7-8",
    color: "#f472b6",
    summary:
      "Architecture layers, dependency inversion, domain-driven design principles, and how to keep services scalable and easy to evolve.",
    activities: [
      {
        type: "Article",
        name: "Architecture guide",
        url: "https://learn.microsoft.com/dotnet/architecture/modern-web-apps-azure/"
      },
      {
        type: "Challenge",
        name: "Architecture refactor kata",
        url: "https://github.com/ardalis/CleanArchitecture"
      }
    ]
  },
  {
    id: "week-5",
    key: "W5",
    title: "Testing & Quality",
    period: "Weeks 9-10",
    color: "#a78bfa",
    summary:
      "Unit testing, integration tests, contract validation, and tooling that helps the community ship reliable software with confidence.",
    activities: [
      {
        type: "Article",
        name: "Testing best practices",
        url: "https://learn.microsoft.com/dotnet/core/testing/"
      },
      {
        type: "Repo",
        name: "xUnit sample project",
        url: "https://github.com/xunit/xunit"
      }
    ]
  },
  {
    id: "week-6",
    key: "W6",
    title: "Cloud & Containers",
    period: "Weeks 11-12",
    color: "#2dd4bf",
    summary:
      "Docker, containers, cloud-native patterns, and deployment thinking that helps teams move from local development to production-ready flows.",
    activities: [
      {
        type: "Article",
        name: "Containerized apps guide",
        url: "https://learn.microsoft.com/dotnet/architecture/microservices/container-docker-introduction/"
      },
      {
        type: "Repo",
        name: "Docker sample apps",
        url: "https://github.com/docker/awesome-compose"
      }
    ]
  },
  {
    id: "week-7",
    key: "W7",
    title: "Async & Performance",
    period: "Weeks 13-14",
    color: "#fb7185",
    summary:
      "Task-based async workflows, memory handling, profiling, and the practical techniques behind performant .NET systems.",
    activities: [
      {
        type: "Article",
        name: "Async programming guide",
        url: "https://learn.microsoft.com/dotnet/csharp/asynchronous-programming/"
      },
      {
        type: "Repo",
        name: "BenchmarkDotNet",
        url: "https://github.com/dotnet/BenchmarkDotNet"
      }
    ]
  },
  {
    id: "week-8",
    key: "W8",
    title: "Security & DevOps",
    period: "Weeks 15-16",
    color: "#38bdf8",
    summary:
      "Auth flows, secure coding habits, CI/CD automation, and the workflow needed to deliver software safely and repeatedly.",
    activities: [
      {
        type: "Article",
        name: "Secure coding checklist",
        url: "https://learn.microsoft.com/dotnet/architecture/security/"
      },
      {
        type: "Repo",
        name: "GitHub Actions examples",
        url: "https://github.com/actions"
      }
    ]
  },
  {
    id: "week-9",
    key: "W9",
    title: "Community Sprint",
    period: "Weeks 17-18",
    color: "#e879f9",
    summary:
      "A closing challenge where the community combines the lessons from the roadmap into a working project, code review, and final presentation.",
    activities: [
      {
        type: "Challenge",
        name: "Final roadmap challenge",
        url: "https://github.com/dotnet/aspnetcore"
      },
      {
        type: "Article",
        name: "Community showcase write-up",
        url: "https://github.com/microsoft/dotnet"
      }
    ]
  }
];

const roadmapRoot = document.querySelector("#roadmap");
const detailsRoot = document.querySelector("#details");

const points = [
  { x: 150, y: 120 },
  { x: 300, y: 240 },
  { x: 430, y: 180 },
  { x: 620, y: 310 },
  { x: 780, y: 260 },
  { x: 930, y: 370 },
  { x: 720, y: 520 },
  { x: 500, y: 610 },
  { x: 280, y: 510 }
];

function buildRoadPath(nodePoints) {
  let d = `M ${nodePoints[0].x} ${nodePoints[0].y}`;

  for (let index = 1; index < nodePoints.length; index += 1) {
    const previous = nodePoints[index - 1];
    const current = nodePoints[index];
    const segmentX = (current.x - previous.x) * 0.5;
    const offset = index % 2 === 0 ? -25 : 28;

    d += ` C ${previous.x + segmentX} ${previous.y + offset}, ${current.x - segmentX} ${current.y - offset}, ${current.x} ${current.y}`;
  }

  return d;
}

function renderRoadmap() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const basePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const glowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

  basePath.setAttribute("d", buildRoadPath(points));
  basePath.setAttribute("class", "roadpath");

  glowPath.setAttribute("d", buildRoadPath(points));
  glowPath.setAttribute("class", "road-glow");

  svg.appendChild(glowPath);
  svg.appendChild(basePath);

  roadmapRoot.appendChild(svg);

  roadmapData.forEach((item, index) => {
    const point = points[index];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "node";
    button.style.setProperty("--node-x", `${point.x}px`);
    button.style.setProperty("--node-y", `${point.y}px`);
    button.style.setProperty("--node-color", item.color);
    button.setAttribute("aria-label", `${item.title}: ${item.period}`);
    button.innerHTML = `
      <span class="node-label">${item.key}</span>
      <span class="node-title">${item.title}</span>
    `;

    button.addEventListener("click", () => {
      const allNodes = document.querySelectorAll(".node");
      allNodes.forEach((node) => node.classList.remove("is-selected"));
      button.classList.add("is-selected");
      showDetails(item);
    });

    roadmapRoot.appendChild(button);
  });
}

function showDetails(item) {
  const resourceList = item.activities
    .map(
      (activity) => `
        <li>
          <a class="resource-link" href="${activity.url}" target="_blank" rel="noreferrer noopener">
            <strong>${activity.type}</strong>
            <span>${activity.name}</span>
          </a>
        </li>
      `
    )
    .join("");

  detailsRoot.innerHTML = `
    <div class="details-card">
      <div class="details-top">
        <div>
          <div class="package-chip">${item.key}</div>
          <h2>${item.title}</h2>
        </div>
      </div>

      <p class="summary">
        <strong>${item.period}</strong><br />
        ${item.summary}
      </p>

      <ul class="resource-list">${resourceList}</ul>
    </div>
  `;
}

renderRoadmap();
showDetails(roadmapData[0]);
const firstNode = document.querySelector(".node");
if (firstNode) {
  firstNode.classList.add("is-selected");
}
