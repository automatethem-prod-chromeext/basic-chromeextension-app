console.log("I am content-script.js");

document.body.style.backgroundColor = 'blue';

//메시지 받기

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type == 'from popup.js')
    document.body.style.backgroundColor = 'green';
  console.log('content-script.js received message');
  console.log(message);
  sendResponse({ message: 'content-script.js received message', receivedMessage: message });
  return true;
});
