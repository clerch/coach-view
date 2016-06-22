import React from 'react'
import Badge from 'material-ui/Badge'
import IconButton from 'material-ui/IconButton'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'

export default class NotificationBadgeContainer extends React.Component {
  render() {
    return(
      <Badge
          className="notificationBadgeContainer"
          badgeContent={10}
          secondary={true}
          badgeStyle={{top: 16, right: 16}}
        >
          <NotificationsIcon />
      </Badge>
    )
  }
}
