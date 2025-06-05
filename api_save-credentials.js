export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    console.log(`Username: ${username}, Password: ${password}`);
    res.status(200).json({ message: 'Credentials saved' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}