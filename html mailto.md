## mainto

* to	 收信人
* subject	 主题
* cc	 抄送
* bcc	 暗送
* body	 内容

```
    <a href="mailto:sample@163.com?subject=test&cc=sample@hotmail.com&body=use mailto sample">send mail</a>
```
```
<form name='sendmail' action='mailto:sample@163.com'>
    <input name='cc' type='text' value='sample@hotmail.com'>
    <input name='subject' type='text' value='test'>
    <input name='body' type='text' value='use mailto sample'>
</form>
```
