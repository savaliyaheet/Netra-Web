import React from "react";
import { Image, Dropdown } from "react-bootstrap";
import {
  User1,
  User2,
  User3,
  User4,
  User5,
  ChevronDown,
  Check,
} from "../assets";
import { HiPlus, HiOutlineChevronDown } from "react-icons/hi";
import { PrimaryButton } from "../components/buttons";
import "../styles/components/sidebar/select.css";

function Select({ isSidebarActive }) {
  return (
    <Dropdown className="w-100">
      <Dropdown.Toggle
        id="dropdown-basic"
        className="w-100 dropdown-btn"
        variant="secondary"
      >
        <div className="image-container">
          <Image src={User1} />
        </div>
        <span className="d-inline-block text-truncate">Ridham Tarpara</span>
        <HiOutlineChevronDown className="icon text-secondary" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
          <img src={User5} alt="" className="profile_img" />
          <span className="profile_name">Ridham Tarpara</span>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          <img src={User2} alt="" className="profile_img" />
          <span className="profile_name">Ridham Tarpara</span>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          <img src={User2} alt="" className="profile_img" />
          <span className="profile_name">Ridham Tarpara</span>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          <img src={User2} alt="" className="profile_img" />
          <span className="profile_name">Ridham Tarpara</span>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          <img src={User3} alt="" className="profile_img" />
          <span className="profile_name">Ridham Tarpara</span>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          <img src={User3} alt="" className="profile_img" />
          <span className="profile_name">Ridham Tarpara</span>
        </Dropdown.Item>
        <Dropdown.Item>
          <PrimaryButton>
            <HiPlus className="icon" />
            <span>Create Account</span>
          </PrimaryButton>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Select;
