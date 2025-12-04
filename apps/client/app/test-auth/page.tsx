import { auth } from "@clerk/nextjs/server";

export default async function TestAuth() {
  const { getToken } = await auth();
  const token = await getToken();

  async function testAuth() {
    const res = await fetch("http://localhost:8001/test-auth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    console.log("response", res);

    console.log("data", data);
  }

  testAuth();

  return (
    <div>
      <button>Testing auth .........</button>
    </div>
  );
}
