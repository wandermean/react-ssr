npm install npm-run-all -g
npm install nodemon -g

# 1.服务器接收到请求，这个时候store是空的
# 2.服务器端不会执行componentDidMount，所以列表内容获取不到
# 3.客服端代码运行，这个时候store依然是空的
# 4.客户端执行componentDidMount，列表数据被获取
# 5.sotre中的列表数据被更新
# 6.客户端渲染出store中list数据对应的列表内容

# 1.刚进入页面，处于非登陆状态
# 2.用户点击登陆按钮，进行登陆操作
## (1) 浏览器发请求给NodeJS服务器
## (2) 转发给api服务器，进行登陆
## (3) api服务器生成cookie
## (4) 浏览器上存在了cookie，登陆成功

# 3.当用户重新刷新页面的时候
## (1) 浏览器去请求html，懈怠了cookie
## (2) NodeJS服务器进行服务端渲染
## (3) 进行服务端渲染，首先要去api服务器去数据，NodeJS请求没有携带cookie

