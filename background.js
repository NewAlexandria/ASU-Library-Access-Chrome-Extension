var proxy_list = {
  arizona_state_univ: {proxy: '.ezproxy1.lib.asu.edu'}
};

function rewriteUrl(tab) {
  url_pieces     = tab.url.split('/');
  if (url_pieces[2].indexOf(proxy_list.arizona_state_univ.proxy) <= 0) {
    url_pieces[2] += proxy_list.arizona_state_univ.proxy;
    lib_url        = url_pieces .join('/');
    chrome.tabs.update(tab.id, {url:lib_url});
  }
}

chrome.browserAction.onClicked.addListener(rewriteUrl);

