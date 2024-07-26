// Funcao para encriptar o texto
function processarTexto() {
    var entrada = document.getElementById('entrada').value.toLowerCase();
    var saida = entrada
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('saida').value = saida;
}

// Funcao para descriptografar o texto
function descriptografarTexto() {
    var entrada = document.getElementById('entrada').value.toLowerCase();
    var saida = entrada
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('saida').value = saida;
}

// Funcao para copiar o texto da caixa de saida, limpar as caixas de texto e focar na entrada
function copiarTextoSaida() {
    var textareaSaida = document.getElementById('saida');
    var textareaEntrada = document.getElementById('entrada');
    
    // Selecionar e copiar o texto da caixa de saida
    textareaSaida.select();
    document.execCommand('copy');
    
    // Limpar a caixa de saida
    textareaSaida.value = '';
    
    // Limpar a caixa de entrada e definir o foco no campo
    textareaEntrada.value = '';
    textareaEntrada.focus();
}

// Funcao para colar o texto na caixa de entrada
function colarTextoEntrada() {
    var textareaEntrada = document.getElementById('entrada');
    
    // Obter o texto copiado da area de transferencia
    navigator.clipboard.readText().then(function(text) {
        // Colar o texto na caixa de entrada
        textareaEntrada.value = text;
        // Definir o foco no campo
        textareaEntrada.focus();
    }).catch(function(err) {
        console.error('Falha ao ler o texto da área de transferência: ', err);
    });
}

// Funcao para limpar os campos
function limparCampos() {
    document.getElementById('entrada').value = '';
    document.getElementById('saida').value = '';
}
