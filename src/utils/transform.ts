import UsaStatesJson from "./usaStates.json";

export const formatYearlyIncome = (yearlyIncome: string) => {
    return ((+yearlyIncome).toFixed(2))
}
export const formatLicenseStates = (licenseStates: string) => {
    const licenseStatesArray = licenseStates.trim().replace(/ +/g, '').split('|')
    const newLicenseStatesArray: Array<string> = [];

    licenseStatesArray.forEach((e) => {
        if (e.length > 2) {
            let reduction = JSON.parse(JSON.stringify(UsaStatesJson))[e]
            if (reduction) {
                newLicenseStatesArray.push(reduction)
            }
        } else {
            newLicenseStatesArray.push(e)
        }
    })
    return newLicenseStatesArray.join(', ')
}
export const formatPhone = (phone: string) => {
    const regexp = /[0-9]{10}$/
    const matched = phone.match(regexp)
    if(matched){
        return `+1${matched[0]}`
    }else{
        return phone
    }

}
