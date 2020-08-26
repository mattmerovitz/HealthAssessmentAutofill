document.addEventListener('DOMContentLoaded', function(name) {
  document.querySelector('button').addEventListener('click', function() {
    chrome.tabs.update({ url:"https://slate.brandeis.edu/portal/brandeis_covid19",active:false }, function(tab){});
  }, false);
}, false);
