var $img = $(".imagens");
var pedido = [];
var pedido = [];
var valorPedido = 0;
var totalPed;
//css manipulation
//var tam = (window.innerHeight) / 2 ;

//$('col-form').css("min-height", tam +"px" );

$img.click(function ($this) {
    var $data = $(this).attr("data-target");
    var dataValue = $("input[name="+$data+"]").val();
    var dataValorPedido = parseFloat( $(this).attr("data-valor") );
    console.log(dataValorPedido);
    console.log("clicou: " + dataValue );
    var $check = $("input[name=" + $data+"]");
    
    if(!$check.prop("checked"))
        $check.prop("checked", true) ;
    else
        $check.prop("checked", false) ;
    
    pedido.push(dataValue);
    console.log(pedido.toString());
    
    atualizarValorPedido(dataValorPedido);
  });

function abrirCamada(classeCamada, classeCamada1) {
    
    if(classeCamada == 'tamanhos') {
        tratarPedido();
        $('.' + classeCamada).find("p").html( pedido );
    }
    $('.' + classeCamada1).hide(800);
    setTimeout(function(){
        $('.' + classeCamada).show(800);    
    },500);
    
}

function atualizarValorPedido(valor){
    valorPedido += valor;
    valorString = valorPedido.toPrecision(4);
    valorString = valorString.replace(".", ",");
    $('.preco h4').html('R$ ' + valorString);
    console.log(valorPedido);
}

function totalPedido() {
    var pTamanho = parseInt($('#pTamanho').val());
    var mTamanho = parseInt($('#mTamanho').val());
    var gTamanho = parseInt($('#gTamanho').val());
    var ggTamanho = parseInt($('#ggTamanho').val());
    var egTamanho = parseInt($('#egTamanho').val());
    
    var tamanhos = pTamanho + mTamanho + gTamanho + ggTamanho + egTamanho;
    totalPed = (tamanhos * valorPedido).toFixed(2);
    totalPed = totalPed.replace(".", ",");
    console.log(valorPedido);
    console.log (tamanhos);
    console.log(totalPed);
    
}

function valorTotal() {
    totalPedido();
    $('.total h4').html("R$ "+ totalPed);
    $('.tamanhos').hide(800);
    setTimeout(function(){
        $('.total').show(800);    
    },500);
}



function tratarPedido() {
    var trataPedido = pedido.toString();
    var valores = [
                    "CamisaMasculina",
                    "CamisaFeminina",
                    "CamisaUnissex",
                    "slim",
                    "classica",
                    "extra",
                    "tradicional",
                    "long",
                    "over",
                    "reta",
                    "abaulada",
                    "tranversal",
                    "tradicionalDetalhe",
                    "frenteMaior",
                    "costasMaior",
                    "tradicionalAcabamento",
                    "refilado",
                    "bolso",
                    "manga",
                    "aberturaLateral",
                    "algBasico",
                    "algSoft",
                    "algPremium",
                    "branco",
                    "preto",
                    "azul",
                    "vermelho",
                    "amarelo",
                    "verde",
                    "cinzaClaro",
                    "cinzaMedio",
                    "grafite",
                    "mesclaBasica",
                    "mesclaSoft",
                    "mesclaPremium",
        ];
    var saida = [
                    " Camisa Masculina",
                    " Camisa Feminina",
                    " Camisa Unissex",
                    " Slim",
                    " Clássica",
                    " Extra",
                    " Tradicional",
                    " Long",
                    " Over",
                    " Reta",
                    " Abaulada",
                    " Tranversal",
                    " Tradicional",
                    " Frente maior que costas",
                    " Costas maior que frente",
                    " Tradicional",
                    " Refilado",
                    " Bolso",
                    " Manga",
                    " Abertura Lateral",
                    " Algodão Básico",
                    " Algodão Soft",
                    " Algodão Premium",
                    " Branco",
                    " Preto",
                    " Azul",
                    " Vermelho",
                    " Amarelo",
                    " Verde",
                    " Cinza Claro",
                    " Cinza Medio",
                    " Grafite",
                    " Mescla Básica",
                    " Mescla Soft",
                    " Mescla Premium",
        ];
    for(var i= 0; i < valores.length; i++)
        trataPedido = trataPedido.replace(valores[i], saida[i]);
        pedido = trataPedido;
}
/*
function isValid() {
    
    if( confirm("Valor total do pedido : R$"+ totalPed +". Deseja confirmar pedido?") == true) {
        return true;
    }
    else {
        return false;    
    }
}*/