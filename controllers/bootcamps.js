//@desc | get all bootcamps
//@route | get /apu/v1/bootcamps
//@access | public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, test: 'show all data' })
}

//@desc | get one bootcamp
//@route | get /apu/v1/bootcamps/:id
//@access | public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ succes: true, data: `get ${req.params.id}` })
}

//@desc | create bootcamp
//@route | post /apu/v1/bootcamps/
//@access | private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, data: 'new bootcamp' })
}

//@desc | update bootcamp
//@route | put /apu/v1/bootcamps/:id
//@access | private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, id: `${req.params.id}` })
}

//@desc | delete bootcamp
//@route | put /apu/v1/bootcamps/:id
//@access | private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, data: `deleted ${req.params.id}` })
}
