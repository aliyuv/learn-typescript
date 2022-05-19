/*
* 任务要求：
添加构造函数类型添加 on 方法的类型 和 destory 方法类型添加实例方法的定义
提示：
1 使用 declare class 来声明类的定义
2 使用字符串字面量声明几个限定值的定义，比如事件的类型
3 DOM 元素的类型可以使用内置类型
* */

type EventName = "success" | "error"

interface CLipboardEvent {
    action: string;
    text: string;
    trigger: string;
    clearSelection: () => void;
}

declare class ClipboardJS {
    constructor(selector: string | HTMLElement)

    on(eventName: EventName, cb: (e: CLipboardEvent) => void): void

    destroy(): void
}
