document.getElementById("modalProduto").onclick = function(){
  removeClass(this,"active");
  //this.style.display = "none";
};
document.getElementById("fechaModalProduto").onclick = function(){
  removeClass(document.getElementById("modalProduto"),"active");
  //document.getElementById("modalProduto").style.display = "none";
};

var produto = document.getElementsByClassName("produto");

for (var i=0; i < produto.length; i++) {
  produto[i].onclick = function(){
    idProduto = this.getAttribute("data-id-produto");
    console.log(idProduto);
    getJSON(enderecoJson,
      function(err, data) {
        if (err != null) {
          alert('Algo está errado: ' + err);
        } else {
          console.log(data);
          console.log(data.potions[idProduto].name);
          document.getElementById("pocaoImagem").src = 'assets/products/'+data.potions[idProduto].image;
          document.getElementById("pocaoNome").innerHTML = data.potions[idProduto].name;
          document.getElementById("pocaoEfeito").innerHTML = data.potions[idProduto].effect;
          document.getElementById("pocaoIngredientes").innerHTML = data.potions[idProduto].ingredients;
          document.getElementById("pocaoPreco").innerHTML = '$'+data.potions[idProduto].price;
          //document.getElementById("modalProduto").style.display = "block";
          addClass(document.getElementById("modalProduto"),"active");
        }
      });

    }
  };


  var enderecoJson = './assets/js/potions.json';
  var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
  };

  function addClass(el, classNameToAdd){
    el.className += ' ' + classNameToAdd;
  }

  function removeClass(el, classNameToRemove){
    var elClass = ' ' + el.className + ' ';
    while(elClass.indexOf(' ' + classNameToRemove + ' ') !== -1){
      elClass = elClass.replace(' ' + classNameToRemove + ' ', '');
    }
    el.className = elClass;
  }





  jQuery('#navbarText').on('hidden.bs.collapse', function () {
    jQuery('.pesquisa-bloco, .menu-topo').css('display','');
    jQuery('.aditional-txt-topo, .logo-bloco, .caldeirao').show();
    jQuery('#btn-menu-responsivo').attr('class','fa fa-bars');
  })

  jQuery('#navbarText').on('show.bs.collapse', function () {
    jQuery('.pesquisa-bloco, .menu-topo').show();
    jQuery('.aditional-txt-topo, .logo-bloco, .caldeirao').hide();
    jQuery('#btn-menu-responsivo').attr('class','fa fa-close');

  })
