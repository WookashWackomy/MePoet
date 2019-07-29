export function fetchPoems() {
  return fetch("/api/poems")
    .then(res => res.json())
    .then(poems => poems.reverse());
}

export function searchPoems(action) {
  return fetch(`/search?q=${action.payload}`)
    .then(response => response.json())
    .then(poems => poems.reverse());
}
