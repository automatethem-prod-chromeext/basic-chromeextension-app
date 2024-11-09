console.log("I am background.js")

// 확장 프로그램 설치 또는 업데이트 시 실행
// 다른 곳은 브라우저를 시작하거나 확장이 리로드될 때마다 실행
chrome.runtime.onInstalled.addListener(async (details) => {
  //chrome.tabs.create({ url: "https://sendtoai.automatethem.co/install.html" });
  chrome.tabs.create({ url: "html/install/index.html" });

  // 확장 프로그램이 제거될 때 특정 URL로 이동
  chrome.runtime.setUninstallURL("https://docs.google.com/forms/d/e/1FAIpQLSeK13vZbukS5N8OAdNe4j4JgotbloUYvVLA94rjYOU9d1kBIA/viewform?usp=sf_link");
});
