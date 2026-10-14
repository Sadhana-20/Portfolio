async function logUserNames() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status}`);
    }

    const users = await response.json();
    users.map((user) => user.name).forEach((name) => console.log(name));
}
logUserNames().catch((error) => console.error(error));