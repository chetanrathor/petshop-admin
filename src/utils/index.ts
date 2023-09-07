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