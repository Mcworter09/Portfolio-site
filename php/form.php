<?php

mb_language("Japanese");
mb_internal_encoding("UTF-8");

try{
    if (filter_input(INPUT_POST, "mailaddress") && filter_input(INPUT_POST, "mailtext")) {
        $mailAddress = $_POST["mailaddress"];
        $mailText = $_POST["mailtext"];

        if (mb_send_mail(
            "xxxx@hogehoge.com",
            "ポートフォリオサイトからメッセージ",
            $mailText,
            "From: " . $mailAddress
        )) {
            echo "メールを送信しました";
            exit;
        } else {
            $e = "メールを送信できませんでした";
            throw new Exception($e);
        };

    }else{
        $e = "入力欄をすべて入力してください";
        throw new Exception($e);
    }

}catch(Exception $e){
    header("Content-Type: text/plain; charset=utf8",true,500);
    exit($e->getmessage());
}



