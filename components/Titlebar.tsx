import React from "react";

const Titlebar = () => {
  return (
    <div className="title-bar">
      <div className="window-controls">
        <button id="closeButton" className="close" aria-label="Close">
          <Image
            src="/assets/svg/close.svg"
            alt="Close"
            width={28}
            height={28}
          />
        </button>
        <button id="minimizeButton" className="minimize" aria-label="Minimize">
          <Image
            src="/assets/svg/minimize.svg"
            alt="Minimize"
            width={28}
            height={28}
          />
        </button>
        <button id="maximizeButton" className="maximize" aria-label="Maximize">
          <Image
            src="/assets/svg/maximize.svg"
            alt="Maximize"
            width={28}
            height={28}
          />
        </button>
      </div>

      <div className="sidebar-buttons">
        <div
          id="toggleSidebar"
          className="SidebarLeft"
          aria-label="Toggle Sidebar"
          onClick={toggleLeftSidebar}>
          <Image
            src={leftSidebarIcon}
            alt="Left Sidebar"
            width={28}
            height={28}
          />
        </div>
        <div
          id="toggleSidebarRight"
          className="SidebarRight"
          aria-label="Toggle Sidebar"
          onClick={toggleBottomBar}>
          <Image
            src={bottombarIcon}
            alt="Right Sidebar"
            width={28}
            height={28}
          />
        </div>
        <div
          id="toggleSidebarBottom"
          className="SidebarBottom"
          aria-label="Toggle Bottom Bar"
          onClick={toggleRightSidebar}>
          <Image
            src={rightSidebarIcon}
            alt="Bottom Bar"
            width={28}
            height={28}
          />
        </div>
      </div>
    </div>
  );
};

export default Titlebar;
