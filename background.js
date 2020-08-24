chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete' && tab.url.includes('https://slate.brandeis.edu/register/brandeis_dailyassessment?person=')) {
    chrome.tabs.executeScript(tab.id,{file: "Autofill.js"},function(results){chrome.tabs.update(tab.id,{active:true});});
  }
});