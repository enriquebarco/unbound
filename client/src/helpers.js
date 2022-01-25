

export async function fetchFromAPI(endpoint, opts, token) {
    const { method, body } = { method: "POST", body: null, ...opts };

    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/${endpoint}`, {
        method,
        ...(body && { body: JSON.stringify(body) }),
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
    });
    return res.json();
}