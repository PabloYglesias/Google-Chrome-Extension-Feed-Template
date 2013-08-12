    google.load("feeds", "1");

    function initialize() {
      var feed = new google.feeds.Feed("URL FEED"); //Complete with your feed
      feed.setNumEntries(10);
      var count = 1;
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed");
          var html = "";
          for (var i = 0; i < result.feed.entries.length-5; i++) {
            var entry = result.feed.entries[i];

            var content = entry.content;
            var imgArray = content.match( /src=(.+?[\.jpg|\.gif|\.png]")/ );

            html = "<a href='" + entry.link + "'><div id='entry'><h4>" + entry.title + "</h4><h5><table><tr><td id='photo'><img " + imgArray[0] + " width=70/></td><td id='content'>" + entry.contentSnippet + "</td></tr></table></div></a></h5>";
            var div = document.createElement("div");
            div.innerHTML = html;
            container.appendChild(div);            
          }
          document.write(html);
        }
      });
    }
    google.setOnLoadCallback(initialize);

