const programs = [
  {
    name: "Management",
    description: "Organizes the team and helps visitors with questions."
  },
  {
    name: "Coaches",
    description: "Guide players during training and match preparation."
  },
  {
    name: "Members",
    description: "Support the football community and represent the club."
  }
];

const programList = document.querySelector("#program-list");

programs.forEach((program) => {
  const card = document.createElement("article");
  const heading = document.createElement("h3");
  const description = document.createElement("p");

  card.classList.add("staff-card");
  heading.textContent = program.name;
  description.textContent = program.description;

  card.appendChild(heading);
  card.appendChild(description);
  programList.appendChild(card);
});
