generate:
express -e --git express-mongodb
npm i

npm i mongoose -S

通过 npx （包含在 Node.js 8.2.0 及更高版本中）命令来运行 Express 应用程序生成器。
npx express-generator --view=pug
--view <engine> 添加对视图引擎（view） <engine> 的支持 (ejs|hbs|hjs|jade|pug|twig|vash) （默认是 jade 模板引擎）
npm i

set DEBUG=express-generator-test:* & npm start

npm start本质是:
node ./bin/www

此处注意不是node app.js


bin/www -> app.js -> routes -> models -> schemas
            ^          |
            |          |
           views <------