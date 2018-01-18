export default domExist

function domExist (el) {
    var dom
    if (el instanceof HTMLElement) {
        dom = el
    } else {
        if (typeof el === 'string') {
            dom = document.getElementById(el) || (document.querySelector && document.querySelector(el))
        }
    }
    if (!dom) {
        return {
            result: false,
            code: -1,
            msg: 'element not found'
        }
    }
    if (document.body.contains(dom)) {
        return {
            result: true,
            code: 0,
            msg: 'element is in document.body'
        }
    }
    return {
        result: false,
        code: -2,
        msg: 'element is not in document.body'
    }
}
