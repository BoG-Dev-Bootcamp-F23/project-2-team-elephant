import verifyUser from "../../../../server/mongodb/actions/verifyUser";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const user = await verifyUser(req.body);
            return res.status(200).json({id: user[0]["_id"], admin: user[0]["admin"], fullName: user[0]["fullName"]});
        } catch (e) {
            return res.status(500).send("Invalid data.");
        }
    }
    return res.status(400).send("Cannot make a request of this type.");
}