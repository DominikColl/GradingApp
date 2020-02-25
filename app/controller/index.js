const { Student } = require('../models')
exports.landing = async (req, res) => {
    const students = await Student.findAll();
    res.render('landing', { students })
}
exports.createProduct = async (req, res) => {
    console.log(req.body)
    let { name, percentgrade } = req.body;
    // console.log(name.length)
    if (name.length > 0 && percentgrade.length > 0) {
        // console.log('is tjis nfwenfo')
        percentgrade = parseFloat(percentgrade)
        if (typeof percentgrade == 'number') {
            let lettergrade = letterGrade(percentgrade)
            // function for letter grade
            await Student.create({ name, percentgrade, lettergrade })
            const students = await Student.findAll();
            res.render('landing', { students })
        } else {
            res.redirect('/error')
        }
    } else {
        res.redirect('/error')
    }
    // const products = await Products.findAll();
    // res.render('overview', { products })
}
exports.renderUpdateForm = async (req, res) => {
    const { id } = req.params;
    const pro = await Student.findByPk(id);
    res.render('updateform', { id })
}
exports.findAllRenderAll = async (req, res) => {
    const students = await Student.findAll();
    console.log('Products below')
    console.log(students)
    res.render('landing', { students })
}
exports.error = (req, res) => {
    res.render('errorform')
}
exports.updateError = (req, res) => {
    res.render('errorform')
}
exports.updateStudent = async (req, res) => {
    let { name, percentgrade } = req.body;
    if (name.length > 0 && percentgrade.length > 0) {
        percentgrade = parseFloat(percentgrade)
        // console.log(typeof percentgrade)
        if (typeof percentgrade === 'number') {
            let lettergrade = letterGrade(percentgrade);
            const { id } = req.params;
            console.log(name + percentgrade + lettergrade)
            console.log(id)
            // needed where param
            await Student.update({ name, percentgrade, lettergrade }, { where: { id: id } })
            res.redirect('/')
        } else {
            const { id } = req.params;
            res.redirect(`/error/${id}`)
        }
    } else {
        const { id } = req.params;
        res.redirect(`/error/${id}`)
    }
    // res.json(updatxedEntry)
}
exports.deleteStudent = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    await Student.destroy({ where: { id: id } })
    res.redirect('/')
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