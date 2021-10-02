const apiList = (req, res) => {
    res.json(
        [
            {
                id: 'random-id',
                size: 123412,
                uploadedAt: 1576767673
            },
            {
                id: 'another-random-id',
                size: 253265,
                uploadedAt: 15248125812
            }
        ]
    )
};

export { apiList };