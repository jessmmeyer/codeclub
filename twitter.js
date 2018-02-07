let tweetsElement = document.getElementById("tweets");
let newTweetHandleElement = document.getElementById("newTweetHandle")
let newTweetTextElement = document.getElementById("newTweetText");
let submitTweetButton = document.getElementById("submitTweet");


function addnewTweetFromHandle(tweetHandle, tweetText) {
  let newHandleElement = document.createElement("p");
  newHandleElement.classList.add("handle");
  newHandleElement.innerText = tweetHandle + ":";
  //console.log("Our new tweet element", newTweetElement);
  tweetsElement.appendChild(newHandleElement);

  let newTweetElement = document.createElement("p");
  newTweetElement.innerText = tweetText;
  console.log("Our new tweet element", newTweetElement);
  tweetsElement.appendChild(newTweetElement);


}

submitTweetButton.onclick = function() {
    addnewTweetFromHandle(
      newTweetHandleElement.value,
      newTweetTextElement.value);
};

//addnewTweet("This is another new tweet");
//addnewTweet("We reached 1B notifications");
//addnewTweet("It's 35 days til Xmas");

// Enable pusher logging - don't include this in production
   Pusher.logToConsole = true;

   var pusher = new Pusher('6a162136f6f63f5b1568', {
     cluster: 'eu',
     encrypted: true
   });

   var channel = pusher.subscribe('my-channel');
   channel.bind('my-event', function(data) {
     addnewTweetFromHandle(data.name,  data.message);
   });
