
export const getElementIndex = (element, target) => {
    // 찾고자 하는 target이 element 중에 몇번째 인가.
    if (target) return [].indexOf.call(element, target);
    // target이 없다면 element가 몇번째 인지 
    return [].indexOf.call(element.parentNode.children, element);
}
