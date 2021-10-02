const deleteImage = (req, res) => {
    res.send(`deleted ${req.params.id}`);
};

export { deleteImage };