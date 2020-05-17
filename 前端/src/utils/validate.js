//邮箱验证正则
export function validateEmail(value) {
    let reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;;
    return !reg.test(value) ? true : false;
}