<!DOCTYPE html>
<html>
     <meta charset="utf-8">
</html>

<?php

     require_once('phpmailer/class.phpmailer.php');
     include('php/alerta.php');	

     // Capturando informa��es do formul�rio
     $name = utf8_decode($_POST['name']);
     $mail = $_POST['email'];
     $message = utf8_decode($_POST['message']);

     // Chamando a classe
     $Email = new PHPMailer();
     // Idioma setado como BR
     $Email->SetLanguage("br");
     // O envio ser� feito atrav�s da fun��o mail.
     $Email->isSMTP(); 

     // Configura��o de envio do e-mail [SMTP]
     $Email->Host = "ssl://smtp.googlemail.com";
     $Email->SMTPAuth = true;
     $Email->SMTPDebug = false;
     $Email->Port     = 465;
     $Email->Username = "mailer@deze7.com.br";
     $Email->Password = "phpmailer123";

     // Ativa o envio de e-mail em HTML, sen�o desativa
     $Email->IsHTML(true); 
     // E-mail do remetente da mensagem
     $Email->From = $email;
     // Nome do remetente da mensagem
     $Email->FromName = $nome;
     // Endere�o de e-mail destino da mensagem
          $Email->AddAddress("startuprepublicasocial@gmail.com");
          // $Email->AddAddress("mail@endereco.com.br");
     // Assunto do e-mail
     $Email->Subject = "Rep�blica Social / Formul�rio de contato";

     // Definindo o texto do e-mail [HTML]

          // Aviso ao remetente
          $Email->Body .= "Este e-mail est� sendo enviado atrav�s do formul�rio de contato do seu site. <br><br>";
          // Capturando o IP do usu�rio
          $Email->Body .= "<strong>IP:</strong>" .$_SERVER['REMOTE_ADDR']. "<br>";
          // Capturando a informa��es
          $Email->Body .= "<strong>Nome:</strong> $name <br>";
          $Email->Body .= "<strong>E-mail:</strong> $mail <br>";
          $Email->Body .= "<strong>Mensagem:</strong> $message <br>";

     // Vereficando erro no envio de mensagem. Conforme a condi��o a mensagem ser� exibida.
     if(!$Email->Send()){
          echo alert("Desculpe, sua mensagem nao foi enviada! Tente novamente. Detalhes: " .$Email->ErrorInfo , "index.html");
     } else {
          echo alert("Mensagem enviada com sucesso. Em breve entraremos em contato!" , "index.html");
     }
     
?>