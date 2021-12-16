// title脚本
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '记得随手关闭';
        clearTimeout(titleTime);
    } else {
        document.title = '你又来了啊';
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        }, 2000);
    }
});