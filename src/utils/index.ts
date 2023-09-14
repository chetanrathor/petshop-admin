export const getLastFiveYears = () => {
    const currentYear = new Date().getFullYear()
    const years = new Array()
    for (let i = 0; i <= 5; i++) {
        years.push({ name: (currentYear - i), value: currentYear - i })
    }
    return years
}

export function camelCaseToCapitalized(str: string) {
    // Use a regular expression to split the string at each uppercase letter
    const words = str.split(/(?=[A-Z])/);

    // Capitalize the first letter of each word and join them back together
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the capitalized words to form the final string
    const capitalizedStr = capitalizedWords.join(' ');

    return capitalizedStr;
}
type Type<T> = {
    [key: string]: T;
};
export const geteSelectElementData = (data: any[]) => {

    const keys = Object.keys(data)
    //['id','createdAt','deletedAt','name']
    const keysTobeCheck = ['id', 'name']

   return data.map((item: any) => {
        let child = {
            name: item.name,
            value: item.id
        }
        return child
    })

}