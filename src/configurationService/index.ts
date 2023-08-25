import * as dotenv from 'dotenv'
dotenv.config()

const getString = (key: string) => `${process.env}.REACT_APP_${key}`
const getNodeENV = () => process.env.REACT_APP_NODE_ENV
const getBoolean = (key: string) => {
    const value = `${process.env}.REACT_APP_${key}`
    if (value === 'true') {
        return true
    }
    return false
}

export const getApiBaseURL = () => getString('API_BASE_URL')