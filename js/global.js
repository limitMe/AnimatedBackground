(function() { var req = {"global":true,"production":false,"csrfToken":null};
if(req.user && req.user.key) { window.userkey = req.user.key; window.user = req.user; }
if(typeof(angular) != "undefined" && angular) {
if(window._backend_) { angular.module("backend").factory("global",["context",function(context){
  var own={}.hasOwnProperty,key;
  for (key in req) if (own.call(req, key)) context[key] = req[key];
  return req;
}]); }else{
  angular.module("backend",[]).factory("global",[function(){return req;}]);
}}})()