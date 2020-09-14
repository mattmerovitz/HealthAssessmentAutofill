chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete' && tab.url.includes('https://slate.brandeis.edu/portal/brandeis_covid19') &&
  !tab.url.includes('https://slate.brandeis.edu/portal/brandeis_covid19?cmd=scheduling') &&
  !tab.url.includes('https://slate.brandeis.edu/portal/brandeis_covid19?cmd=passport') &&
  !tab.url.includes('https://slate.brandeis.edu/portal/brandeis_covid19?cmd=training') &&
  !tab.url.includes('https://slate.brandeis.edu/portal/brandeis_covid19?cmd=history') &&
  !tab.url.includes('https://slate.brandeis.edu/portal/brandeis_covid19?cmd=settings')) {
    var conf = confirm("Would you like me to complete the daily health assessment for you?")
    if (conf) {
      chrome.tabs.executeScript(tab.id,{file: "Open.js"},function(results){chrome.tabs.update(tab.id,{active:true});});
      chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.status == 'complete' && tab.url.includes('https://slate.brandeis.edu/register/brandeis_dailyassessment?person=') && conf) {
          chrome.tabs.executeScript(tab.id,{file: "Autofill.js"},function(results){chrome.tabs.update(tab.id,{active:true});});
        }
      });
    }
  }
});
