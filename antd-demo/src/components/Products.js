/**
 * Created by chenyao0913 on 2016/3/28.
 */
import React, { PropTypes, Component } from 'react'
import {Row,Col,Table,Button,Icon} from 'antd';

const columns = [{
  title: '产品ID',
  dataIndex: 'id',
  key: 'id',
  render(text) {
    return <a href="#">{text}</a>;
  }
},{
  title: '产品名称',
  dataIndex: 'name',
  key: 'name'
}, {
  title: '产品主分类',
  dataIndex: 'mainCata',
  key: 'mainCata'
},{
  title:'添加时间',
  dataIndex:'addTime',
  key:'addTime'
}, {
  title:'产品状态',
  dataIndex:'status',
  key:'status'
},{
  title: '操作',
  key: 'op',
  render(text, record) {
    return (
      <div>
        {record.op.map(item => (<Button size="small" style={{marginRight:5}}>{item}</Button>))}
      </div>
    );
  }
}]


export default class Products extends Component {
  render() {
    return (
            <Table columns={columns} dataSource={this.props.pros} />
          )
  }
}

Products.propTypes = {
  pros: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}
