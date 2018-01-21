import * as express from 'express'
import * as path from "path"

class App {
    public express;

    constructor () {
        this.express = express();
        this.express.set("views", path.join(__dirname, "../views"));
        this.express.set("view engine", "ejs");
        this.mountRoutes()
    }

    private mountRoutes (): void {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.render('index');
        });
        this.express.use('/', router)
    }
}

export default new App().express