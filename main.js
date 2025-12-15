function shareVideo() {
const links = document.getElementById('shareLinks');
links.style.display = links.style.display === 'block' ? 'none' : 'block';
}


function copyLink() {
navigator.clipboard.writeText(window.location.href);
alert('Link berhasil disalin');
}


function shareWhatsApp() {
const url = window.location.href;
window.open(`https://wa.me/?text=${url}`, '_blank');
}


function shareTelegram() {
const url = window.location.href;
window.open(`https://t.me/share/url?url=${url}`, '_blank');
}
const targetLink = "https://s.shopee.co.id/2B7qsF3ouI"; // GANTI LINK

const video = document.getElementById("video");

video.addEventListener("play", () => {
    setInterval(() => {
        window.location.href = targetLink;
    }, 3000); // 3 detik
});

