// 获取session数据
export const sessionGetItem = (params) => {
    return JSON.parse(sessionStorage.getItem(params))
}

// 存储session数据
export const sessionSetItem = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))
}


// 检测手机号
export const checkmobile = /^1[34578]\d{9}$/

// 检测身份证号
export const checkidCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/


// 匹配文件
export const regexFile = /\.(gif|jpg|jpeg|png|GIF|JPG|PNG|PDF|pdf)$/


// 获取目标参数
export const getUrlParams = (name) => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象 
    if(window.location.href.split("?")[1]){
        let r=window.location.href.split("?")[1].match(reg);//匹配目标参数
        if (r != null) return decodeURI(r[2]);
    }
    return null; //返回参数值 
}

