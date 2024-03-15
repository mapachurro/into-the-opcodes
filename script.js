// Opcode data in grid
const opcodes = [
    ["STOP", "ADD", "MUL", "SUB", "DIV", "SDIV", "MOD", "SMOD", "ADD MOD", "MUL MOD", "EXP", "SIGN EXTEND", ""],
    ["LT", "GT", "SLT", "SGT", "EQ", "IS ZERO", "AND", "OR", "XOR", "NOT", "BYTE", "SHL", "SHR", "SAR"],
    ["KECCAK256", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["ADDRESS", "BALANCE", "ORIGIN", "CALLER", "CALL VALUE", "CALL DATA LOAD", "CALL DATA SIZE", "CALL DATA COPY", "CODE SIZE", "CODE COPY", "GAS PRICE", "EXT CODE SIZE", "EXT CODE COPY", "RETURN DATA SIZE", "RETURN DATA COPY", "EXT CODE HASH"],
    ["BLOCK HASH", "COIN BASE", "TIME STAMP", "NUMBER", "DIFFICULTY", "GAS LIMIT", "CHAIN ID", "SELF BALANCE", "BASE FEE"],
    ["POP", "MLOAD", "MSTORE", "MSTORE8", "SLOAD", "SSTORE", "JUMP", "JUMPI", "PC", "MSIZE", "GAS", "JUMP DEST", "", "", "", "PUSH0"],
    ["PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH"],
    ["PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH", "PUSH"],
    ["SWAP", "SWAP", "SWAP", "SWAP", "SWAP", "SWAP", "SWAP", "SWAP", "SWAP", "SWAP", "SWAP", "SWAP", "SWAP", "SWAP", "SWAP", "SWAP"],
    ["LOG", "LOG", "LOG", "LOG", "LOG", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["CREATE", "CALL", "CALL CODE", "RETURN", "DELEGATE CALL", "CREATE2", "", "", "", "", "STATIC CALL", "", "", "REVERT", "INVALID", "SELF DESTRUCT"],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["notes:", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],

];

// Function to create the opcode grid
function createOpcodeGrid() {
    const table = document.getElementById('opcode-grid');
    for (let i = 0; i < opcodes.length; i++) {
        const row = table.insertRow();
        for (let j = 0; j < opcodes[i].length; j++) {
            const cell = row.insertCell();
            cell.textContent = opcodes[i][j];
            cell.classList.add('opcode-cell');
            cell.dataset.row = i;
            cell.dataset.column = j;
            cell.addEventListener('click', handleOpcodeClick);
        }
    }
}

// Function to assign category classes to opcode cells
function assignCategoryClasses() {
    const table = document.getElementById('opcode-grid');
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            const opcode = table.rows[i].cells[j].textContent;
            for (const category in opcodeCategories) {
                if (opcodeCategories[category].includes(opcode)) {
                    table.rows[i].cells[j].classList.add(category);
                    table.rows[i].cells[j].classList.add('opcode-cell');
                    console.log(`Assigned category ${category} to opcode ${opcode}`);
                }
            }
        }
    }
}

// Define opcode categories
const opcodeCategories = {
    "stack": ["STOP", "ADD", "MUL", "SUB", "DIV", "SDIV", "MOD", "SMOD", "ADD MOD", "MUL MOD", "EXP", "SIGN EXTEND"],
    "block-tx-msg": ["LT", "GT", "SLT", "SGT", "EQ", "IS ZERO", "AND", "OR", "XOR", "NOT", "BYTE", "SHL", "SHR", "SAR"],
    "account-state": ["KECCAK256", "ADDRESS", "BALANCE", "ORIGIN", "CALLER", "CALL VALUE", "CALL DATA LOAD", "CALL DATA SIZE", "CALL DATA COPY", "CODE SIZE", "CODE COPY", "GAS PRICE", "EXT CODE SIZE", "EXT CODE COPY", "RETURN DATA SIZE", "RETURN DATA COPY", "EXT CODE HASH"],
    // Add more categories as needed
};

// Function to handle click on an opcode cell
function handleOpcodeClick(event) {
    const row = event.target.dataset.row;
    const column = event.target.dataset.column;
    const opcode = opcodes[row][column];
    // Implement logic to show popup or link to documentation for the opcode
    // For now, let's just alert the opcode name
    alert("Clicked on: " + opcode);
}

// Call the function to create the opcode grid when the page loads
window.onload = function() {
    createOpcodeGrid();
    assignCategoryClasses(); // Call assignCategoryClasses after createOpcodeGrid
};
