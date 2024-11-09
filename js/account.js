/**
 * Swap login form to register form and vice versa
 * @param {String} state Current form state (login/register)
 */
function switchForm(state) {
    const form = document.getElementById("account");
    const switchButton = document.getElementById("account-switch");
    const formHeader = document.getElementById("account-header");
    const confirmPassword = document.getElementById("confirm");

    // Update form submit
    form.onsubmit =
        state === "login" ?
        function() {
            submitForm("register");
        } :
        function() {
            submitForm("login");
        };

    // Update button html
    switchButton.innerHTML =
        state === "login" ?
        "Have an account? Login here" :
        "Don't have an account? Register now";

    // Update onclick event
    switchButton.onclick =
        state === "login" ?
        function() {
            switchForm("register");
        } :
        function() {
            switchForm("login");
        };

    // Change form header
    formHeader.innerHTML = state === "login" ? "Create an Account:" : "Login:";

    // Change form header
    confirmPassword.classList.toggle("hidden");
}

/**
 * Handle form submit with backend
 * @param {String} state Current form state (login/register)
 */
async function formSubmit(state) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(await createAccount({
        username,
        password
    }));
}

async function createAccount(creds) {
    const res = await fetch("http://127.0.0.1:8000/user/create", {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(creds)
    });

    if (res.status !== 200) {
        return {
            ok: false,
            status: res.status,
        };
    }

    return {
        ok: true,
        user: await res.json(),
    };
}

async function login(creds) {
    const res = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: JSON.stringify(creds()),
    });

    if (res.status !== 200) {
        return {
            ok: false,
            status: res.status,
        };
    }

    return {
        ok: true,
    };
}

async function getUsers() {
    const res = await fetch("http://127.0.0.1:8000/user/all", {
        method: "GET",
        headers: {
            "Content-Type": "text/plain",
        },
    });

    if (res.status !== 200) {
        return {
            ok: false,
            status: res.status,
        };
    }

    return {
        ok: true,
        users: await res.json(),
    };
}