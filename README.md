# Jemplate Framework

## 参考资料

[rvm][rvm]
[ruby][ruby]
[perl][perl]
[nginx][nginx]
[openresty][openresty](openresty集成了一个nginx)
[Jemplate][jemplate]


## 环境搭建

### 安装rvm和ruby环境

首先安装rvm环境，安装ruby环境
```git
$ \curl -sSL https://get.rvm.io | bash -s stable
```

### 安装openresty[具体参看openresty安装文档][openresty-installation]

基本步骤:

1.下载[openresty][openresty-download]

2.安装依赖环境

```git
$ brew install pcre openssl
```
3.解压openresty包，编译安装
```git
$ tar -xzvf openresty-VERSION.tar.gz
$ cd openresty-VERSION/
$ ./configure
$ make
$ sudo make install
```
4.在执行`./configure`是可能会报openssl路径不正确的错，这是由于[Homebrew][Homebrew]将openssl默认安装在`/usr/local/opt/openssl`下，因此可使用如下方式执行`./configure`：
```git
$ ./configure \
   --with-cc-opt="-I/usr/local/opt/openssl/include/ -I/usr/local/opt/pcre/include/" \
   --with-ld-opt="-L/usr/local/opt/openssl/lib/ -L/usr/local/opt/pcre/lib/" \
   -j8
```

### 启动openresty的nginx环境[可参看][openresty-nginx]

[openresty文档][openresty-nginx]中提供了基本配置，`nginx.conf`文件的基本写法和nginx的启动命令

本例中同样提供了[`nginx.conf`][nginx.conf]文件，在目录`conf`下；同时也提供了ruby的[`start.rb`][start.rb]脚本，用来启动openresty集成的nginx

```git
## 启动命令
$ ./start.rb start

## 关闭命令
$ ./start.rb stop

## 重启命令
$ ./start.rb restart
```

> 注：nginx的启动可能会报错，需要将openresty的nginx添加到PATH环境变量中
> ```git
> PATH="$PATH:/usr/local/openresty/nginx/sbin"
> export PATH
> ```

### 页面编译

编译使用[Jemplate][jemplate]模板。Jemplate提供了命令行工具`jemplate`实现对模板的编译，语法如下：

#### jemplate命令行工具的安装，安装方法在Jemplate源码中的jemplate文件的注释部分，以下摘自jemplate文件的注释部分：
```git
    1 #!/usr/bin/env perl
    2
    3 #BOOTSTRAP-BEGIN
    4 # This is the standalone Jemplate compiler.
    5 #
    6 # All you need is this program and the program called `perl`. You don't ne      ed
    7 # to install any Perl modules.
    8 #
    9 # If you downloaded this program from the internet, don't forget to put it       in
   10 # your path and make sure it is executable. Like this:
   11 #
   12 #     mv jemplate /usr/local/bin/
   13 #     chmod +x /usr/local/bin/jemplate
   14 #
   15 # Try this command to make sure it works:
   16 #
   17 #     jemplate --help
```
因此，使用
```git
$ cp jemplate /usr/local/bin/
$ chmod +x /usr/local/bin/jemplate
```
命令安装命令行工具

#### 编译自己的代码

```git
$ jemplate --compile template/* > js/jemplates.js
```
结合到本例子，模板存在于`public/component/`目录下，编译好的js文件存放于`public/js/`目录下，因此命令如下：
```git
$ jemplate --compile public/component/* > public/js/component.js
```
此时，在js目录下会生成component.js文件

### 启动Nginx并访问本例

使用
```git
## 启动命令
$ ./start.rb start
```
启动nginx服务器（nginx.conf中的端口为80880）。使用浏览器访问http://localhost:8080查看页面效果


[rvm]: https://get.rvm.io
[ruby]: http://ruby-china.org
[perl]: http://www.perlchina.org
[nginx]: http://www.nginx.cn
[openresty]: https://openresty.org/cn
[openresty-installation]: http://openresty.org/cn/installation.html
[openresty-download]: https://openresty.org/download/openresty-1.11.2.1.tar.gz
[openresty-nginx]: http://openresty.org/cn/getting-started.html
[Homebrew]: http://brew.sh
[nginx.conf]: conf/nginx.conf
[start.rb]: start.rb
[jemplate]: http://www.jemplate.net