export default function handler(req, res) {
  res.status(200).json({ data: [
    {name: 'baju'},
    {name: 'celana'}
  ] })
}
