const CONTAINS_LOWERCASE_LETTER_REGEX = /\p{Ll}/gu;
const CONTAINS_UPPERCASE_LETTER_REGEX = /\p{Lu}/gu;
const CONTAINS_DIGIT_REGEX = /\p{Nd}/gu;
const CONTAINS_SPECIAL_CHARACTER_REGEX = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

const isPasswordValid = (password) => {
    if (
        CONTAINS_LOWERCASE_LETTER_REGEX.test(password) &&
        CONTAINS_UPPERCASE_LETTER_REGEX.test(password) &&
        CONTAINS_DIGIT_REGEX.test(password) &&
        CONTAINS_SPECIAL_CHARACTER_REGEX.test(password) &&
        password.length >= 8
    ) {
        return "Password is valid.";
    } else {
        return "Password is invalid.";
    }
}