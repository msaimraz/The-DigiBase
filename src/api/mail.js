export default (req, res) => {
    const body = JSON.parse(req.body);
    console.log(body);
    res.status(200).json({ status: 'ok' });
}