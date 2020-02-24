const { Student } = require('../models')
exports.landing = (req, res) => {
    res.render('landing')
}
exports.createProduct = async (req, res) => {
    console.log(req.body)
    let { name, percentgrade } = req.body;
    percentgrade = parseFloat(percentgrade)
    console.log(letterGrade(percentgrade))
    // function for letter grade
    await Student.create({ name, percentgrade })
    res.render('landing')
    // await Products.create({ dispensary, strain, consistency, type, description, rating, thcpercent })
    // const products = await Products.findAll();
    // res.render('overview', { products })
}
letterGrade = (percentGrade) => {
    console.log(percentGrade)
    if (percentGrade <= 100 && percentGrade >= 90) {
        return 'A'
    } else if (percentGrade <= 89 && percentGrade >= 80) {
        return 'B'
    } else if (percentGrade <= 79 && percentGrade >= 70) {
        return 'C'
    } else if (percentGrade <= 69 && percentGrade >= 60) {
        return 'D'
    } else if (percentGrade <= 59 && percentGrade >= 0) {
        return 'F'
    }
}