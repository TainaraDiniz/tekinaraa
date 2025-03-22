document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1
    });
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.image');
    if (image) {
      setTimeout(() => {
        image.style.opacity = '1';
        image.style.transform = 'translateY(0)';
      }, 100); // Pequeno atraso para garantir a transição
    } else {
      console.error('Elemento imagem não encontrado');
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.querySelector('.titulo');
    if (titulo) {
      setTimeout(() => {
        titulo.style.opacity = '1';
        titulo.style.transform = 'translateY(0)';
      }, 100); // Pequeno atraso para garantir a transição
    } else {
      console.error('Elemento não encontrado');
    }
  });
 

  document.addEventListener("DOMContentLoaded", function() {
    const impacto2 = document.querySelectorAll('.impacto2');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.2
    });
  
    impacto2.forEach(impacto2 => {
      observer.observe(impacto2);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const impacto3 = document.querySelectorAll('.impacto3');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.2
    });
  
    impacto3.forEach(impacto3 => {
      observer.observe(impacto3);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const impacto4 = document.querySelectorAll('.impacto4');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.2
    });
  
    impacto4.forEach(impacto4 => {
      observer.observe(impacto4);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const impacto5 = document.querySelectorAll('.impacto5');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.2
    });
  
    impacto5.forEach(impacto5 => {
      observer.observe(impacto5);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const orcamento1 = document.querySelectorAll('.orcamento1');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.20
    });
  
    orcamento1.forEach(orcamento1 => {
      observer.observe(orcamento1);
    });
  });

  /*cookies*/
  function acceptCookies(){
    document.getElementById('cookie-banner').style.display = 'none';
    //adicionar codigo de armazenamento//
    localStorage.setItem('cookiesAccepted','true');
  };
  window.onload = function(){
if(!localStorage.getItem('cookiesAccepted')){
  document.getElementById('cookie-banner').style.display = 'block';
}
else{
  document.getElementById('cookie-banner').style.display = 'none';
}
  };
  //sobre//

  document.addEventListener("DOMContentLoaded", function() {
    const sobre2 = document.querySelector('.sobre2');
    if (sobre2) {
      setTimeout(() => {
        sobre2.style.opacity = '1';
        sobre2.style.transform = 'translateY(0)';
      }, 100); // Pequeno atraso para garantir a transição
    } else {
      console.error('Elementonão encontrado');
    }
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const sobre = document.querySelector('.sobre');
    if (sobre) {
      setTimeout(() => {
        sobre.style.opacity = '10';
        sobre.style.transform = 'translateY(0)';
      }, 100); // Pequeno atraso para garantir a transição
    } else {
      console.error('Elementonão encontrado');
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const titulo2 = document.querySelector('.titulo2');
    if (titulo2) {
      setTimeout(() => {
        titulo2.style.opacity = '1';
        titulo2.style.transform = 'translateY(0)';
      }, 100); // Pequeno atraso para garantir a transição
    } else {
      console.error('Elementonão encontrado');
    }
  });




  document.addEventListener("DOMContentLoaded", function() {
    const titulo2 = document.querySelector('.titulo2');
    if (titulo2) {
      setTimeout(() => {
        titulo2.style.opacity = '1';
        titulo2.style.transform = 'translateY(0)';
      }, 100); // Pequeno atraso para garantir a transição
    } else {
      console.error('Elementonão encontrado');
    }
  });



  document.getElementById('menu-toggle').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
  });





  document.getElementById('menu-toggle').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
  });
  
  function funcaoBotao1() {
    alert('Botão 1 clicado!');
  }
  
  function funcaoBotao2() {
    alert('Botão 2 clicado!');
  }