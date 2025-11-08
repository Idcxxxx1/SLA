export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { username, password } = req.body;
  if (username === 'admin' && password === 'test123') {
    res.setHeader('Set-Cookie', `auth_user=${username}; Path=/; HttpOnly; Max-Age=86400; SameSite=Lax`);
    return res.status(200).json({ success: true });
  }

  res.status(401).json({ success: false });
}
