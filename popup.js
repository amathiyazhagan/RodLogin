//onclick function for login
function callBackgroundPage(){
	var data = {};
	data.userid = document.getElementById('user').value+'@'+
					document.getElementById('tenant').value+'.'+
					document.getElementById('com').value;
	data.password = document.getElementById('password').value;

	localStorage['user'] = document.getElementById('user').value;
	localStorage['tenant'] = document.getElementById('tenant').value;
	localStorage['com'] = document.getElementById('com').value;
	localStorage['password'] = document.getElementById('password').value;

	chrome.extension.getBackgroundPage().sendMessage(data);
}
document.getElementById('submit').onclick=callBackgroundPage;

if(localStorage['user']) 	document.getElementById('user').value = localStorage['user'];
if(localStorage['tenant']) 	document.getElementById('tenant').value = localStorage['tenant'];
if(localStorage['com']) 	document.getElementById('com').value = localStorage['com'];
if(localStorage['password']) 	document.getElementById('password').value = localStorage['password'];
