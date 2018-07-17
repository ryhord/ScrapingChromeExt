document.getElementById("submitBtn").addEventListener("click", run);



function run() {
    var url;
    var selector = document.getElementById('userSelector').value;

    chrome.tabs.query({currentWindow: true, active: true },
        function (foundTabs) {
            if (foundTabs.length > 0) {
                url = foundTabs[0].url; // <--- this is what you are looking for
                alert(selector + " " + url);
                /*alert(selector + " " + url);*/
            } else {
                alert("there's no window or no selected tab");
            }
        })
    

}