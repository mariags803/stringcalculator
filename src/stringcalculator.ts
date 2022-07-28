export const adds = (expression) => {
    if(!expression) return 0;
    let separator = ',';
    const separatorConfigStart = '//';
    if(expression.startsWith(separatorConfigStart)){
        const separatorConfigEnd = '/';
        separator = getSeparator(expression,separatorConfigStart,separatorConfigEnd);
        expression = getExpressionWithoutSeparatorConfig(expression,separatorConfigEnd);
    }
    const elements = expression.split(separator);
    return getNumbers(elements).reduce(sum);
}

const getSeparator = (expression : string,separatorConfigStart: string,separatorConfigEnd: string) =>{
    return expression.slice(separatorConfigStart.length, expression.lastIndexOf(separatorConfigEnd));
}

const getExpressionWithoutSeparatorConfig = (expression : string,separatorConfigEnd: string) =>{
    return expression.slice(expression.lastIndexOf(separatorConfigEnd)+1);
}

const getNumbers = (elements: string[]) => {
    return elements.map(Number).filter((element) => !Number.isNaN(element));
}

const sum = (previousNumber, currentNumber) => {
    return previousNumber + currentNumber
}