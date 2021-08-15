/**
 * 重定向首页，如果当前页面不是首页的话
 */
export function redirectHome() {
    let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
    let curRoute = routes[routes.length - 1].route //获取当前页面路由
    if (curRoute !== "pages/index/index") {
        uni.reLaunch({
            url: "/pages/index/index"
        })
    }
}

/**
 * 获取当前时间
 */
export function getCurrentTime() {
    var currentdate = new Date(); 
    var datetime = currentdate.getFullYear() + "-"
        + (currentdate.getMonth()+1)  + "-" 
        + currentdate.getDate() + " "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes() + ":" 
        + currentdate.getSeconds();     
    return datetime
}