function getAdmins(map) {

    let admins = [];
    for([key, value] of map){
        if (value === 'ADMIN') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'ADMIN');
usuarios.set('Kaique', 'ADMIN');
usuarios.set('Rafael', 'USER');
usuarios.set('Jonas', 'USER');

console.log(getAdmins(usuarios));