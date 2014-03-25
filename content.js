chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  	document.getElementById('userid').value=request.userid;
  	document.getElementById('password').value=request.password;
  	document.getElementById('xsubmit').click();
    sendResponse({message: "success"});
});