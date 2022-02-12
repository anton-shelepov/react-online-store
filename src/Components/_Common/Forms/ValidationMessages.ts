export const requiredInput = "Поле не может быть пустым";
export const correctEmail = "Введите корректную почту";
export const passwordsMustMatch = "Пароли не совпадают"
export const nameMustBeCorrect = "Введите корректное имя"

export const minLengthPassword = (
    value: number,
    message: string = `Пароль должен иметь более ${value} символов`
) => message;

export const maxLengthPassword = (
    value: number,
    message: string = `Пароль должен иметь менее ${value} символов`
) => message

