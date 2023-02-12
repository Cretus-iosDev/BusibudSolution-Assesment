import $ from "jquery" 
const rootApp = document.getElementById("root");  rootApp.innerHTML = '<button>ON</button>';
$(document).ready(function() {
    $("#root").click(function() { 
        (rootApp.innerHTML == '<button>OFF</button>') ? 
            rootApp.innerHTML='<button>ON</button>' : 
            rootApp.innerHTML='<button>OFF</button>';
    });
});