function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('open');
});