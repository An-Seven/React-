import React from 'react';
import Prolist from '@/components/common/Prolist';
import BannerList from '@/components/common/BannerList';
class Com extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prolist: [],
      bannerlist: []
    }
  }
  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      // console.log(data)
      this.setState({
        prolist: data
      })
    })
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      console.log(data)
      this.setState({
        bannerlist: data
      })
    })
  }
  render () {
    return (
      <div className="box">
        <header className="header">首页头部</header>
        <div className="content">首页内容
          <BannerList bannerlist = { this.state.bannerlist }/>
          <Prolist prolist= { this.state.prolist } {...this.props}/>
        </div>
      </div>
    )
  }
}
export default Com;