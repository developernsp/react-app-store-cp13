import './index.css'

const TabItem = props => {
  const {tabList, isActive, onBtn} = props
  const {displayText, tabId} = tabList

  const active = isActive ? 'activeTab' : ''

  const onClicked = () => {
    onBtn(tabId)
  }

  return (
    <div>
      <li className={`tab-item ${active}`}>
        <button type="button" className="btn" onClick={onClicked}>
          <h1 className="tab-name">{displayText}</h1>
        </button>
      </li>
    </div>
  )
}
export default TabItem
