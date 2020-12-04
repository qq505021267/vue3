const LOCAL_STORATE_KEY = "todoList" //任务列表的KEY值


/**
 * 获取所以的任务列表
 */
export function fetch() {
    const result = localStorage.getItem(LOCAL_STORATE_KEY);
    if (result) {
        return JSON.parse(result);
    }
    return []
}

/**
 * 保存所有的任务
 * @param {*} todoList 所有任务列表
 */
export function save(todoList) {
    localStorage.setItem(LOCAL_STORATE_KEY, JSON.stringify(todoList));
}

/**
 * 生成一个随机数
 */
export function generateId() {
    return Date.now() + Math.random().toString(36).substr(2, 4);
}

export function filter(todoList, visibility = "all") {
    if(visibility == "all") {
        return todoList
    }else if (visibility == "active") {
        return todoList.filter(item => !item.completed)
    }else if (visibility == "completed") {
        return todoList.filter(item => item.completed)
    }
    throw new Error("invalid visibility value")
}
