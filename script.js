function updateTime() {
    const now = new Date();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    const w = ['일', '월', '화', '수', '목', '금', '토'][now.getDay()];
    const h = String(now.getHours()).padStart(2, '0');
    const i = String(now.getMinutes()).padStart(2, '0');
    
    // 요청하신 대로 기호를 [ ] 로 변경했습니다
    const timeString = `[ ${m}월 ${d}일(${w}) ${h}:${i} ]`;
    
    const el = document.getElementById('current-date-time');
    if (el) el.textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();

function openLink(url) {
    if(url !== '#') {
        // 1. 소리 장치를 명확하게 찾습니다.
        const sound = document.getElementById('click-sound');
        
        // 2. 장치를 찾았다면 재생(play)합니다.
        if (sound) {
            sound.play(); 
        }

        // 3. 소리가 들릴 수 있게 0.3초 대기 후 페이지 이동
        setTimeout(() => { 
            window.open(url, '_blank'); 
        }, 300);
    }
}