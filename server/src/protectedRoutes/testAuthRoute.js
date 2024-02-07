// don't want this route to work unless logged in and provided verification



export const testAuthRoute = {
    path: "/api/test-auth",
    method: "get",
    handler: async (req,res) => {
        const {uid, email} = req.body;
        return res.json({ uid, email });
    },
};