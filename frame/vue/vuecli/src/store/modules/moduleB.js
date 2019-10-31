/* 模块A */

const moduleB = {
    state: {
        articleList: [
            {
                id: 1,
                title: 'a',
                text: 'aa'
            },
            {
                id: 2,
                title: 'b',
                text: 'bb'
            }
        ]
    },
    mutations: {
        
    },

    actions: {
        
    },

    getters: {
        articleList(state) {
            return state.articleList
        }
    }
}

export default moduleB