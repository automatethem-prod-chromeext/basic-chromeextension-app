console.log("I am background.js")

chrome.tabs.onCreated.addListener(function(tab) {
  console.log(tab)
})

chrome.tabs.onActivated.addListener(function(tab) {
  console.log(tab)
})

//

chrome.bookmarks.onCreated.addListener(function (id, bookmark) {
  console.log(id)
  console.log(bookmark)
});

//

chrome.action.onClicked.addListener(async (tab) => {
  console.log(tab);
  //팝업창을 새 텝으로 띄우기
  //manifest.json 에서
  //"default_popup":"popup.html"
  //을
  //"action": {},
  //와 같이 수정후 아래 코드 사용
  //chrome.tabs.create({ url: 'popup.html' });
  //chrome.runtime.openOptionsPage();
});

//

chrome.runtime.onInstalled.addListener(() => {
  console.log('installed');
  //chrome.tabs.create({ url: 'popup.html' });
  //https://github.com/automatethem-js-web-chromeextension/change-background-color-chromeextension-app
  //chrome.runtime.openOptionsPage();
});
