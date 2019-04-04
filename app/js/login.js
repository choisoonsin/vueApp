var login = new Vue({
    el: "#login",
    data: { 
        id: "",
        password: ""
    },
    methods: {
        clickCheckBtn: function (message, event) {
            // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
            // 다음처럼 처리하기 보다는 `이벤트 수식어` 를 사용하여 코드를 간결히 할 수 있다. .stop .prevent .capture 
            if (event) event.preventDefault();
            alert(message);
        },
        doThis: function () {
            alert("doThis!!");
        }
    }
})