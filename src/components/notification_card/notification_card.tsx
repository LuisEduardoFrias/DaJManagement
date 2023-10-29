import React, { useState } from "react";
import Icon from "@/components/icon/icon";
import "./notification_card.css";

type NotificationCardProps = {
  text: string;
  visible: boolean
};

export default function NotificationCard({
  text, visible
}): React.FC<NotificationCardProps> {
  const [isVisible, setIsVisible] = useState(visible);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className='notification-card'>
          <div className='notification-text'>{text}</div>
          <button className='close-button' onClick={handleClose}>
            <Icon iconName='close' />
          </button>
        </div>
      )}
    </>
  );
}
