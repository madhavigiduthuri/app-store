// Write your code here
import './index.css'

const TabItem = props => {
  const {tabName, selectedTab, onChangingTab, tabId} = props

  return (
    <li
      className={
        tabId === selectedTab
          ? 'tabitems-selected-container'
          : 'tabitems-container'
      }
    >
      <button
        type="button"
        onClick={() => onChangingTab()}
        className={tabId === selectedTab ? 'tabitems-selected' : 'tabitems'}
      >
        {tabName}
      </button>
    </li>
  )
}

export default TabItem
