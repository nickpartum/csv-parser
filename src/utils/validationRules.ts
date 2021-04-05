import UsaStatesJson from "./usaStates.json";

export const isValidAge = (age: string) => {
    if(isNaN(+age)) return false
    return (Number.isInteger(+age) && (+age >= 21))
}
export const isValidExperience = (age: number, experience: number) => {
    if(isNaN(+age) || isNaN(experience)) return false
    return ((experience >= 0) && (experience < age))
}
export const isValidYearlyIncome = (yearlyIncome: number) => {
    if(isNaN(+yearlyIncome)) return false
    return ((yearlyIncome >= 0) && (yearlyIncome <= 1e6))
}
export const isValidExpirationDate = (expirationDate: string) => {
    const reg1 = /^\d{4}-\d{2}-\d{2}$/  // YYYY-MM-DD
    const reg2 = /^\d{2}\/\d{2}\/\d{4}$/  // MM/DD/YYYY
    // Has wrong format
    if (!reg1.test(expirationDate) && !reg2.test(expirationDate)) {
        return false
    }
    const inputDate = new Date(expirationDate)
    const curentDate = new Date()
    // Is bigger than current date
    return inputDate > curentDate
}
export const isValidPhone = (phone: string) => {
    const regexp = /(^\d{10}$)|(^[1]{1}\d{10}$)|(^[+][1]{1}\d{10}$)/
    return regexp.test(phone)
}
export const isValidEmail = (email: string) => {
    const regexp = /^[\w-.]+@[\w-]+.+[\w-]{2,4}$/
    return regexp.test(email)
}
export const isValidHasChildren = (hasChildren: string) => {
    const str = hasChildren.toLowerCase()
    return ((str === 'true') || (str === 'false') || (str === ''))

    // return ((hasChildren === 'TRUE') || (hasChildren === 'FALSE') || (hasChildren === ''))
}
export const isValidLicenseNumber = (licenseNumber: string) => {
    // Must have 6 digits or letters
    const regexp = /^\w{6}$/
    return regexp.test(licenseNumber);
}
// Add rule for states
export const isValidLicenseStates = (licenseStates: string) => {
    const licenseStatesArray = licenseStates.trim().replace(/ +/g, '').split('|')

    return licenseStatesArray.every((stateName) => {
        let hasState = false
        for(const [fullName, abridgementName] of Object.entries(UsaStatesJson)) {
            if(stateName === fullName || stateName === abridgementName){
                hasState = true
                break
            }
        }
        return hasState
    })
}
export const isEmptyValue = (value: string) => (value === '')
