// Variables to keep track of column values and turn
let columnValues = [1, 1, 1, 1, 1, 1, 1];
let turn = 1;

// Function to check if a player has won
function checkWinner(player) {
    // Add your winning condition checks here
    // Return true if the player has won, otherwise return false
}

// Function to handle player moves
function handleMove(columnIndex, player) {
    if (columnValues[columnIndex] <= 6) {
        let cellId = `c${columnIndex + 1}r${columnValues[columnIndex]}`;
        document.getElementById(cellId).style.backgroundColor = player;
        columnValues[columnIndex]++;
        
        if (checkWinner(player)) {
            alert(`${player} wins!`);
            // Implement logic to handle game over
        } else {
            turn = turn === 1 ? 2 : 1; // Switch turn
            document.getElementById("whosturn").innerText = turn === 1 ? "Yellow's Turn" : "Red's Turn";
        }
    }
}

// Event listener for column clicks
document.querySelectorAll(".column").forEach((column, index) => {
    column.addEventListener("click", () => {
        let columnIndex = index;
        let player = turn === 1 ? "red" : "yellow";
        handleMove(columnIndex, player);
    });
});
