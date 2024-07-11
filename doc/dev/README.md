# basic-app-chromeextension

크롬 확장(extension) 만들기 - 3분 안에  
https://www.youtube.com/watch?v=cGUC-txyZaE

![](attach_files/screenshot1.png?raw=true)

![](attach_files/screenshot2.png?raw=true)

## 1

[팝업 크게 띄우기]

https://github.com/automatethem-js-web-chromeextension/chrome-extensions-samples/blob/main/api-samples-alarms/manifest.json  
https://github.com/automatethem-js-web-chromeextension/chrome-extensions-samples/blob/main/api-samples-alarms/background.js

https://github.com/automatethem-js-web-chromeextension/chrome-extensions-samples/blob/main/api-samples-debugger/service-worker.js

https://github.com/automatethem-js-web-chromeextension/chrome-extensions-samples/blob/main/api-samples-idle/service-worker.js  
https://github.com/automatethem-js-web-chromeextension/chrome-extensions-samples/blob/main/api-samples-idle/manifest.json

https://github.com/automatethem-js-web-chromeextension/chrome-extensions-samples/blob/main/api-samples-omnibox/new-tab-search/background.js

https://github.com/automatethem-js-web-chromeextension/chrome-extensions-samples/blob/main/api-samples-printing/background.js

https://github.com/automatethem-js-web-chromeextension/chrome-extensions-samples/blob/main/api-samples-tabs/inspector/service-worker.js

On install

```
chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({
    url: 'main.html'
  });
});
```
https://github.com/automatethem-js-web-chromeextension/chrome-extensions-samples/blob/main/api-samples-sandbox/sandboxed-content/service-worker.js

```
chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
    url: 'mainpage.html'
  });
  console.log('Opened a tab with a sandboxed page!');
});
```
https://github.com/automatethem-js-web-chromeextension/chrome-extensions-samples/blob/main/api-samples-sandbox/sandbox/service-worker.js

옵션 페이지 열기

https://github.com/automatethem-js-web-chromeextension/chrome-extensions-samples/blob/main/api-samples-userScripts/sw.js

## 1

```
/*
//content-script.js 로 메시지 보내기

const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
const tab = tabs[0];
const response = await chrome.tabs.sendMessage(tab.id, {
  type: 'from content-script.js',
  payload: {
      message: 'from popup.js',
  },
});
console.log(response);
*/
```

```
//컨텍스트 메뉴

chrome.contextMenus.create({
  id: "contextMenu1",
  title: "컨텍스트 메뉴1"
});

/*
chrome.contextMenus.create({
  id: "contextMenu2",
  title: "컨텍스트 메뉴2",
  contexts: ["selection"] //선택한 텍스트에서만 컨텍스트 메뉴를 표시
});

chrome.contextMenus.create({
  id: "contextMenu3",
  title: "컨텍스트 메뉴3",
  contexts: ["link"], //링크에서만 컨텍스트 메뉴를 표시
  targetUrlPatterns: ["*://cr.shopping.naver.com/*"] //특정 URL 패턴에 대해서만
});
*/

chrome.contextMenus.onClicked.addListener(async function (info, tab) {
  console.log(info);
  console.log(tab);
  if (info.menuItemId === "contextMenu1") {
    console.log("contextMenu1");

    //https://youtu.be/zNswnpCKuzU?list=PLlntQfRHhjjB4pxzH6qR2lly1ZgaZAjkG&t=257
    //const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    //const tab_ = tabs[0];
    //console.log(tab_);
    //console.log(tab_.url);
    //if (tab_.url == 'https://www.naver.com/') {
      const response = await chrome.tabs.sendMessage(tab.id, {
        type: 'from background.js',
        payload: {
            message: 'from background.js',
        },
      });
      console.log(response);
    //}

  }
  else if (info.menuItemId === "contextMenu2") {
    console.log("contextMenu2");
  }
  else if (info.menuItemId === "contextMenu3") {
    console.log("contextMenu3");
  }
});
```

## permission

https://developer.chrome.com/docs/extensions/reference/api/permissions

https://www.youtube.com/watch?v=vS8KYgAgQZ0&list=PLlntQfRHhjjB4pxzH6qR2lly1ZgaZAjkG&index=11

## Do I need to declare host_permissions in my chrome extension?

https://stackoverflow.com/questions/67963337/do-i-need-to-declare-host-permissions-in-my-chrome-extension

No, you don't need to add host permission unless your extension needs to interact directly with the users browser/client data, for example cookies, webRequest, and tabs.

## 1

//const tabs = await chrome.tabs.query({ active: true, currentWindow: true });  
const tabs = await chrome.tabs.query({active: true, lastFocusedWindow: true});
