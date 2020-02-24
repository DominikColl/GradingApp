exports.landing = (req, res) => {
    res.render('landing')
}
exports.createProduct = async (req, res) => {
    console.log(req.body)
    // const { dispensary, strain, consistency, type, description, rating, thcpercent } = req.body
    // await Products.create({ dispensary, strain, consistency, type, description, rating, thcpercent })
    // const products = await Products.findAll();
    // res.render('overview', { products })
}