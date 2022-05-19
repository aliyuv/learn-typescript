// 我们可以简单的将它的 API 理解为这样
// 构造函数
var clipboard = new ClipboardJS('.btn') // 字符串或者元素
// 事件
clipboard.on('success 或者 error', function (e) {
    console.info('Action:', e.action); //字符串
    console.info('Text:', e.text); //字符串
    console.info('Trigger:', e.trigger); // DOM 元素
    e.clearSelection(); // 函数 返回 void
});
// 实例方法
clipboard.destroy();
