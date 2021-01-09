const movieTabs = [
    {
        code: 'popular',
        title: '热门',
        recommends: [
            {
                poster: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2626308994.jpg'
            },
            {
                poster: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2622841648.jpg'
            },
            {
                poster: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2626959989.jpg'
            },
            {
                poster: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2617820253.jpg'
            },
            {
                poster: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2622841648.jpg'
            },
            {
                poster: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2626959989.jpg'
            }
        ]
    },
    {
        code: 'latest',
        title: '最新',
        recommends: [
            {
                poster: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2614859862.jpg',
            },
            {
                poster: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2629408850.jpg',
            },
            {
                poster: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2625712624.jpg',
            },
            {
                poster: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2626255877.jpg',
            },
            {
                poster: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2625712624.jpg',
            },
            {
                poster: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2626255877.jpg',
            }
        ]
    },
    {
        code: 'hight-score',
        title: '豆瓣高分',
        recommends: [
            {
                poster: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2561305376.jpg',
            },
            {
                poster: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2626308994.jpg',
            },
            {
                poster: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2627676222.jpg',
            },
            {
                poster: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.jpg',
            },
            {
                poster: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg',
            },
            {
                poster: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557573348.jpg',
            }
        ]
    },
    {
        code: 'minority',
        title: '冷门佳片',
        recommends: [
            {
                poster: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2611203679.jpg',
            },
            {
                poster: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1500192957.jpg',
            },
            {
                poster: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2160014935.jpg',
            },
            {
                poster: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2545641131.jpg',
            },
            {
                poster: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg',
            },
            {
                poster: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557573348.jpg',
            }
        ]
    },
    {
        code: 'chinese',
        title: '华语',
        recommends: [
            {
                poster: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2561305376.jpg',
            },
            {
                poster: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2626714671.jpg',
            },
            {
                poster: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2572166063.jpg',
            },
            {
                poster: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561716440.jpg',
            },
            {
                poster: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg',
            },
            {
                poster: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2567998580.jpg',
            }
        ]
    },
    {
        code: 'america',
        title: '欧美',
        recommends: [
            {
                poster: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2549177902.jpg',
            },
            {
                poster: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2614500706.jpg',
            },
            {
                poster: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2614500649.jpg',
            },
            {
                poster: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561716440.jpg',
            },
            {
                poster: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p457760035.jpg',
            },
            {
                poster: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg',
            }
        ]
    },
    {
        code: 'keroa',
        title: '韩国',
        recommends: [
            {
                poster: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2360940399.jpg',
            },
            {
                poster: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578045524.jpg',
            },
            {
                poster: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2572166063.jpg',
            },
            {
                poster: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561716440.jpg',
            },
            {
                poster: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg',
            },
            {
                poster: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2158166535.jpg',
            }
        ]
    },
    {
        code: 'japan',
        title: '日本',
        recommends: [
            {
                poster: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2395733377.jpg',
            },
            {
                poster: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557573348.jpg',
            },
            {
                poster: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1446261379.jpg',
            },
            {
                poster: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561716440.jpg',
            },
            {
                poster: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg',
            },
            {
                poster: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2158166535.jpg',
            }
        ]
    },
]

const scrollMaterials = {
    sectionOne: {
        img: 'http://image109.360doc.com/DownloadImg/2020/01/1215/180269633_8_20200112035550658',
        title: 'National Geographic',
        desc: 'Subscribe for full access to read stories from National Geographic.'
    },
    sectionTwo: {
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fcollect%2Fcrawl%2F20171011%2FfzNz-fymrcmn0153757.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612183407&t=f965d4b659d1019e98de2dad9c78f014',
        title: 'Portraits that \n come out at night.',
        desc: 'Night mode portraitson the Wide camera give you vivid color, as well as beautiful bokeh that accentuates lit buildings, streetlights — any background lights.'
    }
    // sectionThree: {
    //     img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fcollect%2Fcrawl%2F20171011%2FfzNz-fymrcmn0153757.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612183407&t=f965d4b659d1019e98de2dad9c78f014',
    //     title: 'Portraits that \n come out at night.',
    //     desc: 'Night mode portraitson the Wide camera give you vivid color, as well as beautiful bokeh that accentuates lit buildings, streetlights — any background lights.'
    // }
}
module.exports = {
    movieTabs,
    scrollMaterials
}