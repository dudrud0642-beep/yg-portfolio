// 공용 리다이렉트 (쿼리스트링·해시 유지)
// 1. 구 주소(/html/xxx.html) 접속 시 루트 경로(/xxx.html)로 이동
// 2. localhost 외 leeyg.site 가 아닌 도메인으로 접속 시 leeyg.site 로 이동
(function () {
  var SITE = 'leeyg.site';
  var LOCAL_HOSTS = ['localhost', '127.0.0.1'];

  var host = location.hostname;
  var path = location.pathname.replace(/\/html\/(index\.html)?$/, '/').replace(/\/html\/([^\/]+)$/, '/$1');
  var isLocal = location.protocol === 'file:' || LOCAL_HOSTS.indexOf(host) !== -1;

  if (!isLocal && host !== SITE) {
    location.replace('https://' + SITE + path + location.search + location.hash);
  } else if (path !== location.pathname) {
    location.replace(path + location.search + location.hash);
  }
})();
