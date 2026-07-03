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

const goalInput = document.querySelector("#goal-input");
const addGoalButton = document.querySelector("#add-goal-button");
const goalList = document.querySelector("#goal-list");

function addGoal() {
  const goalName = goalInput.value.trim();

  if (goalName === "") {
    return;
  }

  const listItem = document.createElement("li");
  const goalText = document.createElement("span");
  const removeButton = document.createElement("button");

  listItem.classList.add("goal-item");
  goalText.textContent = goalName;
  removeButton.classList.add("remove-goal");
  removeButton.type = "button";
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", () => {
    listItem.remove();
  });

  listItem.appendChild(goalText);
  listItem.appendChild(removeButton);
  goalList.appendChild(listItem);

  goalInput.value = "";
  goalInput.focus();
}

addGoalButton.addEventListener("click", addGoal);
