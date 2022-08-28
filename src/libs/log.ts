import fs from 'fs';

export default class Log {
    public _logfile: string;
    public _log: string;
    constructor (_logfile: string, _log: any) {
        this._logfile = _logfile;
        this._log = _log;

        this.CreateLog();
    }

    public CreateFileLog(namefile: string) {
        fs.appendFileSync(__dirname + '/../logs', namefile);
    }

    private CreateLog() {
        const logfile = `${this._logfile}.log`;
        if (!fs.existsSync(__dirname + '/../logs/'+logfile))
            return this.ErrorLog("file not found", 32);
        
        let formatFile = () => {
            let message = `
            ==========================================================
            ==========================================================
            ===> MySQL Kazutora new log
            ==> New Log: ${this._log}
            ==========================================================
            ==========================================================
            `
            try {
                fs.writeFileSync(__dirname + '/../logs/'+logfile, message, 'utf8');
            } catch (e) {console.error("Ocurrio un error.");};

        }
        formatFile();
        console.log("==> INFO: New Log file: "+this._logfile);
    }

    private ErrorLog(str: string, code: number) {
        console.error("==> ERROR Log Auto Detect: "+str, code);
    }
}