// Write your code here
import './index.css'

const AppItem = props => {
  const {appImage, name} = props
  return (
    <li className="appitems-container">
      <img src={appImage} alt={name} className="appitem-image" />
      <p className="appitems-name">{name}</p>
    </li>
  )
}

export default AppItem
