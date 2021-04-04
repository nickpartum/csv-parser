export function validatorTest() {
// if (hasRequiredFields(required, data[0])) {
//     let newData: Array<any> = []
//     let headers = []
//     data.forEach((value, index) => {
//         if (index === 0) {
//             value.forEach((value1, index1) => {
//                 headers.push({
//                     id: index1,
//                     value: value1,
//                     transformed: value1.toLowerCase().replace(/ +/g, '_')
//                 })
//             })
//             newData.push(['ID', ...value, 'Duplicate with'])
//         } else {
//             // required fields
//             [0, 1, 2].forEach((value1, index1) => {
//                 if (value[value1] === '') {
//                     setError(`Error Required Fields #${index} is empty`)
//                 }
//             })
//             // validate
//             // [1, 3, 4, 5, 6, 7, 8]
//             const newValue = value.map((value1, index1) => {
//                 switch (index1) {
//                     case 1:
//                         if (isValidPhone(value[1])) {
//                             return {value: formatPhone(value1)}
//                         } else {
//                             return {value: value1, hasError: true}
//                         }
//                     case 2:
//                         if (isValidEmail(value[2])) {
//                             return {value: value1}
//                         } else {
//                             return {value: value1, hasError: true}
//                         }
//                     case 3:
//                         if (isValidAge(+value[3])) {
//                             return {value: value1}
//                         } else {
//                             return {value: value1, hasError: true}
//                         }
//                     case 4:
//                         if (!isValidAge(+value[3])) {
//                             return {value: value1, hasError: true}
//                         } else {
//                             if (isValidExperience(+value[3], +value[4])) {
//                                 return {value: value1}
//                             } else {
//                                 return {value: value1, hasError: true}
//                             }
//                         }
//                     case 5:
//                         if (isValidYearlyIncome(+value[5])) {
//                             return {value: formatYearlyIncome(+value1)}
//                         } else {
//                             return {value: value1, hasError: true}
//                         }
//                     case 6:
//                         if (isValidHasChildren(value[6])) {
//                             return {value: value1}
//                         } else {
//                             return {value: value1, hasError: true}
//                         }
//                     case 7:
//                         if (value[7]) {
//                             return {value: formatLicenseStates(value1)}
//                         } else {
//                             return {value: value1}
//                         }
//                     case 8:
//                         if (isValidExpirationDate(value[8])) {
//                             return {value: value1}
//                         } else {
//                             return {value: value1, hasError: true}
//                         }
//                     case 9:
//                         if (isValidLicenseNumber(value[9])) {
//                             return {value: value1}
//                         } else {
//                             return {value: value1, hasError: true}
//                         }
//                     default:
//                         return {value: value1}
//                 }
//             })
//             // let newValue =
//             newData.push([{value: index.toString()}, ...newValue, {value: ''}])
//         }
//     })
//
//     newData.forEach((value, index) => {
//         if (index !== 0) {
//             const id = value[0].value
//             const email = value[2].value.toLowerCase()
//             const phone = value[3].value.toLowerCase()
//             for (let i = index + 1; i < newData.length; i++) {
//                 const idSerch = newData[i][0].value
//                 const emailSerch = newData[i][2].value.toLowerCase()
//                 const phoneSerch = newData[i][3].value.toLowerCase()
//                 // debugger
//                 if (email === emailSerch || phone === phoneSerch) {
//                     newData[index][11].value = idSerch
//                     newData[i][11].value = id
//                     // debugger
//                     break
//                 }
//                 // debugger
//             }
//         }
//     })
//     setTable({
//         headers: newData.shift(),
//         data: newData
//     })
//     //console.log(newData)
// } else {
//     setError('Error Required Fields')
// }
// // prepareForTable(data)
// console.log(table)
}
