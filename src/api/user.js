
const LOCAL_KEY = "user"

function random(min = 0, max = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

const delay = duration => {
    if (!duration) {
        duration = random(1000, 5000);
    }
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration)
    })
}

export async function login(loginId, loginPwd) {
    await delay(1000)
    if(loginId == "admin" && loginPwd == "123123") {
        const user = {
            loginId,
            name: "管理员"
        }
        localStorage.setItem(LOCAL_KEY, JSON.stringify(user));
        return user
    }
    return null
}

export async function logout(){
    await delay(1000)
    localStorage.removeItem(LOCAL_KEY);
}

export async function whoAmI(){
    await delay(1000)
    const user = localStorage.getItem(LOCAL_KEY);
    if(user) {
        return JSON.parse(user);
    }
    return null
}
