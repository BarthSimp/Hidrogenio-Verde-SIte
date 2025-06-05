<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pega o feedback vindo do JavaScript
    $mensagem = isset($_POST['mensagem']) ? trim($_POST['mensagem']) : '';

    if ($mensagem === '') {
        echo "Mensagem vazia. Não foi possível salvar.";
        exit;
    }

    $data = date('d/m/Y H:i:s');

    $conteudo = "Data: $data\nMensagem: $mensagem\n--------------------------\n";

    $arquivo = "feedbacks.txt";

    if (file_put_contents($arquivo, $conteudo, FILE_APPEND | LOCK_EX)) {
        echo "Feedback salvo com sucesso!";
    } else {
        echo "Erro ao salvar o feedback.";
    }
} else {
    echo "Acesso inválido.";
}
?>
