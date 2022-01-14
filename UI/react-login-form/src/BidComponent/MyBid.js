import React from 'react'
import { connect } from 'react-redux'

var mapStateToProps = state => {
  return {
    products: state.masterdata.products
  }
}

class MyBid extends React.Component {

  render() {
    return <>
    <h6>My bid component</h6>
    </>
    }
}
export default connect(mapStateToProps)(MyBid);