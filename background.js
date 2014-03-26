function click(e) {
  alert("this alert certainly shows");  
  console.log("But this does not");
}

 function sendMessage(data){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, data, function(response) {
	    console.log(response.farewell);
	  });
	});
}


	var googleAuth = new OAuth2('google', {
  client_id: '640767095498-7684ac26cdr98tkkp6ssuc02lhtg8bj5.apps.googleusercontent.com',
  client_secret: '5IJv9U4kQB0DQoMtjBh7Vi6b',
  api_scope: 'https://spreadsheets.google.com/feeds'
});

function callback(resp, xhr) {
  console.log("resp:"+resp);
};

function onAuthorized() {
  var url = 'https://spreadsheets.google.com/feeds/list/0AsecKBAmOV9CdG1XLXc4dEUzSGZwQVFaLU5vYVZkakE/od6/private/values';
  var request = {
    'method': 'GET',
    'parameters': {'alt': 'json'}
  };

  // Send: GET https://docs.google.com/feeds/default/private/full?alt=json
  var theUrl = 'https://spreadsheets.google.com/feeds/list/0AsecKBAmOV9CdG1XLXc4dEUzSGZwQVFaLU5vYVZkakE/od6/private/values?alt=json&access_token='+googleAuth.getAccessToken();
 	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, false );
	xmlHttp.send( null );
	console.log(xmlHttp.responseText);

  console.log(googleAuth.getAccessToken());
  	
  //console.log('onAuthorized');
};

googleAuth.authorize(onAuthorized);