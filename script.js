let page = 0;
const messages = [
    "มีบางอย่างอยากบอก...",
    "เป็นเรื่องสำคัญมากเลยนะ!",
    "พร้อมหรือยัง?",
    "สุขสันต์วันวาเลนไทน์! ขอให้เธอมีความสุขมาก ๆ และรู้ไว้ว่ามีคนรักเธอเสมอ 💖"
];

function nextPage() {
    page++;
    if (page < messages.length) {
        document.getElementById("text").innerText = messages[page];
    }
    if (page === messages.length - 1) {
        document.getElementById("nextButton").classList.add("hidden"); // ซ่อนปุ่มถัดไป
        document.getElementById("openButton").classList.remove("hidden"); // แสดงปุ่ม "ลองเปิดดูสิ"
    }
}

function showRoses() {
    for (let i = 0; i < 20; i++) {
        let rose = document.createElement("div");
        rose.classList.add("rose");
        rose.innerHTML = "🌹";
        rose.style.left = Math.random() * window.innerWidth + "px";
        rose.style.animationDuration = (3 + Math.random() * 2) + "s"; // สุ่มความเร็ว
        document.body.appendChild(rose);

        setTimeout(() => {
            rose.remove();
        }, 5000); // ลบออกเมื่อแอนิเมชันจบ
    }
}
