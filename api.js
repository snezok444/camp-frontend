const API_URL = "https://camp-platform-backend-production.up.railway.app";

function get(path) {
    return fetch(API_URL + path, {
        headers: {
            "Authorization": "Bearer " + (localStorage.getItem("token") || "")
        }
    }).then(r => r.json());
}

function post(path, body) {
    return fetch(API_URL + path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + (localStorage.getItem("token") || "")
        },
        body: JSON.stringify(body)
    }).then(r => r.json());
}

function del(path) {
    return fetch(API_URL + path, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + (localStorage.getItem("token") || "")
        }
    }).then(r => r.json());
}