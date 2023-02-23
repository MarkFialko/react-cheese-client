export const userNameFormat = (username: string): string => {
    const firstName = username.split(" ")[0]
    const lastName = username.split(" ")[1]

    return firstName + ' ' + lastName[0] + '.'
}