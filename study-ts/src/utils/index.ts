/**
 * 把驼峰转换成横杠连接
 */
export const toLine = (value: string) => {
    value = value.charAt(0).toLowerCase() + value.slice(1)
    value = value.replace(/([A-Z])/g, '-$1').toLocaleLowerCase()
    return value
} 