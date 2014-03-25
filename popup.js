//onclick function for login
function callBackgroundPage(){
	var data = {};
	data.userid = document.getElementById('user').value+'@'+
					document.getElementById('tenant').value+'.'+
					document.getElementById('com').value;
	data.password = document.getElementById('password').value;
	chrome.extension.getBackgroundPage().sendMessage(data);
}
document.getElementById('submit').onclick=callBackgroundPage;
