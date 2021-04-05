import {
    isEmptyValue,
    isValidAge,
    isValidEmail,
    isValidExperience, isValidExpirationDate, isValidHasChildren, isValidLicenseNumber, isValidLicenseStates,
    isValidPhone,
    isValidYearlyIncome
} from "./validationRules"
import {formatHasChildren, formatLicenseStates, formatPhone, formatYearlyIncome} from "./transform";

// Main function
export const validation = (
    data: Array<Array<string>>,
    require: Array<string>,
    unique: Array<string>,
    onError: (e: string) => void,
    onSuccess: (data: any) => void
) => {
    if (!data || data.length < 2) {
        onError('Not correct data')
        return
    }
    // Has required fields in header?
    if (!hasRequiredFields(require, data[0])) {
        onError('Error Required Fields')
        return
    }
    const {headers, body} = getSeparatedData(data)
    const requireIndex = getIndex(require, headers)

    if (!hasRequiredFieldsInRow(body, requireIndex)) {
        onError('Error Required Fields')
        return
    }

    const transformedHeaders = headers.map((value,) => {
        return value.toLowerCase().replace(/ +/g, '_')
    })
    const uniqueIndex = getIndex(unique, headers)
    // Step 1 Validate
    const bodyAfterValidation = validateData(body, transformedHeaders)
    // Step 2 Find Duplication fields
    const newBody = findDuplicate(bodyAfterValidation, uniqueIndex)
    const newHeaders = ['ID', ...headers, 'Duplicate with']
    onSuccess({data: newBody, headers: newHeaders})
}

// Function which search first duplicate row
const findDuplicate = (data: Array<Array<{ value: string }>>, uniqueIndex: Array<number>) => {
    return data.map((currentRow, currentRowIndex) => {
        // For each Row in Array
        const currentId = currentRowIndex + 1
        let newRow = [{value: `${currentId}`}, ...currentRow, {value: ''}];

        for (let i = currentRowIndex + 1; i < data.length; i++) {
            const searchRow = data[i]

            const hasDuplicate = uniqueIndex.some((key) => {
                const current = currentRow[key].value.toLowerCase()
                const search = searchRow[key].value.toLowerCase()

                return current === search
            })

            if (hasDuplicate) {
                // If find duplicated fields, write ID & Start for new row
                const duplicatedWithIndex = newRow.length - 1
                newRow[duplicatedWithIndex].value = `${i + 1}`
                break
            }
        }
        return newRow
    })
}

const returnObject = (value: string, validator: (value: any) => any, formatter?: (value: any) => any) => {
    if (validator(value)) {
        let data = value
        if (formatter) {
            data = formatter(value)
        }
        return {value: data}
    } else {
        return {value: value, hasError: true}
    }
}
const validateData = (data: Array<Array<string>>, headerTransformed: Array<string>) => {
    return data.map((row) => {
        // For each row in array
        return row.map((value, index) => {
            switch (headerTransformed[index]) {
                case 'phone':
                    return returnObject(value, isValidPhone, formatPhone)
                case 'email':
                    return returnObject(value, isValidEmail)
                case 'age':
                    return returnObject(value, isValidAge)
                case 'experience':
                    const ageIndex = headerTransformed.indexOf('age')
                    if (!isValidAge(row[ageIndex])) {
                        return {value: value, hasError: true}
                    } else {
                        if (isValidExperience(+row[ageIndex], +value)) {
                            return {value: value}
                        } else {
                            return {value: value, hasError: true}
                        }
                    }
                case 'yearly_income':
                    return returnObject(value, isValidYearlyIncome, formatYearlyIncome)
                case 'has_children':
                    return returnObject(value, isValidHasChildren, formatHasChildren)
                case 'license_states':
                    return returnObject(value, isValidLicenseStates,formatLicenseStates)
                case 'expiration_date':
                    return returnObject(value, isValidExpirationDate)
                case 'license_number':
                    return returnObject(value, isValidLicenseNumber)
                default:
                    return {value: value}
            }
        })
    })
}

const hasRequiredFieldsInRow = (body: Array<Array<string>>, requireIndex: Array<number>) => {
    return body.every((bodyRow) => {
        return requireIndex.every((value1,) => {
            return !isEmptyValue(bodyRow[value1])
        })
    })
}

const getIndex = (forData: Array<string>, fromData: Array<string>) => {
    return forData.map((value) => {
        return fromData.indexOf(value)
    })
}
// function for separating input data
// return object with header & body
const getSeparatedData = (data: Array<Array<string>>) => {
    let headers: Array<string> = []
    let body: Array<Array<string>> = []

    data.forEach((value, index) => {
        if (index === 0) {
            headers = value
        } else {
            body.push(value)
        }
    })

    return {headers, body}
}

export function hasRequiredFields(requiredFields: Array<string>, data: Array<string>) {
    const required = requiredFields.map(field => field.toLowerCase())
    const temp = data.filter(field => required.includes(field.toLowerCase()))
    return required.length === temp.length
}


