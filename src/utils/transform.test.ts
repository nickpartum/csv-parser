import {formatPhone} from "./transform";




// Function formatPhone
it('should format phone number 1234567890 to +11234567890', () => {
    let newValue = formatPhone('1234567890')
    expect(newValue).toBe('+11234567890')
});
it('should format phone number 11234567890 to +11234567890', () => {
    let newValue = formatPhone('11234567890')
    expect(newValue).toBe('+11234567890')
});
it('should format phone number +11234567890 to +11234567890', () => {
    let newValue = formatPhone('+11234567890')
    expect(newValue).toBe('+11234567890')
});
it('should return same as input 123456789 -> 123456789', () => {
    let newValue = formatPhone('123456789')
    expect(newValue).toBe('123456789')
});
