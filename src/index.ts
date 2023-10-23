import getConnection from "./database";

const connection = getConnection();
const app = createApp();
app.listen(process.env.PORT || 3002);

export default app;
