import { Text, View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Index() {
  useLoad(() => {
    // eslint-disable-next-line no-console
    console.log('Page loaded.')
  })

  return (
    <View className="index bg-[#123456]">
      <Text className="text-(--xx)">Hello world!</Text>
    </View>
  )
}
