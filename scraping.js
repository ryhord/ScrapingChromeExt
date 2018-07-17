document.getElementById("submitBtn").addEventListener("click", run);



function run() {
    var url;
    var selector = document.getElementById('userSelector').value;

    chrome.tabs.query({currentWindow: true, active: true },
        function (foundTabs) {
            if (foundTabs.length > 0) {
                url = foundTabs[0].url; // <--- this is what you are looking for
                /*alert(selector + " " + url);*/
                var jsonReqUrl = "https:\/\/scrapable.herokuapp.com/results/api?url=" + url + "&selector=" + selector;
                /* alert(jsonReqUrl); */
                var jsonRes = Get(jsonReqUrl);
                /* alert(jsonRes); */

                document.documentElement.innerHTML = '';
                document.documentElement.innerHTML = jsonRes;

                //f

                //ar element = document.getElementById("element-id");
                //element.parentNode.removeChild(element);









            } else {
                alert("there's no window or no selected tab");
            }
        })
    


    //display json response
}

function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}