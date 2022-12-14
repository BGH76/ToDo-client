import bcrypt from 'bcryptjs'

export function generateHash(password) {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export function compareHash(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
}