export class APIClient {
  baseURL = "https://dummy.cat";

  private async get<T>(path: string, params: Record<string, string>) {
    const query = new URLSearchParams(params);
    const response = await fetch(`${this.baseURL}${path}?${query.toString()}`, {
      method: "GET",
    });
    const data = (await response.json()) as T;
    return data;
  }

  private async post<T>(path: string, params: Object): Promise<T> {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    const data = await response.json();

    return data;
  }

  postSignIn(params: { username: string; password: string }) {
    return this.post<{ uid: string }>("/auth/signIn", params);
  }
}

// TODO
type APIClientMethods = any;

const mockHandlers = {
  async postSignIn() {
    return { uid: "00000000" };
  },
};

export const createAPIClient = ({ mocked }: { mocked: boolean }) => {
  const api = new APIClient();

  if (mocked) {
    Object.entries(mockHandlers).forEach(([key, value]) => {
      // @ts-ignore
      api[key] = value;
    });
  }

  return api;
};
