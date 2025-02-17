import getAnimals from '../../../../server/mongodb/actions/getAnimals';

export default async function handler(req, res) {
    if (req.method == "GET") {
        try {
            const result = await getAnimals(req)
            return res.status(200).send(result)
        } catch (e) {
            return res.status(500).send("Failed")
        }
        
    }
}