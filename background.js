console.log("I am background.js")

chrome.runtime.onInstalled.addListener(async (details) => {
  // 확장 프로그램이 설치 혹은 업데이트될 때 특정 URL로 이동
  if (details.reason === 'install' || details.reason === 'update') {
    //chrome.tabs.create({ url: "https://sendtoai.automatethem.co/install.html" });
  }
});

// 확장 프로그램이 제거될 때 특정 URL로 이동
//chrome.runtime.setUninstallURL("https://sendtoai.automatethem.co/uninstall.html");
