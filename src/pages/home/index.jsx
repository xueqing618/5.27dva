import React, { Component } from 'react'
import { connect } from 'dva';
import { Table, Button, message, Input } from 'antd';
const { Search } = Input;
export default class IndexPage extends Component {
  columns = [
    {
        title: 'id',
        dataIndex: 'id',
    },
    {
        title: '名字',
        dataIndex: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
    },
    {
        title: '性别',
        dataIndex: 'gender',
    },
    {
        title: '信息',
        dataIndex: 'msg',
    },
    {
        title: '地址',
        dataIndex: 'address',
    },
    {
        title: '操作',
        dataIndex: 'id',
        render: (text,item) => {
            return (
                <span>
                    <Button type="link" onClick={()=>this.delFn(text)}>删除</Button>
                    <Button type="link">修改</Button>
                    <Button type="link">添加</Button>
                </span>
            )
        }
    },
];


state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    data:[]
};
render() {
    const { loading, selectedRowKeys, data } = this.state;

    const rowSelection = {
        selectedRowKeys,
        onChange: this.onSelectChange,
    };

    return (
        <div>
            <div style={{ width:300 }}>
                <Search
                    placeholder="这里是搜索"
                    enterButton="搜索"
                    size="large"
                    onSearch={ this.onSearchFn }
                />
            </div>
            <Table size="small" rowKey="id" rowSelection={rowSelection} columns={this.columns} dataSource={data} />
        </div>
    )
}
}