

function comprar(event, button) {
    
    
    event.preventDefault(); // Evita que o link recarregue a página
    var numeroWhatsApp = "5599984999597";  // Substitua pelo seu número de WhatsApp
    var numeroCartela = button.getAttribute("data-numero");  // Pega a numeração da cartela clicada
    var mensagem = "Oi, gostaria de comprar a cartela número " + numeroCartela;
    

    // Codifica a mensagem
    var mensagemCodificada = encodeURIComponent(mensagem); 
    

    // Monta a URL para o WhatsApp
    var linkWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + mensagemCodificada;
  
    
    // Verifica se a URL foi formada corretamente
    console.log(linkWhatsApp);  // Exibe a URL no console para depuração
    

    // Abre o link do WhatsApp em uma nova aba
    window.location.href = linkWhatsApp;
}
