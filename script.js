// game.js
function chooseOption(option) {
    const storyText = document.getElementById('story');
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Clear current options

    if (option === 1) {
        storyText.innerText = "Bạn gặp một anh chàng đẹp trai tại quán cà phê. Anh ấy cười và bắt chuyện với bạn!";
        setTimeout(() => {
            showNextOptions();
        }, 2000);
    } else if (option === 2) {
        storyText.innerText = "Bạn gặp một cô nàng dễ thương tại công viên. Cô ấy cười và mời bạn đi dạo!";
        setTimeout(() => {
            showNextOptions();
        }, 2000);
    }
}

function showNextOptions() {
    const storyText = document.getElementById('story');
    const optionsContainer = document.getElementById('options-container');

    // Add new choices based on previous decision
    if (storyText.innerText.includes("anh chàng đẹp trai")) {
        optionsContainer.innerHTML = `
            <button onclick="chooseOption(3)">Tán tỉnh anh ấy</button>
            <button onclick="chooseOption(4)">Làm bạn thân</button>
        `;
    } else if (storyText.innerText.includes("cô nàng dễ thương")) {
        optionsContainer.innerHTML = `
            <button onclick="chooseOption(5)">Mời cô ấy đi ăn</button>
            <button onclick="chooseOption(6)">Mời cô ấy đi xem phim</button>
        `;
    }
}

function chooseOption(option) {
    const storyText = document.getElementById('story');
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Clear current options

    if (option === 1) {
        storyText.innerText = "Bạn gặp một anh chàng đẹp trai tại quán cà phê. Anh ấy cười và bắt chuyện với bạn!";
        setTimeout(() => {
            showNextOptions();
        }, 2000);
    } else if (option === 2) {
        storyText.innerText = "Bạn gặp một cô nàng dễ thương tại công viên. Cô ấy cười và mời bạn đi dạo!";
        setTimeout(() => {
            showNextOptions();
        }, 2000);
    }
}

function showNextOptions() {
    const storyText = document.getElementById('story');
    const optionsContainer = document.getElementById('options-container');

    // Add new choices based on previous decision
    if (storyText.innerText.includes("anh chàng đẹp trai")) {
        optionsContainer.innerHTML = `
            <button onclick="chooseOption(3)">Tán tỉnh anh ấy</button>
            <button onclick="chooseOption(4)">Làm bạn thân</button>
        `;
    } else if (storyText.innerText.includes("cô nàng dễ thương")) {
        optionsContainer.innerHTML = `
            <button onclick="chooseOption(5)">Mời cô ấy đi ăn</button>
            <button onclick="chooseOption(6)">Mời cô ấy đi xem phim</button>
        `;
    }
}
