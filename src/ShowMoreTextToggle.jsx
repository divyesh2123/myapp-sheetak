import React from 'react'

export default function ShowMoreTextToggle({text}) {
    const [showMore, setShowMore] = React.useState(false);
    const myData =() => {
        console.log("this is the calculating");
        return text.slice(0, 30).concat('...');
      }
      const truncateText = React.useMemo(() => {
        console.log("this is the calculating");
      return text.slice(0, 30).concat('...');
},[text]);
      

  return (
    <React.Fragment>
    <div>this</div>
    <div>
        <p onClick={() => setShowMore(!showMore)}>
      {showMore ? text : truncateText} {showMore ? 'less' : 'more'}
    </p>
    </div>
    </React.Fragment>
  )
}
