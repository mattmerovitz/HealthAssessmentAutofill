chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete' && tab.url.includes('https://slate.brandeis.edu/register/brandeis_dailyassessment?person=')) {
    chrome.tabs.executeScript(tab.id,{file: "Autofill.js"},function(results){chrome.tabs.update(tab.id,{active:true});});
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete' && tab.url.includes('https://slate.brandeis.edu/portal/brandeis_covid19') && !tab.url.includes('https://slate.brandeis.edu/portal/brandeis_covid19?cmd=scheduling')) {
    var conf = confirm("Would you like me to complete the daily health assessment for you?")
    if (conf) {
      chrome.tabs.executeScript(tab.id,{file: "Open.js"},function(results){chrome.tabs.update(tab.id,{active:true});});
    }
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete' && tab.url.includes('https://shibboleth.brandeis.edu/idp/profile/SAML2/Redirect/')) {
    chrome.tabs.executeScript(tab.id,{file: "login.js"},function(results){chrome.tabs.update(tab.id,{active:true});});
  }
});
