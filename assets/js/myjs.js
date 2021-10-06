// title脚本
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '隐秘籍——土遁';
        clearTimeout(titleTime);
    } else {
        document.title = '阿嘞嘞～～';
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        }, 2000);
    }
});
