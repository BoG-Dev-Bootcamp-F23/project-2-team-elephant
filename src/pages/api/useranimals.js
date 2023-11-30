import getUserAnimals from '../../../server/mongodb/actions/getUserAnimals';

export default async function handler (req, res) {
    if (req.method == "GET") {
        try {
            const result = await getUserAnimals(req.query)
            return res.status(200).send(result)
        } catch (e) {
            return res.status(500).send("Failed")
        }
        
    }
  }