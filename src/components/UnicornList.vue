<template>
    <div class="temp">
        <Table :loading="listData.loading" :columns="listData.columns" :data="listData.data"></Table>
    </div>
</template>

<script>
export default {
    name: "Unicorn",
    created() {
        this.axios.get(this.globalActionUrl.unicorn.list).then(res => {
            this.listData.data = res;
            this.listData.loading = false;
        });
    },
    data() {
        return {
            searchData: {},
            listData: {
                loading: true,
                columns: [
                    {
                        type: "index",
                        title: "序号",
                        align: "left",
                        width: 60
                    },
                    {
                        title: "名称",
                        render: (h, params) => {
                            return h(
                                "div",
                                {
                                    style: {
                                        height: "50px",
                                        marginTop: "25px",
                                        marginBottom: "25px",
                                    }
                                },
                                [
                                    h(
                                        "div",
                                        {
                                            style: {
                                                width: "50px",
                                                height: "50px",
                                                float: "left"
                                            }
                                        },
                                        [
                                            h("Avatar", {
                                                style: {
                                                    width: "50px",
                                                    height: "50px"
                                                },
                                                props: {
                                                    shape: "square",
                                                    src: params.row.logo_url
                                                }
                                            })
                                        ]
                                    ),
                                    h(
                                        "div",
                                        {
                                            style: {
                                                height: "50px",
                                                float: "left",
                                                marginLeft: "10px"
                                            }
                                        },
                                        [
                                            h(
                                                "div",
                                                {
                                                    style: {
                                                        height: "25px",
                                                        lineHeight: "25px",
                                                        fontSize: "16px"
                                                    },
                                                    props: {}
                                                },
                                                [params.row.name]
                                            ),
                                            h(
                                                "div",
                                                {
                                                    style: {
                                                        height: "25px",
                                                        lineHeight: "25px",
                                                    },
                                                    props: {}
                                                },
                                                [
                                                    h(
                                                        "a",
                                                        {
                                                            style: {
                                                                color:
                                                                    "#1890ff",
                                                                fontSize: "14px"
                                                            },
                                                            attrs: {
                                                                href:
                                                                    params.row
                                                                        .permalink,
                                                                target: "_blank"
                                                            }
                                                        },
                                                        "点我访问"
                                                    )
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            );
                        }
                    },
                    {
                        title: "国家",
                        key: "country"
                    },
                    {
                        title: "成立年份",
                        key: "founded_on"
                    },
                    {
                        title: "行业",
                        key: "category"
                    },
                    {
                        title: "最新融资",
                        key: "last_funding_on"
                    },
                    {
                        title: "资产总值",
                        key: "total_equity_funding"
                    }
                ],
                data: []
            }
        };
    }
};
</script>

<style scoped>
.temp {
    margin: auto;
    width: 80%;
}
</style>
