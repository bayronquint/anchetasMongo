const {Router} = require('express')
const router = Router()
const { getAnchetas, postAnchetas, deleteAnchetas, putAnchetas, patchAnchetas } = require('../controller/anchetas')

router.get('/',getAnchetas)
router.post('/', postAnchetas )
router.delete('/', deleteAnchetas )
router.put('/', putAnchetas )
router.patch('/', patchAnchetas )




module.exports = router