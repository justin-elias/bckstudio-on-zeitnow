// route and params to call: /api/preview?token=7634b554961c40378a8769fe67194f4c&page=

export default async (req, res) => {
    // token can be checked into VCS, only gives read access to draft version of cms
    if (req.query.token) {
        if (req.query.token === process.env.USER_API_TOKEN) {
            // Enable Preview Mode by setting the cookies
            res.setPreviewData({token: process.env.GRAPH_CMS_PREVIEW_TOKEN_SERVER}, {});
        } else {
            return res.status(401).json({message: "Invalid token"})
        }
    }
    if (req.query.clear){
        res.clearPreviewData();
    }

    const location = "\/" + req.query.page;
    // Redirect to page
    res.writeHead(307, { Location: location});
    res.end()
}
