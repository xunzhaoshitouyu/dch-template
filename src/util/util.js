import { Message } from 'element-ui'

export function showMsg (msg) {
  const option = {
    message: msg,
    center: true,
    maxCount: 1,
    customClass: 'dch-tooltip'
  }

  Message(option)
}
