const media = document.getElementById('media');

setTimeout(() => {
    media.innerHTML = `

    <audio src="assets/musik/musik.mp3" controls autoplay hidden>
    <p>
      tidak ada jalan menuju roma!
    </p>
    </audio>
    
    `;
}, 2000);