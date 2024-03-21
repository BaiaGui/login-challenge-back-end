const validateRequest = (req, res, next) => {
    try{
        console.log("validating request")
        next()
    }
    catch{

    }
};

module.exports = validateRequest;