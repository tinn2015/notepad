// API
window.indexedDB=window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB;
if(window.indexedDB){
  alert("您的浏览器支持IndexedDB数据库。");
} else{
 alert("您的浏览器不支持IndexedDB数据库。");
}

// 打开或创建某版本数据库
let request = window.indexedDB.open('testDB','2.0')

//指定操作成功的处理函数(可以获得对象存储空间信息)
request.onsuccess=function(event){
    alert('打开成功！');
    mydb=request.result;
    //var len = mydb.objectStoreNames.length;                 //对象存储空间名的个数
    //var  name=mydb.objectStoreNames[i];                     //对象存储空间名
    /*******方法调用********************/
    get(mydb);
};

//指定操作失败的处理函数
request.onerror=function(event){
    alert("打开失败,错误号：" + event.target.errorCode);
};

//通过request.onupgradeneeded可以执行改变数据库结构的操作函数（包括创建对象存储空间)
//onupgradeneeded事件在下列情况下被触发：数据库第一次被打开时；打开数据库时指定的版本号高于当前被持久化的数据库版本号。(可通过修改版本号触发该事件)
request.onupgradeneeded = function(event) {
    mydb=request.result;//获得数据库实例对象
    if(!mydb.objectStoreNames.contains("students")) {                   //判断对象存储空间名称是否已经存在
        var objectStore = mydb.createObjectStore("students", {keyPath: "id"});//创建students对象存储空间;指定keyPath选项为id（即主键为id）
        //对象存储空间students的列email上创建一个唯一索引email,可以创建多个索引。
        objectStore.createIndex("email",                                //索引名
                                "email",                                //创建索引的列（即keyPath,索引属性字段名）
                                { unique: true });                      //索引选项(索引属性值是否唯一:true or false)
    }
}

//插入数据库
function insert(mydb){
    var data = {
        "id": "110",
        "name": "李明",
        "age": "35",
        "email": "liming5@email.com"
    };
    //使用事务
    var transaction = mydb.transaction('students',                        //事务操作的对象存储空间名
                                    'readwrite');                         //事务模式:'readwrite'可读写模式;READ_ONLY只读模式;VERSION_CHANGE版本升级模式;
    //2.1、当事务中的所有操作请求都被处理完成时触发
    transaction.oncomplete = function(event) {};
    //2.2、当事务中出现错误时触发，默认的处理方式为回滚事务；
    transaction.onerror = function(event) {};
    //2.3、当事务被终止时触发
    transaction.onabort = function(event){};
    //2.4、从事务中获得相关的对象存储空间对象
    var objStore = transaction.objectStore('students');
    //向students存储空间加入一个student对象，获得request对象用于处理用户对数据库的操作请求(同样拥有onerror，onupgradeneeded，onsuccess事件)
    var request = objStore.add(data);
    request.onsuccess = function(e) {
        alert("成功插入数据，id=" + e.target.result);
    };
}

//查询数据库
function get(mydb){
      var transaction = mydb.transaction('students','readwrite');
      transaction.oncomplete = function(event) {};
      transaction.onerror = function(event) {};
      transaction.onabort = function(event){};
      var objStore = transaction.objectStore('students');
      var request = objStore.get("110");                 //按照id查询
      request.onsuccess=function(e){
          alert(e.target.result.name +  e.target.result.age + e.target.result.email);
      }
  }
  
  //更新数据库
  function update(mydb){
     var transaction = mydb.transaction('students','readwrite');
     transaction.oncomplete = function(event) {};
     transaction.onerror = function(event) {};
     transaction.onabort = function(event){};
     var objStore = transaction.objectStore('students');
     var request = objStore.get("110");
     request.onsuccess=function(e){
         var student=e.target.result;
         student.name='wwww1';
         objStore.put(student);
     }
 }
 
 //删除
 function remove(mydb){
    var transaction = mydb.transaction('students','readwrite');
    transaction.oncomplete = function(event) {};
    transaction.onerror = function(event) {};
    transaction.onabort = function(event){};
    var objStore = transaction.objectStore('students');
    var request = objStore.delete("110");
    request.onsuccess = function(e) {
        alert("成功删除数据");
    };
}

//索引查询
function byIndexGet(mydb){
    var transaction = mydb.transaction('students','readwrite');
    transaction.oncomplete = function(event) {};
    transaction.onerror = function(event) {};
    transaction.onabort = function(event){};
    var objStore = transaction.objectStore('students');
    var index = objStore.index('email');                //索引名
    var request=index.get('liming1@email.com');         //通过索引值获取数据
    request.onsuccess=function(e){
        var student=e.target.result;
        alert(student.name+"：索引查询");
    }
}

// 游标遍历所有
function byCursorGet(mydb){
    var transaction = mydb.transaction('students','readwrite');
    transaction.oncomplete = function(event) {};
    transaction.onerror = function(event) {};
    transaction.onabort = function(event){};
    var objStore = transaction.objectStore('students');
    var request=objStore.openCursor();//打开游标
    request.onsuccess = function(e){
        var cursor = e.target.result;
        if(cursor){
            alert(cursor.value.name);
            cursor.continue();
        }else {
            alert('遍历完成');
        }
    }
}

// 通过范围和排序条件，游标遍历符合条件的数据
/**
 * 范围：
 *（1）匹配等于指定键值的记录：var range = IDBKeyRange.only(指定键值)
 *（2）匹配小于指定键值的记录：var range = IDBKeyRange.lowerBound(指定键值, 是否不包括指定键值)
 *（3）匹配大于指定键值的记录：var range = IDBKeyRange.upperBound(指定键值, 是否不包括指定键值)
 *（4）匹配指定范围内的记录：var range = IDBKeyRange.bound(下限键值，上限键值，是否不包括下限键值，是否不包括上限键值
 */
  例如：
// 只取得当前索引的值为110的数据  
IDBKeyRange.only("110");  
// 只取得当前索引的值大于110，并且不包括110的数据  
IDBKeyRange.lowerBound("110", true);  
// 只取得当前索引的值小于110，并且包括110的数据  
IDBKeyRange.upperBound("110", false);  
// 取得当前索引的值介于110和120之间，并且包括110，但不包括120的数据  
IDBKeyRange.bound("110", "120", false, true);  

/**
 * 顺序参数：
 * IDBCursor.NEXT，顺序循环；
 * IDBCursor.NEXT_NO_DUPLICATE，顺序循环且键值不重复；
 * IDBCursor.PREV，倒序循环；
 * IDBCursor.PREV _NO_DUPLICATE，倒序循环且键值不重复。
 */
 function byCursorGetForRangeAndSort(mydb){
    var transaction = mydb.transaction('students','readwrite');
    transaction.oncomplete = function(event) {};
    transaction.onerror = function(event) {};
    transaction.onabort = function(event){};
    var objStore = transaction.objectStore('students');
    var range = IDBKeyRange.bound("110", "113", false, true);   //范围
    var request=objStore.openCursor(range,             //范围（可以为null或省略不写）
                                    IDBCursor.NEXT);    //游标顺序循环(可以省略不写)
    request.onsuccess = function(e){
        var cursor1 = e.target.result;
        if(cursor1){
            alert(cursor1.value.name);
            cursor1.continue();
        }else {
            alert('遍历完成');
        }
    }
}
