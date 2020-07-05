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

芒果库使用基本语句
查询
db.users.find()

2.使用and
db.users.find({'username':'candy'}, {'_id': 0,'__v': 0})
补充说明： 第一个{} 放where条件 第二个{} 指定那些列显示和不显示 （0表示不显示 1表示显示)

3.使用or
db.users.find({ '$or' : [{'name' : 'candy'}, {'age' : 18}] }, {'_id': 0,'__v': 0})

4.<, <=, >, >= ($lt, $lte, $gt, $gte )
select * from users where age >= 20 and age <= 30;
db.users.find({'age' : {'$gte' : 20, '$lte' : 30}});

5.使用in, not in ($in, $nin)
select * from users where age in (10, 22, 26);
db.users.find({'age' : {'$in' : [10, 22, 26]}});

7.like (mongoDB 支持正则表达式)
select * from users where name like "%hurry%";
db.users.find({name:/hurry/});
select * from users where name like "hurry%";
db.users.find({name:/^hurry/});

8.使用distinct
select distinct (name) from users;
db.users.distinct('name');

9.使用count
select count(*) from users;
db.users.count();