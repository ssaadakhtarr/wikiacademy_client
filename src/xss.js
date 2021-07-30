
    (function () {
        var _old_alert = window.alert;
        window.alert = function () {
         
            _old_alert.apply(window, arguments);
            // run some code after the alert
            document.body.innerHTML += "<br>Congratulations! You have solved this lab. Here is the flag.<br>";
            document.body.innerHTML += "<br>$FLAG{ul25w9nemhjx6dufu9ug98oq2sk74i9w}<br>";
        };
    })();


// export default xss;
