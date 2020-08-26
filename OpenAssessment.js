document.addEventListener('DOMContentLoaded', function(name) {
  document.querySelector('button').addEventListener('click', function() {
    var newURL = "https://slate.brandeis.edu/portal/brandeis_covid19";
      chrome.tabs.create({ url:newURL,active:false }, function(tab){
        chrome.tabs.executeScript(tab.id,{code:`
          (function(){
            document.getElementsByTagName('input')[2].click();
          })();`
        });
      });
    }, false);
  }, false);



/*

button.addEventListener("click", function() {
  chrome.tabs.update(tab.id, {url: "https://slate.brandeis.edu/portal/brandeis_covid19"});
  document.getElementsByTagName('input')[2].click();
  //.getElementById('form_d18b4fe3-24e1-48fa-8275-eac56f2485fc_2').click();
  //document.getElementById('form_4bf423cc-1681-4e60-be46-2af20e40510e_2').click();
  //document.getElementById('form_febaa6cf-a91c-4512-9a62-1b4d9fc76087_10').click();
  //document.getElementById('form_718644d8-2fac-43e8-9ee4-b292aafe4f45_1').click();
  //document.getElementsByClassName('default')[0].click();
      }, false);

*/
