export class StandardResponse {
    code: number
    data?: any
    errors?: string[] = []
    message?: string

    constructor(value: StandardResponse) {
        Object.keys(value || { }).forEach(key => this[key] = value[key])
    }
}