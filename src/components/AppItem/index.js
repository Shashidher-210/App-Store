import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-items">
      <div className="image-container">
        <img src={imageUrl} className="image" alt={appName} />
        <p className="description">{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
