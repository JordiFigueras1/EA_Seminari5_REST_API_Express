import express from 'express'
import * as userServices from '../services/userServices'


const router = express.Router()

router.get('/', async(_req, res) => {
    const data = await userServices.getEntries.getAll()
    return res.json(data);
})

router.get('/:id', async(req, res) => {
    const data = await userServices.getEntries.findById(req.params.id)
    return res.json(data);
})

router.post('/', async(req, res) => {
    const data = await userServices.getEntries.create(req.body)
    return res.json(data);
})

router.put('/:id', async(req, res) => {
    const data = await userServices.getEntries.update(req.params.id,req.body)
    return res.json(data);
})

router.delete('/:id', async(req, res) => {
    const data = await userServices.getEntries.delete(req.params.id)
    return res.json(data);
})

router.post('/linkExperience/:userId/:experienceId', async(req, res) => {
    try {
        const data = await userServices.getEntries.linkExperience(req.params.userId, req.params.experienceId);
        return res.status(201).json({ message: 'Experience linked successfully', data });
    } catch (error) {
        return res.status(500).json({ message: 'Error linking experience', error });
    }
})

router.delete('/unlinkExperience/:userId/:experienceId', async(req, res) => {
    try {
        const data = await userServices.getEntries.unlinkExperience(req.params.userId, req.params.experienceId);
        return res.status(200).json({ message: 'Experience unlinked successfully', data });
    } catch (error) {
        return res.status(500).json({ message: 'Error unlinking experience', error });
    }
})




export default router