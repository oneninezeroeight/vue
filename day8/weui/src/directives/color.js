export default {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el, binding) {
        // vue数据驱动 不会真正DOM元素
        // ref
        el.style.color = binding.value
        // console.log(el,binding)
        // 聚焦元素
        // el.focus()
    }
}