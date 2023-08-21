const { Brand } = require('./schema')
const { connect } = require('mongoose')
require('dotenv').config()



const createBrand = async (req, res) => {
    const { BrandName, BrandImage } = req.body
    if (!BrandName || !BrandImage) {
        res.json({
            message: "Please Insert Proper Values"
        })
    }

    else {
        try {
            await connect(process.env.MONGODB_URI)
            console.log("DB Connected")

            const checkExisting = await Brand.findOne({ BrandName })

            if (checkExisting) {
                res.status(403).json({
                    message: "Brand Already Exists"
                })
            }

            else {
                await Brand.create({ BrandName, BrandImage })
                const brands = await Brand.find()
                res.status(201).json({
                    message: "Brand Created Successfully",
                    brands: brands
                })
            }
        }

        catch (error) {
            res.json({
                message: error.message
            })
        }
    }
}


const getAllBrands = async (req, res) => {
    try {
        await connect(process.env.MONGODB_URI)
        const brands = await Brand.find()
        res.status(200).json({
            brands
        })
    }

    catch (error) {
        res.json({
            message: error.message
        })
    }

}


module.exports = { createBrand, getAllBrands }