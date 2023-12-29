document.addEventListener("click", (event) => {
  chrome.runtime.sendMessage({
      click: true
    },
    response => {
      //This was a bookmarklet but they no longer work. Snippet in dev tools? How about an extension!
      var element = document.querySelector("script[type='application/ld+json']");
      var articlejson=element.innerHTML;
      var articlebody=JSON.parse(articlejson).articleBody;
      var articletitle=JSON.parse(articlejson).headline;
      var article="<H3>"+articletitle+"</H3><p>"+articlebody+"</p>"
      //check if the json has a title in the right place
      if(articletitle !=undefined){
        //open the window and fill it with the text
        var myWindow=window.open("","Article","width=1024,height=768"); 
        myWindow.document.write(article);
      }
    }
  );
});
