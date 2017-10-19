var indexdata={
    "id":["dropdownMenu1","dropdownMenu2","dropdownMenu3","dropdownMenu4","dropdownMenu5"],
//     "navs": [
//     {
//         title: "教学中心",
//         href: "all树形二级.html",
//         children: [
//             {
//                 title: "汽车发动机",
//                 href: "汽车发动机树形二级.html",
//                 children: [
//                     {
//                         title: "机械系统",
//                         href: "机械系统二级.html"
//                     },
//                     {
//                         title: "电控系统",
//                         href: "电控系统二级.html"
//                     }
//                 ]
//             },
//             {
//                 title: "汽车底盘",
//                 href: "汽车底盘树形二级.html",
//                 children: [
//                     {
//                         title: "传动",
//                         href: "机械系统二级.html"
//                     },
//                     {
//                         title: "行驶",
//                         href: "电控系统二级.html"
//                     },
//                     {
//                         title: "制动",
//                         href: "机械系统二级.html"
//                     },
//                     {
//                         title: "转向",
//                         href: "电控系统二级.html"
//                     }
//                 ]
//             },
//             {
//                 title: "汽车电气",
//                 href: "",
//                 children: [
//                     {
//                         title: "电源",
//                         href: "机械系统二级.html"
//                     },
//                     {
//                         title: "启动",
//                         href: "电控系统二级.html"
//                     },
//                     {
//                         title: "照明",
//                         href: "机械系统二级.html"
//                     },
//                     {
//                         title: "辅助",
//                         href: "电控系统二级.html"
//                     },
//                     {
//                         title: "仪表",
//                         href: "机械系统二级.html"
//                     },
//                     {
//                         title: "空调",
//                         href: "电控系统二级.html"
//                     }
//                 ]
//             },
//             {
//                 title: "汽车变速器",
//                 href: "",
//                 children: [
//                     {
//                         title: "自动变速器",
//                         href: "机械系统二级.html"
//                     },
//                     {
//                         title: "手动变速器",
//                         href: "电控系统二级.html"
//                     },
//                     {
//                         title: "手自一体变速器",
//                         href: "机械系统二级.html"
//                     },
//                     {
//                         title: "CVT变速器",
//                         href: "电控系统二级.html"
//                     },
//                     {
//                         title: "DSG双离合变速器",
//                         href: "机械系统二级.html"
//                     },
//                     {
//                         title: "E-CVT变速器",
//                         href: "电控系统二级.html"
//                     }
//                 ]
//             },
//             {
//                 title: "新能源汽车",
//                 href: "",
//                 children: [
//                     {
//                         title: "纯电动汽车",
//                         href: "机械系统二级.html"
//                     },
//                     {
//                         title: "混合动力汽车",
//                         href: "电控系统二级.html"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         title:"考试中心",
//         href:"#"
//     },
//     {
//         title:"评价中心",
//         href:"#"
//     },
//     {
//         title:"管理中心",
//         href:"#"
//     }
// ]
    "navs":[
        {
            "first":"教学中心",
            "firsthref":"all树形二级.html",
            "second":["汽车发动机","汽车底盘","汽车电气","汽车变速器","新能源汽车"],
            "secondhref":["汽车发动机树形二级.html","汽车底盘树形二级.html"],
            "third":[
               {"a0": ["机械系统","电控系统"]},
               {"a1": ["传动","行驶","制动","转向"]},
               {"a2": ["电源","启动","照明","辅助","仪表","空调"]},
               {"a3": ["自动变速器","手动变速器","手自一体变速器","CVT变速器","DSG双离合变速器","E-CVT变速器"]},
               {"a4": ["纯电动汽车","混合动力汽车"]}
                    ],
            "thirdhref":[
                {"a0href": ["机械系统二级.html","电控系统二级.html"]}
            ]
        },
        {
            "first":"考试中心",
            "second":["发动机","底盘","电气","变速器","源汽车"],
            "secondhref":["汽车发动机树形二级.html","汽车底盘树形二级.html"],
            "third":[
               {"a0": ["机统","电统"]},
               {"a1": ["传动","行驶","制动","转向"]},
               {"a2": ["电源","启动","照明","辅助","仪表","空调"]},
               {"a3": ["自动器","手动器","手自一体器","CVT器","DSG双离速器","E-CVT变速器"]},
               {"a4": ["纯电动汽车","混合动力汽车"]}
                    ]
        },
        {
            "first":"评价中心",
            "second":["汽车","汽盘","汽气","汽速器","新能车"],
            "secondhref":["汽车发动机树形二级.html","汽车底盘树形二级.html"],
            "third":[
               {"a0": ["机械系统","电控系统"]},
               {"a1": ["传动","行驶","制动","转向"]},
               {"a2": ["电源","启动","照明","辅助","仪表","空调"]},
               {"a3": ["自动变速器","手动变速器","手自一体变速器","CVT变速器","DSG双离合变速器","E-CVT变速器"]},
               {"a4": ["纯电动汽车","混合动力汽车"]}
            ]
        },
        {
            "first":"管理中心",
            "second":["汽车发动机","汽车底盘","汽车电气","汽车变速器","新能源汽车"],
            "secondhref":["汽车发动机树形二级.html","汽车底盘树形二级.html"],
            "third":[
               {"a0": ["机械系统","电控系统"]},
               {"a1": ["传动","行驶","制动","转向"]},
               {"a2": ["电源","启动","照明","辅助","仪表","空调"]},
               {"a3": ["自动变速器","手动变速器","手自一体变速器","CVT变速器","DSG双离合变速器","E-CVT变速器"]},
               {"a4": ["纯电动汽车","混合动力汽车"]}
                    ]
        }
    ]
    
};






