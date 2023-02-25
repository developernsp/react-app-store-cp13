import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appId, appName, imageUrl, category} = appItem

  return (
    <div className="items-container">
      <li className="app-item">
        <img src={imageUrl} alt={appName} className="app-image" />
        <p className="app-name">{appName}</p>
      </li>
    </div>
  )
}
export default AppItem
