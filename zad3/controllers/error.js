exports.getNotFoundPage = (req, res) => {
    res.status(404).render('NotFound', {
        pageTitle: 'Not found',
        message: 'Page doesn’t exist',
        link: '/'
    });
};
