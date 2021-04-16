## 简介
这是一个用来无边打印带标题的Bing的每日壁纸小工具。  
为什么要做这个？因为我发现Bing的壁纸比较精致，可以作为小孩认识世界的一个媒介，一开始想做个《世界之窗》的应用放iPad或展示在电视机上，但我想如果能让小孩拿在手上端详一会儿，可能体验更好，刚好家里有个彩色打印机，然后就写了个程序，买了白卡纸打印试验了下，效果还可以，有兴趣的朋友也可以拿去试试。   

## 使用前提
- 彩色打印机（设置为电脑默认打印机）
- A4白卡纸
- 电脑需要联网
- 电脑上安装git、node.js程序（平台不限）
    
## 用法
下载程序  
    
```
git clone https://github.com/thiled/world-window.git
```
进入world-window目录  
安装依赖
```
npm i
```
启动服务
```
npm run serve
```
打印机边距矫正  
默认程序是根据Epson L4166打印机设置的，各品牌打印机默认边距不一致，按需修改以下文件自行调整
```
src/index.html  
```
打印测试
```
node print.js
```



