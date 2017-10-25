## js 获取每周

`var getWeekNumber = function (src) {
      const date = new Date(src.getTime())
      date.setHours(0, 0, 0, 0)
      // Thursday in current week decides the year.
      console.log(date.getDate(), date.getDay())
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7)
      // January 4 is always in week 1.
      const week1 = new Date(date.getFullYear(), 0, 4)
      console.log(date, week1, 'tinn')
      // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7)
    }`
    
 ` var yugi = function (year) {
      var d = new Date(year, 0, 1)
      while (d.getDay() !== 1) {
        d.setDate(d.getDate() + 1)
      }
      var to = new Date(year + 1, 0, 1)
      var i = 1
      for (var from = d; from.getTime() < to.getTime();) {
        console.log(year + '年第' + i + '周 ' + (from.getMonth() + 1) + '月' + from.getDate() + '日 - ')
        from.setDate(from.getDate() + 6)
        if (from < to) {
          console.log((from.getMonth() + 1) + '月' + from.getDate() + '日<br / >')
          from.setDate(from.getDate() + 1)
        } else {
          to.setDate(to.getDate() - 1)
          console.log((to.getMonth() + 1) + '月' + to.getDate() + '日<br / >')
        }
        i++
      }
    }`
