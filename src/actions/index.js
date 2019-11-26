import { CALL_CONSOLE } from "../constants";

export function callConsole(payload) {
  return {
    type: CALL_CONSOLE,
    payload: payload
  };
}
