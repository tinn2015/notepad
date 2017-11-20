## 查找正在运行的 node 进程
### grep 搜索
- ps -e | grep node
## 查看所有进程里CMD是node 的进程信息
### -aux 显示所有状态
- ps -aux | grep node
## 关闭进程
- kill -9 PID
