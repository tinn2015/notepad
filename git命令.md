1. git fetch --prune                   清理远程没有的本地分支

2. git branch -d  branchName    删除本地分支

3. git branch |grep 'branchName' |xargs git branch -d    批量删除本地匹配到的branchName的git分支

4. git checkout -- file  撤销工作区的修改

5. git config core.ignorecase false   让git 对文件大小写敏感

6. git 错误 " bad index file sha1 signature fatal: index file corrupt"

　 解决方案: 删除 .git/index , 执行git reset 命令

7. git reset --hard HEAD  撤销还没commit的merge，或者放弃工作区的改动

    git reset --hard  commit-id 回滚到commit-id

8. git reset HEAD <file> 将文件从暂存区撤销

9. git log 查看提交记录

10. git reflog 查看所有操作记录

11. git push origin :branch-name 删除远程分支

12. git push origin -u branch-name 将本地分支推送到远端并建立连接

13. git remote -v  查看远程仓库地址

14. 设置用户名和邮箱： git config --global user.name 'name' ,  git config --global user.email 'xxx@xxx.com'

15.  在本机生成RSA, 公钥: ssh-keygen -t rsa -C "you@email.com'

16.  更改push 模式， git config -- global push.default simple 或者 git config --global push.default matching

17.  查看提交日志： git log --oneline --graph -author='authorName'

18.  查看某一个文件的提交日志： git log -p filename， git log -p 查看所有提交的详细文件修改

19 . 查看某一个文件的某几行提交日志： git log -L 1,10:filename

20.  查看工作区某个文件所做的改动与暂存区比较： git diff filename

21.  查看暂存区和上次提交之间的区别： git diff -cached filename

22.  删除远程分支： git push origin :remote-branch

23. 比较当前分支与另一个分支的文件差异： git diff branch-name fileName

24. 查看另一个分支上的某一个文件： git show branch-name:fileName

25. 合并另一个分支的某一次提交： git cherry-pick commitId

26. 修改最近的提交说明：git commit --amend -m 'commit description'

27. 显示工作区根目录 git rev-parse --git-dir

28. 相对于工作区根目录的相对目录：git rev-parse --show-prefix

29.显示当前目录后退到工作区的根目录深度：git rev-parse --show-cdup

30. 编辑git配置文件：项目配置git config -e  全局配置 git config -e --global, 系统配置 git config -e --system

31. 获取配置项： git config core.ignorecase, 设置配置项：git config core.ignorecase false

32. 创建版本库： git init 或者 git init dirname (创建工作区，并在此目录下创建版本库)

33. 设置别名： git config --global alias.st status , git conifg --global alias.ci commit 

34. 显示某一个提交所改动的文件： git show --stat commitId

35. 通过配置全局git ignore 文件而忽略文件：git config --global core.excludesfile ~/.gitignore

36. 本地与远程保持同步

- 本地追踪远程创建的分支：git remote update
- 本地追踪远程删除的分支： git remote prune
- 查看远程没有的本地分支： git remote prune origin
    
37. 回滚到某次commit： git reset --mixed commitId

38. 暂存当前更改： git stash

39. 回复暂存的文件： git stash pop
