let page = 0;
const messages = [
    "ต้ามีบางอย่างอยากบอก...",
    "เป็นเรื่องสำคัญมากเลยนะ!",
    "พร้อมหรือยัง?",
    "สุขสันต์วันวาเลนไทน์! ต้าขอให้เธอมีความสุข และรู้ไว้ว่ามีคนรักเธอเสมอ 💖"
];

function showRoses() {
    // แสดงข้อความถัดไป
    page++;
    if (page < messages.length) {
        document.getElementById("text").innerText = messages[page];
    }

    // หากถึงข้อความสุดท้าย จะแสดงการตกแต่งดอกกุหลาบ
    if (page === messages.length - 1) {
        document.getElementById("actionButton").innerText = "กดฉันสิเธอ";
        document.getElementById("actionButton").onclick = function() {
            // เมื่อกดปุ่มแสดงดอกกุหลาบ
            for (let i = 0; i < 20; i++) {
                let rose = document.createElement("div");
                rose.classList.add("rose");
                rose.style.backgroundImage = "url('img/rose.png')"; // ใส่รูปดอกกุหลาบ
                rose.style.left = Math.random() * window.innerWidth + "px";
                rose.style.animationDuration = (3 + Math.random() * 2) + "s"; // สุ่มความเร็ว
                document.body.appendChild(rose);

                setTimeout(() => {
                    rose.remove();
                }, 5000); // ลบออกเมื่อแอนิเมชันจบ
            }
        };
    }
}
