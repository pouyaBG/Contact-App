// get contacts

import http from "./http";

export function getContacts() {
  return http.get("/contacts")
}