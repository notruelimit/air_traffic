import React from 'react'
import '../../style/planeList/Plane.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Plane (props) {
  let icon
  switch (props.bound) {
    case 'east':
      icon = <FontAwesomeIcon size="lg" icon="plane" />
    break
    case 'west':
      icon = <FontAwesomeIcon size="lg" rotation={180} icon="plane" />
      break
    default:
      icon = 'Unknown'
  }

  return (
    <div className="Plane">
      <div className="Plane__direction">
        {icon}
      </div>
      <div className="Plane__altitude">
        <p>Altitude</p>
        <p>{props.altitude ? props.altitude : 'Unknown'}</p>
      </div>
      <div className="Plane__code-number">
        <p>Code Number</p>
        <p>{props.code ? props.code : 'Unknown'}</p>
      </div>
    </div>
  )
}

