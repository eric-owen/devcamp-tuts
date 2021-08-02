const Bootcamp = require('../models/Bootcamp')

//@desc | get all bootcamps
//@route | get /apu/v1/bootcamps
//@access | public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find()
        res.status(200).json({
            success: true,
            count: bootcamps.length,
            data: bootcamps,
        })
    } catch (err) {
        res.status(400).json({
            success: false,
        })
    }
}

//@desc | get one bootcamp
//@route | get /apu/v1/bootcamps/:id
//@access | public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)
        if (!bootcamp) {
            return res.status(400).json({ success: false })
        }
        res.status(200).json({
            success: true,
            data: bootcamp,
        })
    } catch (err) {
        res.status(400).json({
            success: false,
        })
    }
}

//@desc | create bootcamp
//@route | post /apu/v1/bootcamps/
//@access | private
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body)
        res.status(201).json({
            success: true,
            data: bootcamp,
        })
    } catch (err) {
        res.status(400).json({ success: false })
    }
}

//@desc | update bootcamp
//@route | put /apu/v1/bootcamps/:id
//@access | private
exports.updateBootcamp = async (req, res, next) => {
    try {
        const updatedBootcamp = await Bootcamp.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        )

        if (!updatedBootcamp) {
            return res.status(400).json({ success: false })
        }
        res.status(200).json({
            success: true,
            data: updatedBootcamp,
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({ success: false })
    }
}

//@desc | delete bootcamp
//@route | put /apu/v1/bootcamps/:id
//@access | private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

        if (!bootcamp) {
            return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
    } catch (err) {
        res.status(400).json({ success: false })
    }
}
