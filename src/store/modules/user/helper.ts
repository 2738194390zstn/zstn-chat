import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://36dfgame.cn/wp-content/uploads/2023/05/1684487964-46d27c1fab8d9d8.png',
      name: 'Dafa',
      description: '由<a href="https://36dfapp.cn/" class="text-blue-500" target="_blank" > 大发的小店 </a>搭建',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
