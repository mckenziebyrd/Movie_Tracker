import React from 'react'
import {AiOutlineStar, AiOutlineHeart, AiOutlineHistory, AiOutlineShoppingCart} from "react-icons/ai"
import {MdMenuBook} from "react-icons/md"

export const SidebarData = [
  {
    title: 'HOME',
    path: './home',
    icon: <MdMenuBook />,
    className: 'nav-text'
  },
  {
    title: 'WATCH LIST',
    path: './watchlist',
    icon: <AiOutlineShoppingCart />,
    className: 'nav-text'
  },
  {
    title: 'NEED TO WATCH LIST',
    path: './needtowatch',
    icon: <AiOutlineStar />,
    className: 'nav-text'
  },
  {
    title: 'FAVORITES',
    path: './favorites',
    icon: <AiOutlineHistory />,
    className: 'nav-text'
  },
  {
    title: 'SEARCH',
    path: './search',
    icon: <AiOutlineHeart />,
    className: 'nav-text'
  },
  {
    title: 'LOGOUT',
    path: './logout',
    icon: <AiOutlineHeart />,
    className: 'nav-text'
  }
]