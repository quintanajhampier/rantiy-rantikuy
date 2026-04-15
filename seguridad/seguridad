// seguridad/firewall.js
(function() {
    console.log("🛡️ Firewall Rantiy y Rantikuy Activado");
    
    // Bloquear clic derecho
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Bloquear teclas de herramientas de desarrollador (F12, Ctrl+Shift+I, etc.)
    document.onkeydown = function(e) {
        if(e.keyCode == 123) { return false; }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { return false; }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; }
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; }
    }
})();
