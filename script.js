window.addEventListener('DOMContentLoaded', function() {
    var imagem = document.getElementById('imagem-animada');
    var conteudo = document.querySelector('body');
    var alturaConteudo = conteudo.offsetHeight;
    var alturaJanela = window.innerHeight;
  
    function animarImagem() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      var percentualRolagem = (scrollTop + alturaJanela) / alturaConteudo;
      var deslocamentoImagem = (1 - percentualRolagem) * 100;
  
      imagem.style.transform = `translateY(${deslocamentoImagem}%)`;
  
      if (scrollTop + alturaJanela > alturaConteudo - alturaJanela) {
        conteudo.style.overflow = 'visible';
      } else {
        conteudo.style.overflow = 'hidden';
      }
    }
  
    window.addEventListener('scroll', animarImagem);
});