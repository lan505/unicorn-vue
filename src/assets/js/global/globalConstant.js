/**
 * 全局常量
 */
const constant = {
    //后端token超时时间（y、m、d、h、min、s：年月日时分秒)
    cookieExpire: "2h",
    //后端token无效代码
    tokenExpireCode: "20000",
    //axios 请求超时（毫秒）
    timeout: 90000,
    //axios 请求地址
    baseURL: "http://localhost:9090/lan-admin/",
    //dict字典项名称
    dict: {
        sex: "sex",
        menuType: "menu_type",
    }
}

export default constant