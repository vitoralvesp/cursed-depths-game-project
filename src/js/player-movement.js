const player = document.getElementById("player");
let x = 100;
let y = 100;
const speed = 10;

const sprites = {
    up: "/assets/images/sprites/jump-step-1.png",
    down: "/assets/images/sprites/waiting.png",
    left: "/assets/images/sprites/jump-step-2.png",
    right: "/assets/images/sprites/forward.png",
    idle: "/assets/images/sprites/preparing to jump.png"
};

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
            y -= speed;
            player.style.backgroundImage = `url('${sprites.up}')`;
            break;

        case "ArrowDown":
        case "s":
        case "S":
            y += speed;
            player.style.backgroundImage = `url('${sprites.down}')`;
            break;

        case "ArrowLeft":
        case "a":
        case "A":
            x -= speed;
            player.style.backgroundImage = `url('${sprites.left}')`;
            break;

        case "ArrowRight":
        case "d":
        case "D":
            x += speed;
            player.style.backgroundImage = `url('${sprites.right}')`;
            break;
    }

    updatePosition();
});

document.addEventListener("keyup", () => {
    player.style.backgroundImage = `url('${sprites.idle}')`;
});

function updatePosition() {
    player.style.left = x + "px";
    player.style.top = y + "px";
}
