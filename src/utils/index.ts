export const getLastFiveYears = () => {
    const currentYear = new Date().getFullYear()
    const years = new Array()
    for (let i = 0; i <= 5; i++) {
        years.push({ name: (currentYear - i), value: currentYear - i})
    }
    return years
}