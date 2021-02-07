import Cookies from "js-cookie";

export const BASE_URL = process.env.REACT_APP_SERVER_URL;

class Auth {
  getCipher(): string | null {
    return Cookies.get("avc-cipher") || null;
  }

  setCipher(token: string): void {
    Cookies.set("avc-cipher", token);
  }

  clearCipher(): void {
    Cookies.remove("avc-cipher");
  }
}

export default new Auth();
