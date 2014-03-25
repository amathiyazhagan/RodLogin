function sendMessage(data){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, data, function(response) {
	  	console.log(response.message);
	  });
	});
}


 		

		