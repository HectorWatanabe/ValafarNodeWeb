export const renderPage = (res, page, body, template = 'layouts/template') => {
    return res.render(page, body, (err, html) => {
        if (err) throw err;
        res.render(template, { body: html });
    });
};