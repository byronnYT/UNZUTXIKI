// Mostrar el botón cuando el usuario haya desplazado 3% de la página
  window.onscroll = function() {
    if (document.body.scrollTop > (document.body.scrollHeight * 0.03) || document.documentElement.scrollTop > (document.documentElement.scrollHeight * 0.03)) {
      document.getElementById("btn-top").classList.remove("is-hidden");
    } else {
      document.getElementById("btn-top").classList.add("is-hidden");
    }
  };
  
  // Desplazamiento suave al hacer clic en el botón
  document.getElementById("btn-top").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });