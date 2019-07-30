export function fetchPoems() {
  return fetch("/api/poems")
    .then(res => res.json())
    .then(poems => poems.reverse());
}

export function searchPoems(action) {
  return fetch(`/api/poems/search?q=${action.payload}`)
    .then(response => response.json())
    .then(poems => poems.reverse());
}

export function searchPoemsTwitter(action) {
  return fetch(`/api/twitter/search?q=${action.payload}`)
    .then(response => response.json())
    .then(poems => poems.reverse());
}

export function postPoem(action) {
  return fetch("/api/poems", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(action.payload)
  }).then(response => response.json());
}

export function deletePoem(action) {
  return fetch("/api/poems/" + action.payload.id, {
    method: "DELETE",
    body: JSON.stringify("")
  });
}

export function editPoem(action) {
  return fetch("/api/poems/" + action.payload.id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },

    body: JSON.stringify(action.payload)
  });
}
