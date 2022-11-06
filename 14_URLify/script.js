// My variant
const urlifyString = (title) => {
    const letters = "qwertyuiopasdfghjklzxcvbnm1234567890-";

    return title.toLowerCase().split(' ').join('-').split('').filter((letter) => letters.includes(letter)).join('');
}

// Emma Bostian's variant
const urlify = (title) => {
    const punctuation = /[.,/#!$%^&*;:{}=\-_`~()'"]/g;
    return title.replace(punctuation, "").toLowerCase().trim().replaceAll(" ", "-");
}