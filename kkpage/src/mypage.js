    // var path = window.location.href
    // var filePath = path.split("/");
    // console.log(filePath);
    // var htmlName = filePath.pop();
    var htmlName = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    console.log(htmlName);
    var num = htmlName.split(".")[0];
    var m_hrefFormer = num.split("_")[0] + "_";
    var m_hrefLater = num.split("_")[1];

    function getParameter(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    // function getPageNo() {
    //     var href = window.location.href;
    //     console.log(href);
    //     var name = new RegExp("^[1-9]d*$()" + "_" + "^[1-9]d*$");
    //     var test = href.match(name);
    //     console.log(test);
    // }
    // getPageNo();
    // 获取文件前缀

    //init
    $(function() {
        // var divInfo = document.getElementById("infodiv");
        // var p = divInfo.getElementById("info");
        var infoText = $('#info').text();
        if (infoText == null) {
            infoText = 1;
        }

        var totalPage = parseInt(infoText);
        var totalRecords = 390;
        var pageNo = getParameter('page');
        // var pageNo = null;
        // var pageNo = getPageNo();
        if (!pageNo) {
            pageNo = 1;
        }
        //生成分页
        //有些参数是可选的，比如lang，若不传有默认值
        if (totalPage > 1) {
            kkpager.generPageHtml({
                pno: pageNo,
                //总页码
                total: totalPage,
                //总数据条数
                totalRecords: totalRecords,
                //链接前部
                hrefFormer: m_hrefFormer,
                //链接尾部
                hrefLatter: '.html',
                getLink: function(n) {
                    return this.hrefFormer + n + this.hrefLatter + "?page=" + n;
                }
            });
        }

    });