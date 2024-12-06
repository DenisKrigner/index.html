let tg = window.Telegram.WebApp;

tg.expand();

let item = "";

let btn1 = document.getElementById("btt").addEventListener("click", function()
        {
            tg.MainButton.setText("Вы выбрали товар 5!");
            item = "6"
            tg.close();
        });


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});