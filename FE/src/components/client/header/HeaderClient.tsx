import React from 'react'
import styles from './HeaderClient.module.scss';
import { logoPath } from '../../../constant/client';
import { Link } from 'react-router-dom';
import { Dropdown, MenuProps, message, Space } from 'antd';
import { CaretDownOutlined, DownOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';

const HeaderClient = () => {

  const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

  return (
    <>
      <header className={`${styles['header']} rounded-3xl p-6`}>
        <div className={`${styles['left']} space-x-6`}>
          <div className="">
            <Link to={''}>New Drop 🔥</Link>
          </div>

          <div className="">
            <Dropdown menu={{ items, onClick }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Men
                  <CaretDownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>

          <div className="">
            <Dropdown menu={{ items, onClick }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Women
                  <CaretDownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
        <div className={`${styles['center']} flex justify-center`}>
          <img src={logoPath} alt="logo" />
        </div>
        <div className={`${styles['right']} flex justify-end space-x-7 items-center`}>
          <div className="cursor-pointer text-xl">
            <SearchOutlined />
          </div>
          
          <div className="cursor-pointer text-xl">
          <UserOutlined />
          </div>

          <div className="cursor-pointer">
              <div className={`${styles['account']} `}>
                  Vũ
              </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderClient