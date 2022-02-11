export const requiredInput = "Поле не может быть пустым"; 
export const correctEmail = "Введите корректную почту";
export const passwordsMustMatch = "Пароли не совпадают"
export const nameMustBeCorrect = "Введите корректное имя"

export const minLengthPassword = (value: number) => {
    return `Пароль должен иметь более ${value} символов`
}

export const maxLengthPassword = (value: number) => {
    return `Пароль должен иметь менее ${value} символов`
}

