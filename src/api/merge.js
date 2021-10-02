const merge = (req, res) => {
    res.json(req.query);
}

export { merge };