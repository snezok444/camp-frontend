function requireAuth() {
    const token = localStorage.getItem("token");
    const rawUser = localStorage.getItem("user");
    const role = localStorage.getItem("role");
    const name = localStorage.getItem("name");

    if (!token && !rawUser) {
        location.href = "index.html";
        return;
    }

    let user = null;
    try {
        user = rawUser ? JSON.parse(rawUser) : { name, role };
    } catch {
        user = { name, role };
    }

    updateMenuVisibility(user);
}

function updateMenuVisibility(user) {
    const adminLink = document.getElementById("adminLink");
    const adminLink2 = document.getElementById("adminLink2");

    const isAdmin = user && user.role === "admin";
    if (adminLink) adminLink.style.display = isAdmin ? "block" : "none";
    if (adminLink2) adminLink2.style.display = isAdmin ? "block" : "none";
}

function logout() {
    localStorage.clear();
    location.href = "index.html";
}