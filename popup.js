console.log("I am popup.js");

//document.addEventListener('DOMContentLoaded', function(){ //popup.html 에서 script 태그가 head 에 있는 경우
  const button = document.querySelector('#button');
  //const button = document.getElementById("button");
  button.addEventListener("click", async () => {
    document.body.style.backgroundColor = 'red';
    //background.js 로 메시지 보내기 시작
    const response1 = await chrome.runtime.sendMessage({
      type: 'from popup.js',
      payload: {
          message: 'from popup.js',
      },
    });
    //console.log(response1);
    //background.js 로 메시지 보내기 끝
    //content-script.js 로 메시지 보내기 시작
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const tab = tabs[0];
    const response2 = await chrome.tabs.sendMessage(tab.id, {
      type: 'from popup.js',
      payload: {
          message: 'from popup.js',
      },
    });
    //const response2 = await chrome.scripting.executeScript({
    //  target: { tabId: tab.id },
    //  args: [],
    //  function: function () {
    //    document.body.style.backgroundColor = 'green';
    //    return null;
    //  }
    //});
    //console.log(response2);
    //content-script.js 로 메시지 보내기 끝
  });
//});
