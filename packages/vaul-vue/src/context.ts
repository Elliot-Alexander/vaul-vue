import type { ComponentPublicInstance, Ref } from 'vue'
import { createContext } from './shared/createContext'

export interface DrawerRootContext {
  isOpen: Ref<boolean>
  openProp: Ref<boolean | undefined>
  modal: Ref<boolean>
  hasBeenOpened: Ref<boolean>
  isVisible: Ref<boolean>
  drawerRef: Ref<ComponentPublicInstance | null>
  overlayRef: Ref<ComponentPublicInstance | null>
  isDragging: Ref<boolean>
  dragStartTime: Ref<Date | null>
  isAllowedToDrag: Ref<boolean>
  snapPoints: Ref<(number | string)[] | undefined>
  keyboardIsOpen: Ref<boolean>
  activeSnapPoint: Ref<number | string | null | undefined>
  pointerStartY: Ref<number>
  dismissible: Ref<boolean>
  drawerHeightRef: Ref<number>
  snapPointsOffset: Ref<number[]>
  onPress: (event: PointerEvent) => void
  onDrag: (event: PointerEvent) => void
  onRelease: (event: PointerEvent) => void
  closeDrawer: () => void
  shouldFade: Ref<boolean>
  fadeFromIndex: Ref<number | undefined>
  shouldScaleBackground: Ref<boolean | undefined>
  onNestedDrag: (percentageDragged: number) => void
  onNestedRelease: (o: boolean) => void
  onNestedOpenChange: (o: boolean) => void
  emitClose: () => void
  emitDrag: (percentageDragged: number) => void
  emitRelease: (open: boolean) => void
  emitOpenChange: (o: boolean) => void
  nested: Ref<boolean>
}

export const [injectDrawerRootContext, provideDrawerRootContext] =
  createContext<DrawerRootContext>('DrawerRoot')
