"use client";
import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import Image from 'next/image'
import leftSidebarIcon from "../public/leftsidebar.svg";
import bottombarIcon from "../public/bottombar.svg";
import rightSidebarIcon from "../public/rightsidebar.svg";
import "../app/styles/titlebar.scss";

const Titlebar = () => {
  const { toggleLeftSidebar, toggleRightSidebar, toggleBottomBar } =
    useAppContext();

  useEffect(() => {
    const closeButton = document.getElementById("closeButton");
    const minimizeButton = document.getElementById("minimizeButton");
    const maximizeButton = document.getElementById("maximizeButton");

    // Close App
    closeButton.addEventListener("click", () => {
      window.electronAPI.closeApp();
    });

    // Minimize App
    minimizeButton.addEventListener("click", () => {
      window.electronAPI.minimizeApp();
    });

    // Maximize or Restore App
    maximizeButton.addEventListener("click", () => {
      window.electronAPI.maximizeApp();
    });

    // Cleanup event listeners
    return () => {
      closeButton.removeEventListener("click", () => {
        window.electronAPI.closeApp();
      });
      minimizeButton.removeEventListener("click", () => {
        window.electronAPI.minimizeApp();
      });
      maximizeButton.removeEventListener("click", () => {
        window.electronAPI.maximizeApp();
      });
    };
  }, []);


  return (
    <div className="title-bar">
      <div className="window-controls">
        <button id="closeButton" className="close titlebar-button" aria-label="Close">
          <Image
            src="/assets/svg/close.svg"
            alt="Close"
            width={28}
            height={28}
          />
        </button>
        <button id="minimizeButton" className="minimize titlebar-button" aria-label="Minimize">
          <Image
            src="/assets/svg/minimize.svg"
            alt="Minimize"
            width={28}
            height={28}
          />
        </button>
        <button id="maximizeButton" className="maximize titlebar-button" aria-label="Maximize">
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
            className="titlebar-img"
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
            className="titlebar-img"
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
            className="titlebar-img"
            width={28}
            height={28}
          />
        </div>
      </div>
    </div>
  );
};

export default Titlebar;



