/**
 * Vue 全局函数
 */
export default {
    install(Vue, options) {
        Vue.prototype.navigateTo = function (url) {
			uni.navigateTo({ url })
        }
    }
}