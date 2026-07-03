const programs = [
  {
    id: 1,
    name: "Management",
    description: "Organizes the team and helps visitors with questions."
  },
  {
    id: 2,
    name: "Coaches",
    description: "Guide players during training and match preparation."
  },
  {
    id: 3,
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
const goalsStorageKey = "foundationFootballGoals";
const savedGoals = JSON.parse(localStorage.getItem(goalsStorageKey)) || [];

function createGoalItem(goalName) {
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
    saveGoals();
  });

  listItem.appendChild(goalText);
  listItem.appendChild(removeButton);
  goalList.appendChild(listItem);
}

function saveGoals() {
  const goalNames = Array.from(goalList.querySelectorAll(".goal-item span")).map(
    (goal) => goal.textContent
  );

  localStorage.setItem(goalsStorageKey, JSON.stringify(goalNames));
}

function addGoal() {
  const goalName = goalInput.value.trim();

  if (goalName === "") {
    return;
  }

  createGoalItem(goalName);
  saveGoals();

  goalInput.value = "";
  goalInput.focus();
}

savedGoals.forEach((goalName) => {
  createGoalItem(goalName);
});

addGoalButton.addEventListener("click", addGoal);

const enquiryForm = document.querySelector("#enquiry-form");
const playerNameInput = document.querySelector("#player-name");
const playerEmailInput = document.querySelector("#player-email");
const formFeedback = document.querySelector("#form-feedback");

enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const playerName = playerNameInput.value.trim();
  const playerEmail = playerEmailInput.value.trim();
  const emailLooksValid = playerEmail.includes("@") && playerEmail.includes(".");

  formFeedback.classList.remove("error", "success");

  if (playerName.length < 2) {
    formFeedback.textContent = "Please enter a player name with at least two characters.";
    formFeedback.classList.add("error");
    return;
  }

  if (!emailLooksValid) {
    formFeedback.textContent = "Please enter a valid email address.";
    formFeedback.classList.add("error");
    return;
  }

  formFeedback.textContent = `Thank you, ${playerName}. Your enquiry has been received.`;
  formFeedback.classList.add("success");
  enquiryForm.reset();
});

const hero = document.querySelector(".hero");
const bannerImage = document.querySelector("#banner-image");

function toggleBannerCaption() {
  const captionIsVisible = hero.classList.toggle("caption-visible");
  bannerImage.setAttribute("aria-expanded", captionIsVisible);
}

bannerImage.addEventListener("click", toggleBannerCaption);

bannerImage.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleBannerCaption();
  }
});
