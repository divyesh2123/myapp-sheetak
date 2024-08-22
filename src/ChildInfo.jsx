import React from 'react'

function ChildInfo(props) {

    console.log(props);
  return (
    <div>ChildInfo</div>
  )
}

export default React.memo(ChildInfo,(pre,curret)=>{

    return pre.p.data.length == curret.p.data.length;
})
