// Снег
const snowContainer = document.getElementById('snow');
const snowflakesCount = 120;

for (let i = 0; i < snowflakesCount; i++) {
  const snowflake = document.createElement('div');
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.opacity = Math.random() * 0.5 + 0.5;
  snowflake.style.width = Math.random() * 10 + 5 + 'px';
  snowflake.style.height = snowflake.style.width;
  snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
  snowflake.style.animationDelay = Math.random() * 5 + 's';
  snowContainer.appendChild(snowflake);
}

// Музыка
const music = document.getElementById('holidayMusic');
let musicStarted = false;

// Запуск музыки при первом клике на странице
document.body.addEventListener('click', () => {
  if (!musicStarted) {
    music.play().then(() => {
      musicStarted = true;
    }).catch(e => {
      console.log("Музыку не удалось воспроизвести:", e);
    });
  }
});
