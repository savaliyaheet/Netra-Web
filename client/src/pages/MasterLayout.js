import React, { useState } from "react";
import Tweet from "../assets/images/logo.svg";
import { PrimaryButton } from "../components/buttons";
import {
  AiOutlineDashboard,
  AiOutlineSchedule,
  AiOutlineMenu,
} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiPlus } from "react-icons/hi";
import { TbDeviceAnalytics } from "react-icons/tb";
import { BiGridAlt } from "react-icons/bi";
import "../styles/components/sidebar/sidebar.css";
import { NavLink, Outlet } from "react-router-dom";
import Select from "./Select";
import { FiChevronDown } from "react-icons/fi";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { User1 } from "../assets";

function MasterLayout() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <>
      {/* begin::SIDEBAR */}
      <div
        className={`${
          isSidebarActive && "hide"
        } aside position-fixed top-0 start-0`}
      >
        {/* begin::LOGO-SECTION */}
        <div className="aside_logoSection px-3 py-2 d-inline-flex align-items-center justify-content-center w-100 gap-2">
          <img src={Tweet} alt="" />
          <span className="logo-heading">Tweet Netra</span>
        </div>
        {/* end::LOGO-SECTION */}
        <div className="sidebar-scroll">
          {/* begin:: SELECT-PROFILE */}
          <div className="aside_SelectOption py-3 px-2">
            <Select isSidebarActive={isSidebarActive} />
          </div>
          {/* end:: SELECT-PROFILE */}
          {/* begin:: CREATE-POST-BUTTON */}
          <div className="px-2 createPostBtn py-3">
            <PrimaryButton>
              <HiPlus className="icon" />
              <span>Create Post</span>
            </PrimaryButton>
          </div>
          {/* end:: CREATE-POST-BUTTON */}

          {/* start:: SIDEBAR-NAV-LINKS */}
          <ul className="aside_navLinks ps-2 pe-2">
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement={"right-end"}
              overlay={
                <Tooltip bsPrefix="tooltip" className="newTooltip">
                  Dashboard
                </Tooltip>
              }
            >
              <li>
                <NavLink to="dashboard">
                  <AiOutlineDashboard className="navIcon" />
                  <span className="linkName">Dashboard</span>
                </NavLink>
              </li>
            </OverlayTrigger>

            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement={"right-end"}
              overlay={<Tooltip>Analytics</Tooltip>}
            >
              <li>
                <NavLink to="analytics">
                  <TbDeviceAnalytics className="navIcon" />
                  <span className="linkName">Analytics</span>
                </NavLink>
              </li>
            </OverlayTrigger>
          </ul>
          {isSidebarActive ? (
            <div className="list-separator"></div>
          ) : (
            <p className="mb-0 text-capitalize ms-2 text-secondary">POSTS</p>
          )}

          <ul className="aside_navLinks ps-2 pe-2">
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement={"right-end"}
              overlay={<Tooltip>Schedule</Tooltip>}
            >
              <li>
                <NavLink to="schedule">
                  <AiOutlineSchedule className="navIcon" />
                  <span className="linkName">Schedule</span>
                </NavLink>
              </li>
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement={"right-end"}
              overlay={<Tooltip>Posts</Tooltip>}
            >
              <li>
                <NavLink to="posts">
                  <BiGridAlt className="navIcon" />
                  <span className="linkName">Posts</span>
                </NavLink>
              </li>
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement={"right-end"}
              overlay={<Tooltip>Posts</Tooltip>}
            >
              <li>
                <NavLink to="posts">
                  <BiGridAlt className="navIcon" />
                  <span className="linkName">Posts</span>
                </NavLink>
              </li>
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement={"right-end"}
              overlay={<Tooltip>Posts</Tooltip>}
            >
              <li>
                <NavLink to="posts">
                  <BiGridAlt className="navIcon" />
                  <span className="linkName">Posts</span>
                </NavLink>
              </li>
            </OverlayTrigger>
          </ul>
          {/* end:: SIDEBAR-NAV-LINKS */}
        </div>
      </div>
      {/* end::SIDEBAR */}
      <div className="main-container">
        {/* begin:: HEADER */}
        <div className="header">
          <div className="header_left">
            <AiOutlineMenu className="headerIcon" onClick={toggleSidebar} />
          </div>
          <div className="header_right d-flex align-items-center gap-3">
            <div className="notification">
              <IoMdNotificationsOutline className="headerIcon" />
              <span className="notification-status"></span>
            </div>
            <div className="profile-detials">
              <img src={User1} alt="" className="profile_img" />
              <FiChevronDown className="headerIcon ms-3" />
            </div>
          </div>
        </div>

        {/* !end:: HEADER */}
        {/* begin::PAGE-CONTAINER */}
        <div className="page-container">
          <Outlet />
        </div>
        {/* end::PAGE-CONTAINER */}
      </div>
    </>
  );
}

export default MasterLayout;
