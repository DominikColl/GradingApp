const { Student } = require('../models')
// renders landing page
exports.landing = async (req, res) => {
    const students = await Student.findAll();
    res.render('landing', { students })
}
// creates student
exports.createProduct = async (req, res) => {
    console.log(req.body)
    let { name, percentgrade } = req.body;
    // console.log(name.length)
    // validation
    if (name.length > 0 && percentgrade.length > 0) {
        // console.log('is tjis nfwenfo')
        percentgrade = parseFloat(percentgrade)
        // checking its a number
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
// render update form
exports.renderUpdateForm = async (req, res) => {
    const { id } = req.params;
    const pro = await Student.findByPk(id);
    res.render('updateform', { id })
}
// render all students
exports.findAllRenderAll = async (req, res) => {
    const students = await Student.findAll();
    console.log('Products below')
    console.log(students)
    res.render('landing', { students })
}
// renders error form
exports.error = (req, res) => {
    res.render('errorform')
}
exports.updateError = (req, res) => {
    res.render('errorform')
}
// updates existing students
exports.updateStudent = async (req, res) => {
    let { name, percentgrade } = req.body;
    // validation
    if (name.length > 0 && percentgrade.length > 0) {
        percentgrade = parseFloat(percentgrade)
        // console.log(typeof percentgrade)
        // checking its a number
        if (typeof percentgrade === 'number') {
            let lettergrade = letterGrade(percentgrade);
            const { id } = req.params;
            console.log(name + percentgrade + lettergrade)
            console.log(id)
            // needed where param
            // submits to db
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
// deletes student
exports.deleteStudent = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    await Student.destroy({ where: { id: id } })
    res.redirect('/')
}
// gets letter grade based of percent
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