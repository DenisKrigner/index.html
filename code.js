let tg = window.Telegram.WebApp;

tg.expand();

let item = "";

let btn1 = document.getElementById("btt").addEventListener("click", function()
        {
            tg.MainButton.setText("Вы выбрали товар 5!");
            item = "6"
            tg.sendData(JSON.stringify(item))
            tg.close();
        });

tg.sendData(JSON.stringify("1111"))