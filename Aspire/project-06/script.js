var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: true,
    autoplay: {
      delay: 2000,
    },
  });

  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('open');
});