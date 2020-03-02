import { ReactElement } from 'react'

import { NgPartyNewIcon } from '../../components'

import { styles, sidebarStyles } from './header.styles'
import { navigation as DATA, LinkModel } from './data'
import { A } from './shared'

export const Header = () => {
  const sidebarId = 'header-sidebar'

  return (
    <>
      <header className="headerbar fixed flex justify-start items-center">
        <style jsx global>
          {styles}
        </style>
        <style jsx global>
          {sidebarStyles}
        </style>
        <SidebarToggle id={sidebarId} />
        <a
          href="big-party-v"
          className="text-decoration-none inline-block mx-auto headerbar-home-link  "
        >
          <div className="headerbar-title mx-auto">
            <NgPartyNewIcon className="headerbar-title-logo" />
            <span>BigParty V</span>
          </div>
        </a>

        <MainNav data={DATA.main} />

        <div className="headerbar-action center m0 p0 flex justify-center nowrap">
          <BuyTicketsAction {...DATA.secondary[0]} />
        </div>
      </header>

      <Sidebar id={sidebarId}>
        <SibebarNav data={DATA.main} />
      </Sidebar>
    </>
  )
}

const MainNav = (props: { data: LinkModel[] }) => {
  const { data } = props
  return (
    <nav className="headerbar-nav nav">
      <ul className="nav-item__list list-reset center m0 p0 flex justify-center nowrap">
        {data.map((item) => {
          return (
            <li className="nav-item" key={item.label}>
              <a href={item.link} className="text-decoration-none block">
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const SidebarToggle = (props: { id: string }) => {
  const { id } = props
  const handleToggleRef = `tap:${id}.toggle`

  return (
    <div
      role="button"
      aria-label="open sidebar"
      on={handleToggleRef}
      tabIndex={0}
      className="navbar-trigger md-hide lg-hide pr2"
    >
      ☰
    </div>
  )
}

const Sidebar = (props: { id: string; children: ReactElement }) => {
  const { children, id } = props
  const handleToggleRef = `tap:${id}.toggle`

  return (
    <amp-sidebar id={id} className="sidebar" layout="nodisplay" side="left">
      <div className="flex justify-start items-center sidebar-header">
        <div
          role="button"
          aria-label="close sidebar"
          on={handleToggleRef}
          tabIndex={0}
          className="navbar-trigger items-start"
        >
          ✕
        </div>
      </div>
      {children}
    </amp-sidebar>
  )
}

const SibebarNav = (props: { data: LinkModel[] }) => {
  const { data } = props
  return (
    <nav className="sidebar-nav nav">
      <ul className="list-reset m0 p0 label">
        {data.map((item) => {
          return (
            <li
              className="nav-item land-see-sidebar-nav-item title-sm sidebar-link"
              key={item.label}
            >
              <a className="nav-link" href={item.link}>
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const BuyTicketsAction = (props: LinkModel) => {
  const { link, label } = props

  return (
    <A href={link} className="text-decoration-none headerbar-action-link">
      {label}
    </A>
  )
}
