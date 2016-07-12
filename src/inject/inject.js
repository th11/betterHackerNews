chrome.extension.sendMessage({}, function(response) {
  let readyStateCheckInterval = setInterval(function() {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval);

      updateLinks();
    }
  }, 10);
});

function updateLinks() {
  let storyLinks = document.getElementsByClassName('storyLink');

  for(let i = 0, len = storyLinks.length; i < len; i++) {
    storyLinks[i].setAttribute('target', '_blank');
  }
}
