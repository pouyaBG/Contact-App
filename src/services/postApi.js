import http from "./http";

export default function postContact(info) {
  return http.post('contacts', info)
}