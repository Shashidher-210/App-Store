import './index.css'

const TabItem = props => {
  const {tabDetails} = props
  const {displayText} = tabDetails

  return (
    <li className="tab-items">
      <button className="tab-btn" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
