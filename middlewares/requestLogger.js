/**
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {function} next 
 */

const requestLogger = (req, res, next) => {
    const method = req.method
    const url = req.url
    console.log(`Request Method : ${method} \nURL : ${url}`);
    next()
}
export default requestLogger;