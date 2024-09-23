import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AttributionRoundedIcon from '@mui/icons-material/AttributionRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import TroubleshootRoundedIcon from '@mui/icons-material/TroubleshootRounded';
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery("(max-width: 768px)"); // Detect screen size
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu open/close


  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& .pro-sub-menu .pro-inner-item": {
          fontWeight: "bold",
        },
      }}
    >
      {/* Hamburger Menu Icon */}
      {isMobile && (
        <IconButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          sx={{ position: "fixed", top: 10, left: 10, zIndex: 1000 }}
        >
          <MenuOutlinedIcon />
        </IconButton>
      )}
      <ProSidebar collapsed={isCollapsed} toggled={isMenuOpen} breakPoint="md" onToggle={setIsMenuOpen}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
                  VNG
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VNG Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Tasks" to="/tasks" icon={<AssignmentRoundedIcon />} selected={selected} setSelected={setSelected} />
            <SubMenu title="Rates" icon={<TroubleshootRoundedIcon />} sx={{ fontWeight: "bold" }}>
              <MenuItem icon="FR">
                <Item title="Freight" to="/freight" selected={selected} setSelected={setSelected} />
              </MenuItem>
              <MenuItem icon="LC">
                <Item title="Local Charges" to="/local-charges" selected={selected} setSelected={setSelected} />
              </MenuItem>
              <MenuItem icon="SE">
                <Item title="Services" to="/services" selected={selected} setSelected={setSelected} />
              </MenuItem>
            </SubMenu>

            <SubMenu title="Quotes" icon={<RequestQuoteRoundedIcon />}>
              <MenuItem icon="LI">
                <Item title="List" to="/list" selected={selected} setSelected={setSelected} />
              </MenuItem>
              <MenuItem icon="RE">
                <Item title="Request" to="/request" selected={selected} setSelected={setSelected} />
              </MenuItem>
            </SubMenu>

            <SubMenu title="Shipments" icon={<LocalShippingRoundedIcon />}>
              <MenuItem icon="LI">
                <Item title="List" to="/list" selected={selected} setSelected={setSelected} />
              </MenuItem>
              <MenuItem icon="MA">
                <Item title="Manifest" to="/manifest" selected={selected} setSelected={setSelected} />
              </MenuItem>
              <MenuItem icon="CU">
                <Item title="Customs" to="/customs" selected={selected} setSelected={setSelected} />
              </MenuItem>
              <MenuItem icon="TR">
                <Item title="Trucking" to="/trucking" selected={selected} setSelected={setSelected} />
              </MenuItem>
              <MenuItem icon="CO">
                <Item title="Consol" to="/consol" selected={selected} setSelected={setSelected} />
              </MenuItem>
            </SubMenu>

            <hr style={{ borderColor: colors.grey[300], margin: "10px 0" }} />
            <Item title="Leads" to="/leads" icon={<AccountCircleRoundedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Clients" to="/clients" icon={<AttributionRoundedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Providers" to="/providers" icon={<HandshakeRoundedIcon />} selected={selected} setSelected={setSelected} />

            <hr style={{ borderColor: colors.grey[300], margin: "10px 0" }} />
            <Item title="Accounting" to="/accounting" icon={<LocalAtmRoundedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Reports" to="/reports" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />

            <hr style={{ borderColor: colors.grey[300], margin: "10px 0" }} />
            <Item title="Setting" to="/setting" icon={<SettingsRoundedIcon />} selected={selected} setSelected={setSelected} />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
