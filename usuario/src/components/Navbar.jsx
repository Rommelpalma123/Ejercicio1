import { Link, useLocation } from "react-router-dom"
import { Menu } from "antd"
import { UserOutlined, ApiOutlined } from "@ant-design/icons"
export const Navbar = () => {
  const headerStyle = {
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    width: "100%", // Establece el ancho al 100%
    position: "fixed", // Fija el Navbar en la parte superior
    top: 0 ,// Asegura que el Navbar esté en la parte superior
  }

  const location = useLocation()

  return (
    <Menu
      mode='horizontal'
      style={headerStyle}
      theme='dark'
      selectedKeys={[location.pathname]}
    >
      <Menu.Item
        key='/'
        icon={<UserOutlined />}
      >
        <Link to='/'>Usuario</Link>
      </Menu.Item>
      <Menu.Item
        key='/api'
        icon={<ApiOutlined />}
      >
        <Link to='/api'>API</Link>
      </Menu.Item>
    </Menu>
  )
}
