export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { username, password } = req.body;
  const validUser = process.env.LOGIN_USER;
  const validPass = process.env.LOGIN_PASS;

  if (username === validUser && password === validPass) {
    res.setHeader('Set-Cookie', `auth_user=${username}; Path=/; HttpOnly; SameSite=Lax`);
    return res.status(200).json({ success: true });
  }

  res.status(401).json({ success: false });
}
