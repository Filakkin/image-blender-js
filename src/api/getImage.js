const getImage = (req, res) => {
    res.json(
        {
            text: `Started download of image with id ${req.params.id}`
        }
    );
};

export { getImage };