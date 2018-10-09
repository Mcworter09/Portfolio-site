<?php

mb_language("Japanese");
mb_internal_encoding("UTF-8");

try{
    if (filter_input(INPUT_POST, "mailaddress") && filter_input(INPUT_POST, "mailtext")) {
        $_POST["mailaddress"];
    }else{
        $e = "入力欄をすべて入力してください";
        throw new Exception($e);
    }

    $mailaddress = $_POST["mailaddress"];
    $mailtext = $_POST["mailtext"];

   // var_dump($mailaddress,$mailtext);

    if(mb_send_mail(
        "asriel6666@gmail.com",
        "ポートフォリオサイトからメッセージ",
        $mailtext,
        "From: ".$mailaddress
    )){
        echo "メールを送信しました";
    }else{
        echo "メールを送信できませんでした";
    };

}catch(Exception $e){
    header("Content-Type: text/plain; charset=utf8",true,500);
    exit($e->getmessage());
}



