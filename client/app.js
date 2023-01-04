const winnerText = document.getElementById("winner");
const leftoversBtn = document.getElementById("leftovers");
const takeoutBtn = document.getElementById("takeout");
import { getWinner, voteLeftovers, voteTakeout } from "./score";

const updateWinner = () => {
	const currWinner = getWinner();
	winnerText.innerText = currWinner;
};

takeoutBtn.addEventListener("click", () => {
	voteTakeout();
	updateWinner();
});

leftoversBtn.addEventListener("click", () => {
	voteLeftovers();
	updateWinner();
});