var videoData=[
    {
        "num": "intro1",
        "numi":"intro11",
        "images":"imgs/低压蓄电池警示灯亮的检修da.jpg",
        "title":"低压蓄电池警示灯亮的检修",
        "href":"video-html/video-前氧传感器故障检测.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介1",
        "ppt":"ppt0"
    },
    {
        "num": "intro2",
        "numi":"intro12",
        "images":"imgs/前氧传感器故障检修da.jpg",
        "title":"前氧传感器故障检修",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介2",
        "ppt":"ppt1"
    },
    {
        "num": "intro3",
        "numi":"intro13",
        "images":"imgs/更换汽车多媒体系统da.jpg",
        "title":"更换汽车多媒体系统",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介3",
        "ppt":"ppt2"
    },
    {
        "num": "intro4",
        "numi":"intro14",
        "images":"imgs/混合动力发动机故障灯常亮的检修da.jpg",
        "title":"混合动力发动机故障灯常亮的检修",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介4",
        "ppt":"ppt3"
    },
    {
        "num": "intro5",
        "numi":"intro15",
        "images":"imgs/混合动力汽车安全指导手册da.jpg",
        "title":"混合动力汽车安全指导手册",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介5",
        "ppt":"ppt4"
    },
    {
        "num": "intro6",
        "numi":"intro16",
        "images":"imgs/更换雨刮总成da.jpg",
        "title":"更换雨刮总成",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介6",
        "ppt":"ppt5"
    },
    {
        "num": "intro7",
        "numi":"intro17",
        "images":"imgs/前氧传感器故障检修da.jpg",
        "title":"前氧传感器故障检修",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介7",
        "ppt":"ppt6"
    },
    {
        "num": "intro8",
        "numi":"intro18",
        "images":"imgs/低压蓄电池警示灯亮的检修da.jpg",
        "title":"低压蓄电池警示灯亮的检修",
        "href":"video-html/video-前氧传感器故障检测.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介1",
        "ppt":"ppt0"
    },
    {
        "num": "intro9",
        "numi":"intro19",
        "images":"imgs/前氧传感器故障检修da.jpg",
        "title":"前氧传感器故障检修",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介2",
        "ppt":"ppt1"
    },
    {
        "num": "intro10",
        "numi":"intro110",
        "images":"imgs/更换汽车多媒体系统da.jpg",
        "title":"更换汽车多媒体系统",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介3",
        "ppt":"ppt2"
    },
    {
        "num": "intro11",
        "numi":"intro111",
        "images":"imgs/混合动力发动机故障灯常亮的检修da.jpg",
        "title":"混合动力发动机故障灯常亮的检修",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介4",
        "ppt":"ppt3"
    },
    {
        "num": "intro12",
        "numi":"intro12",
        "images":"imgs/混合动力汽车安全指导手册da.jpg",
        "title":"混合动力汽车安全指导手册",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介5",
        "ppt":"ppt4"
    },
    {
        "num": "intro13",
        "numi":"intro113",
        "images":"imgs/更换雨刮总成da.jpg",
        "title":"更换雨刮总成",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介6",
        "ppt":"ppt5"
    },
    {
        "num": "intro14",
        "numi":"intro114",
        "images":"imgs/前氧传感器故障检修da.jpg",
        "title":"前氧传感器故障检修",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介7",
        "ppt":"ppt6"
    },
    {
        "num": "intro13",
        "numi":"intro113",
        "images":"imgs/更换雨刮总成da.jpg",
        "title":"更换雨刮总成",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介6",
        "ppt":"ppt5"
    },
    {
        "num": "intro14",
        "numi":"intro114",
        "images":"imgs/前氧传感器故障检修da.jpg",
        "title":"前氧传感器故障检修",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介7",
        "ppt":"ppt6"
    },
    {
        "num": "intro15",
        "numi":"intro115",
        "images":"imgs/更换雨刮总成da.jpg",
        "title":"更换雨刮总成",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介6",
        "ppt":"ppt5"
    },
    {
        "num": "intro16",
        "numi":"intro116",
        "images":"imgs/前氧传感器故障检修da.jpg",
        "title":"前氧传感器故障检修",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介7",
        "ppt":"ppt6"
    },
    {
        "num": "intro17",
        "numi":"intro117",
        "images":"imgs/更换雨刮总成da.jpg",
        "title":"更换雨刮总成",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介6",
        "ppt":"ppt5"
    },
    {
        "num": "intro18",
        "numi":"intro118",
        "images":"imgs/前氧传感器故障检修da.jpg",
        "title":"前氧传感器故障检修",
        "href":"video-html/video.html",
        "titlehref":"不带树形的二级.html",
        "introduce":"简介7",
        "ppt":"ppt6"
    }
];


