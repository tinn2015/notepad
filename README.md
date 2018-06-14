# JavaScript

[最新文章] (http://gshll.com/blog)

[vue源码] (https://www.kancloud.cn/zmwtp/vue2)

```
let imgType = ".png.jpeg.jpg.gif.bmp";
let apkType = ".apk";
let audioType = ".mp3.wav.ape.aif.au.ram.wma.mmf.amr.aac.flac.cda.ogg";
let excelType = ".xls.xlsx";
let ipaType = ".ipa";
let pdfType = ".pdf";
let pptType = ".ppt.pps.pptx";
let txtType = ".txt";
let videoType = ".avi.rmvb.rm.asf.divx.mpg.mpeg.mpe.wmv.mp4.mkv.vob";
let wordType = ".doc.docx";
let zipType = ".zip.rar.tar.cab.arj.lzh.ace.7z.tar.gzip.uue.bz2.jar.iso";
```
```
scroll ($event) {
      let box = this.$refs['scroll']
      let _scroll = this.$refs['scroll'].scrollTop
      let _len = this.$refs['scroll'].children.length
      if (_scroll <= 0) {
        let realLen = null
          // _len > this.len ? realLen = _len : realLen = this.len
        this.originData.unshift(...this.addData)
        this.$nextTick(() => {
          let Len_ = this.$refs['scroll'].children.length
          let realLen = Len_ - _len + 1
          let _top = box.children[realLen].offsetTop - box.children[realLen].offsetHeight
          console.log(box.children[realLen].offsetTop, realLen,  '_top')
          box.scrollTop = _top
        })
      }
    }
```
