export const getToken = () => JSON.parse(localStorage.getItem('petshop-admin') ?? '')
export const setToken = (token: string) => localStorage.setItem('petshop-admin', JSON.stringify(token))
export const removeToken = () => localStorage.removeItem('petshop-admin')