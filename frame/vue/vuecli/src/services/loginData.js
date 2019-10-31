import Http from './http'

export const getLoginData = params => {
    return Http.get('http://116.62.50.145:8082/S2GCMS/baRight/login', params)
}